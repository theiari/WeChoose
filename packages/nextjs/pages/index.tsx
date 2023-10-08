import { useState } from "react";
import Link from "next/link";
import { Abi, AbiFunction } from "abitype";
import type { NextPage } from "next";
import { useAccount, useContractRead, useContractReads } from "wagmi";
import {
  ArrowRightOnRectangleIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { ContractUI } from "~~/components/scaffold-eth/Contract/ContractUI2";
import { DisplayVariable } from "~~/components/scaffold-eth/Contract/DisplayVariable2";
import { useDeployedContractInfo, useScaffoldContract } from "~~/hooks/scaffold-eth";
import { Idea } from "~~/types/Idea";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

const Home: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useAccount({
    onDisconnect: () => setLoggedIn(false),
    onConnect: () => setLoggedIn(true),
  });
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const handleIdeaClick = (idea: Idea) => {
    if (selectedIdea && selectedIdea.ballotId === idea.ballotId) return setSelectedIdea(null);
    setSelectedIdea(idea);
  };

  const [addingIdea, setAddingIdea] = useState(false);
  const handleAddIdea = () => {
    if (addingIdea) return setAddingIdea(false);
    setAddingIdea(true);
  };
  const contractName = "YourContract";
  const { data: contract } = useScaffoldContract({ contractName });
  console.log("contract", contract);
  const { data: contractData } = useContractReads({
    address: contract?.address,
    abi: contract?.abi as Abi,
  });
  console.log(
    "abifunctionvote",
    contract?.abi.find((fn: AbiFunction) => fn.name === "Vote"),
  );
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <button
          style={{ position: "absolute", bottom: "2.5rem", right: "2rem", borderRadius: "10px" }}
          className="btn-primary p-3"
          onClick={handleAddIdea}
        >
          Add New Idea
        </button>
        <div className="px-5 mb-8">
          <h1 className="text-center mb-4">
            <span className="text-2xl">Welcome to</span> <span className="text-4xl font-bold">We Choose</span>
          </h1>
          <div className="text-center text-xl">Vote for ideas you like!</div>
        </div>
        {loggedIn ? (
          // <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          //   <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          //     <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          //       <LightBulbIcon className="h-8 w-8 fill-secondary" />
          //       <p>
          //         Submit a new proposal through{" "}
          //         <Link href="/new" passHref className="link">
          //           Push Idea
          //         </Link>{" "}
          //         tab.
          //       </p>
          //     </div>
          //     <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          //       <ClipboardDocumentCheckIcon className="h-8 w-8 fill-secondary" />
          //       <p>
          //         Select your favourite in the{" "}
          //         <Link href="/vote" passHref className="link">
          //           Vote Ideas
          //         </Link>{" "}
          //         page.
          //       </p>
          //     </div>
          //     <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          //       <QueueListIcon className="h-8 w-8 fill-secondary" />
          //       <p>
          //         Check the list of latest{" "}
          //         <Link href="/approved" passHref className="link">
          //           Approved Ideas
          //         </Link>{" "}
          //         in the last tab.
          //       </p>
          //     </div>
          //   </div>
          // </div>
          <div style={{ display: "flex", height: "70vh", width: "100%", overflowY: "hidden" }}>
            <ul style={{ overflowY: "auto", width: "100%" }}>
              <DisplayVariable
                contractAddress={contract?.address}
                abiFunction={contract?.abi.find((fn: AbiFunction) => fn.name === "getBallots")}
                refreshDisplayVariables={true}
              />
            </ul>
            {addingIdea && (
              <div style={{ position: "absolute", bottom: 0, right: 0 }}>
                <button
                  style={{ position: "absolute", top: "7px", right: "22px", "z-index": "100" }}
                  className="btn btn-ghost btn-sm"
                  onClick={() => setAddingIdea(false)}
                >
                  X
                </button>
                <ContractUI contractName="YourContract" type="write" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
            <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <ArrowRightOnRectangleIcon className="h-8 w-8 fill-secondary" />
                <p>Login using the button below</p>
                <RainbowKitCustomConnectButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
