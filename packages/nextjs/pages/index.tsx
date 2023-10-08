import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import {
  ArrowRightOnRectangleIcon,
  ClipboardDocumentCheckIcon,
  LightBulbIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { ContractUI } from "~~/components/scaffold-eth/Contract/ContractUI2";
import { Idea, votingIdeas } from "~~/types/Idea";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";

const Home: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useAccount({
    onDisconnect: () => setLoggedIn(false),
    onConnect: () => setLoggedIn(true),
  });
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const handleIdeaClick = (idea: Idea) => {
    if (selectedIdea && selectedIdea.id === idea.id) return setSelectedIdea(null);
    setSelectedIdea(idea);
  };

  const [addingIdea, setAddingIdea] = useState(false);
  const handleAddIdea = () => {
    if (addingIdea) return setAddingIdea(false);
    setAddingIdea(true);
  };
  const contractNames = getContractNames();
  console.log("contractNames", contractNames);
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <button
          style={{ position: "absolute", bottom: "2.5rem", right: "2rem" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
              {/* {votingIdeas.length !== 0 && (
                <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
                  <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
                    <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                      <ClipboardDocumentCheckIcon className="h-8 w-8 fill-secondary" />
                      <p>
                        <span className="link">Add a new idea</span>
                      </p>
                    </div>
                  </div>
                </div>
              )} */}
              {votingIdeas.map(idea => (
                <>
                  {selectedIdea && selectedIdea.id === idea.id ? (
                    <li key={idea.id} style={{ cursor: "pointer" }} onClick={() => handleIdeaClick(idea)}>
                      <div className="bg-secondary border-base-200 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 my-2 space-y-1 py-4 mx-4">
                        <div className="flex">
                          <div className="flex flex-col gap-1">
                            <span className="font-bold">{idea.title}</span>
                            <div className="flex gap-1 items-center">
                              <span className="text-sm">{idea.description}</span>
                            </div>
                          </div>
                        </div>
                        <p className="my-0 text-sm">
                          <span className="font-bold">Idea can be voted until</span>:{" "}
                          <span style={{ color: "#999999" }}>{idea.dateVotingTimeout.toLocaleDateString("it")}</span>
                        </p>
                        <p>
                          <span className="font-bold">Proposal document</span>: {idea.link}
                        </p>
                        <p>
                          {" "}
                          <button
                            style={{ borderRadius: "10px" }}
                            className="btn-primary p-3"
                            onClick={() => console.log("ciaoooo")}
                          >
                            Vote Idea
                          </button>
                        </p>
                      </div>
                    </li>
                  ) : (
                    <li key={idea.id} style={{ cursor: "pointer" }} onClick={() => handleIdeaClick(idea)}>
                      <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 my-2 space-y-1 py-4 mx-4">
                        <div className="flex">
                          <div className="flex flex-col gap-1">
                            <span className="font-bold">{idea.title}</span>
                            <div className="flex gap-1 items-center">
                              <span className="text-sm">{idea.description}</span>
                            </div>
                          </div>
                        </div>
                        <p className="my-0 text-sm">
                          <span className="font-bold">Idea can be voted until</span>:{" "}
                          <span style={{ color: "#999999" }}>{idea.dateVotingTimeout.toLocaleDateString("it")}</span>
                        </p>
                      </div>
                    </li>
                  )}
                </>
              ))}
            </ul>
            {addingIdea && (
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                <ContractUI contractName="YourContract" />
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
