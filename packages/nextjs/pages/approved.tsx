import { useState } from "react";
import { Idea, approvedIdeas } from "~~/types/Idea";

const ApprovedPage = () => {
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);

  const handleIdeaClick = (idea: Idea) => {
    if (selectedIdea && selectedIdea.id === idea.id) return setSelectedIdea(null);
    setSelectedIdea(idea);
  };

  return (
    <div style={{ display: "flex", height: "85vh", width: "100%", overflowY: "hidden" }}>
      <ul style={{ overflowY: "auto", width: "100%" }}>
        {approvedIdeas.map(idea => (
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
                    <span className="font-bold">Date Created</span>: {idea.dateCreated.toLocaleString("it")}
                  </p>
                  <p>
                    <span className="font-bold">Proposal document</span>: {idea.link}
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
                </div>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default ApprovedPage;
