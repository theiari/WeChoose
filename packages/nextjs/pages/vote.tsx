import { useState } from "react";
import { Idea, votingIdeas } from "~~/types/Idea";

const VotePage = () => {
  const [ideasState, setIdeasState] = useState<Idea[]>(votingIdeas);

  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);

  const handleIdeaClick = (idea: Idea) => {
    setSelectedIdea(idea);
  };

  const handleVote = (index: number) => {
    const newIdeas = [...ideasState];
    newIdeas[index].votes++;
    setIdeasState(newIdeas);
  };

  return (
    <div style={{ display: "flex", height: "85vh", width: "100%", overflowY: "hidden" }}>
      <ul style={{ overflowY: "auto", width: "100%" }}>
        {votingIdeas.map(idea => (
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
              {idea && (
                <p className="my-0 text-sm">
                  <span className="font-bold">Idea can be voted until</span>:{" "}
                  <span style={{ color: "#999999" }}>{idea.dateVotingTimeout.toLocaleDateString("it")}</span>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {selectedIdea && (
        <div style={{ width: "100%" }} className="bg-secondary p-10">
          <button
            style={{ position: "absolute", top: 10, right: 10 }}
            className="btn btn-ghost btn-sm"
            onClick={() => setSelectedIdea(null)}
          >
            X
          </button>
          <h1 className="text-3xl my-0">{selectedIdea.title}</h1>
          <p className="text-neutral">
            <p className="italic">{selectedIdea.description}</p>
            <p>
              <span className="font-bold">Date Created</span>: {selectedIdea.dateCreated.toLocaleString("it")}
            </p>
            <p>
              <span className="font-bold">Idea can be voted until</span>:{" "}
              {selectedIdea.dateVotingTimeout.toLocaleString("it")}
            </p>
            <p>
              <span className="font-bold">Budget</span>: {selectedIdea.budget} €
            </p>
            <p>
              <span className="font-bold">Proposal document</span>: {selectedIdea.link}
            </p>
          </p>
          <button style={{ borderRadius: "10px" }} className="btn-primary p-3" onClick={() => console.log("ciaoooo")}>
            Vote Idea
          </button>
        </div>
      )}
    </div>
  );
};

export default VotePage;
