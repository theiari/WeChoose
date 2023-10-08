import { useEffect, useState } from "react";
import { Abi, AbiFunction } from "abitype";
import { Address } from "viem";
import { useContractRead, useContractWrite } from "wagmi";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { displayTxResult } from "~~/components/scaffold-eth";
import { useAnimationConfig } from "~~/hooks/scaffold-eth";
import { Idea } from "~~/types/Idea";
import { notification } from "~~/utils/scaffold-eth";

type DisplayVariableProps = {
  contractAddress: Address;
  abiFunction: AbiFunction;
  refreshDisplayVariables: boolean;
};

export const DisplayVariable = ({ contractAddress, abiFunction, refreshDisplayVariables }: DisplayVariableProps) => {
  const {
    data: result,
    isFetching,
    refetch,
  } = useContractRead({
    address: contractAddress,
    functionName: abiFunction?.name,
    abi: [abiFunction] as Abi,
    onError: error => {
      notification.error(error.message);
    },
  });
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: contractAddress,
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "ballotIndex_",
            type: "uint256",
          },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "vote",
  });
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const handleIdeaClick = (idea: Idea) => {
    if (selectedIdea && selectedIdea.ballotId === idea.ballotId) return setSelectedIdea(null);
    setSelectedIdea(idea);
  };

  const { showAnimation } = useAnimationConfig(result);

  // useEffect(() => {
  //   refetch();
  // }, [refetch, refreshDisplayVariables]);
  if (!result) return null;
  const approvedResults = result?.filter((idea: Idea) => idea.validated && idea.approved && idea.received_votes > 9);
  if (approvedResults.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl">No approved ideas</h1>
      </div>
    );

  return (
    <>
      {result
        .filter((idea: Idea) => idea.validated && idea.approved && idea.received_votes > 9)
        .map((idea: Idea) => (
          <>
            {selectedIdea && selectedIdea.ballotId === idea.ballotId ? (
              <li key={idea.ballotId} style={{ cursor: "pointer" }} onClick={() => handleIdeaClick(idea)}>
                <div className="bg-secondary border-base-200 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 my-2 space-y-1 py-4 mx-4">
                  <div className="flex">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">{idea.title}</span>
                      <div className="flex gap-1 items-center">
                        <span className="text-sm">{idea.description}</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    <span className="font-bold">Revised description</span>: {idea.revised_description}
                  </p>
                  <p>
                    <span className="font-bold">Proposal document</span>: {idea.url}
                  </p>
                  <p>
                    <span className="font-bold">Received votes</span>: {idea.received_votes || 0}
                  </p>
                </div>
              </li>
            ) : (
              <li key={idea.ballotId} style={{ cursor: "pointer" }} onClick={() => handleIdeaClick(idea)}>
                <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 my-2 space-y-1 py-4 mx-4">
                  <div className="flex">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold">{idea.title}</span>
                      <div className="flex gap-1 items-center">
                        <span className="text-sm">{idea.description}</span>
                      </div>
                    </div>
                  </div>
                  {/* <p className="my-0 text-sm">
                  <span className="font-bold">Idea can be voted until</span>:{" "}
                  <span style={{ color: "#999999" }}>{idea.dateVotingTimeout.toLocaleDateString("it")}</span>
                </p> */}
                </div>
              </li>
            )}
          </>
        ))}
    </>
    // <div className="space-y-1 pb-2">
    //   <div className="flex items-center gap-2">
    //     <h3 className="font-medium text-lg mb-0 break-all">{abiFunction.name}</h3>
    //     <button className="btn btn-ghost btn-xs" onClick={async () => await refetch()}>
    //       {isFetching ? (
    //         <span className="loading loading-spinner loading-xs"></span>
    //       ) : (
    //         <ArrowPathIcon className="h-3 w-3 cursor-pointer" aria-hidden="true" />
    //       )}
    //     </button>
    //   </div>
    //   <div className="text-gray-500 font-medium flex flex-col items-start">
    //     <div>
    //       <div
    //         className={`break-all block transition bg-transparent ${
    //           showAnimation ? "bg-warning rounded-sm animate-pulse-fast" : ""
    //         }`}
    //       >
    //         {displayTxResult(result)}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
