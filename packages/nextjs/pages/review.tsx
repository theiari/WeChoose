import { useState } from "react";
import { Abi, AbiFunction } from "abitype";
import { useContractReads } from "wagmi";
import { DisplayVariable } from "~~/components/scaffold-eth/Contract/DisplayVariable4";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";
import { Idea } from "~~/types/Idea";

const ApprovedPage = () => {
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);

  const handleIdeaClick = (idea: Idea) => {
    if (selectedIdea && selectedIdea.ballotId === idea.ballotId) return setSelectedIdea(null);
    setSelectedIdea(idea);
  };

  const contractName = "YourContract";
  const { data: contract } = useScaffoldContract({ contractName });
  const { data: contractData } = useContractReads({
    address: contract?.address,
    abi: contract?.abi as Abi,
  });

  return (
    <div style={{ display: "flex", height: "85vh", width: "100%", overflowY: "hidden" }}>
      <ul style={{ overflowY: "auto", width: "100%" }}>
        <DisplayVariable
          contractAddress={contract?.address}
          abiFunction={contract?.abi.find((fn: AbiFunction) => fn.name === "getBallots")}
          refreshDisplayVariables={true}
        />
      </ul>
    </div>
  );
};

export default ApprovedPage;
