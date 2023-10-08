//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author theiari, ansep
 */
contract YourContract {
	// State Variables
	address public immutable owner;
    //address[] public supervisors;
	mapping(address => uint) public userGreetingCounter;
    address[] public supervisors;
	// Events: a way to emit log statements from smart contract that can be listened to by external parties
	

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
        //supervisors[0xdD2FD4581271e230360230F9337D5c0430Bf44C0] = 0; //0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0
        //supervisors[0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199] = 1; //0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e
        supervisors.push(0xdD2FD4581271e230360230F9337D5c0430Bf44C0);
        supervisors.push(0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199);
	}

	// Modifier: used to define a set of rules that must be met before or after a function is executed
	// Check the withdraw() function
	modifier isOwner() {
		// msg.sender: predefined variable that represents address of the account that called the current function
		require(msg.sender == owner, "Not the Owner");
		_;
	}

	

	/**
	 * Function that allows the owner to withdraw all the Ether in the contract
	 * The function can only be called by the owner of the contract as defined by the isOwner modifier
	 */
	function withdraw() public isOwner {
		(bool success, ) = owner.call{ value: address(this).balance }("");
		require(success, "Failed to send Ether");
	}

	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}

	 uint private counter = 0;
     


    // the structure of a ballot object

   
    struct Ballot {
        uint ballotId;
        string title;
        string description;
        string url;
        uint creation_date; //instantly
        uint duration;
        uint received_votes;
        bool approved; //this is changed at the very end of the idea stage, when it has succesfully concluded all the phases
        address author;
        string revised_description; //this parameter should be given by the supervisors AFTER the evaluation phase, it may be a IPFS url to a document, or just a simple condition
        bool validated; //this is the value that the supervisor should change once the published idea is claimed valid/feasible/not illegal/suitable
        
    }

    
    mapping(uint => Ballot) private _ballots;
    mapping(uint => mapping(uint => uint)) private _tally;
    mapping(uint => mapping(address => bool)) public hasVoted;

    function createBallot(
        string memory title_,
        string memory description_,
        string memory url_,
        uint duration_
        
    ) 
    
    external {
        require(duration_ > 0, "Duration must be greater than 0");
        _ballots[counter] = Ballot(counter,title_ , description_, url_, block.timestamp,  duration_ ,0, false, msg.sender, "", false);
        counter++;

    }

    function getBallotByIndex( uint index_) external view returns (Ballot memory ballot) {
        ballot = _ballots[index_];
    }



    function getBallots() public view returns (Ballot[] memory){ //
       Ballot[] memory temp = new Ballot[](counter);

    for (uint i = 0; i < counter; i++) {
        temp[i] = _ballots[i];
    }
    return temp;
}

    function isSupervisor(address sender_) public view returns (bool) {
        for (uint i = 0; i < supervisors.length; i++) {
            
            if (supervisors[i] == sender_) {
                return true;
            }
        }
        return false;
    }

    function validateProject(uint ballotIndex_, string memory revised_description_) public {
        bytes memory tempEmptyStringTest = bytes(revised_description_); 
        require(isSupervisor(msg.sender), "not a supervisor");
        require(tempEmptyStringTest.length !=0 , "Your revised description should contain something!");
        _ballots[ballotIndex_].approved = true;
        _ballots[ballotIndex_].revised_description = revised_description_;
    }

    function updateDescription (uint ballotIndex_, string memory updated_revision) public{
        require(isSupervisor(msg.sender), "not a supervisor");
        bytes memory tempEmptyStringTest = bytes(updated_revision);
        require(tempEmptyStringTest.length !=0 , "Your description should contain something!");
        _ballots[ballotIndex_].revised_description = updated_revision;

    }


    function Vote(uint ballotIndex_) external {
        Ballot storage ballot = _ballots[ballotIndex_];
        require(
            !hasVoted[ballotIndex_][msg.sender],
            "Address already casted a vote for ballot"
        );
        
        require(
            ballot.validated == true,
            "The project has not been validated by any supervisor!"
        );

        require(
            block.timestamp >= ballot.creation_date,
            "Can't cast before start time"
        );
        require(
            block.timestamp < ballot.creation_date + ballot.duration,
            "Can't cast after end time"
        );
        
        ballot.received_votes++;
        hasVoted[ballotIndex_][msg.sender] = true;
        
    }

    //a little big buggy, since it's possible to also call non-existant indexes
    function getVotesForAProject(
        uint ballotIndex_
    )
     external view returns (uint) {
        return _ballots[ballotIndex_].received_votes;
    }

    function getTimeBlock()public view returns (uint256){
        return block.timestamp;
    }

}
