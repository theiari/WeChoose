const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "ballotIndex_",
                  type: "uint256",
                },
              ],
              name: "Vote",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "title_",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description_",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "url_",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "duration_",
                  type: "uint256",
                },
              ],
              name: "createBallot",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index_",
                  type: "uint256",
                },
              ],
              name: "getBallotByIndex",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "ballotId",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "url",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "creation_date",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "received_votes",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "approved",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "author",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "revised_description",
                      type: "string",
                    },
                    {
                      internalType: "bool",
                      name: "validated",
                      type: "bool",
                    },
                  ],
                  internalType: "struct YourContract.Ballot",
                  name: "ballot",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getBallots",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "ballotId",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "url",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "creation_date",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "duration",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "received_votes",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "approved",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "author",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "revised_description",
                      type: "string",
                    },
                    {
                      internalType: "bool",
                      name: "validated",
                      type: "bool",
                    },
                  ],
                  internalType: "struct YourContract.Ballot[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTimeBlock",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "ballotIndex_",
                  type: "uint256",
                },
              ],
              name: "getVotesForAProject",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "hasVoted",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender_",
                  type: "address",
                },
              ],
              name: "isSupervisor",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "supervisors",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "ballotIndex_",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "updated_revision",
                  type: "string",
                },
              ],
              name: "updateDescription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "ballotIndex_",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "revised_description_",
                  type: "string",
                },
              ],
              name: "validateProject",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
