import { useState } from "react";
import { Tender, tenderList } from "~~/types/Tender";

const NewPage = () => {
  const [selectedTender, setSelectedTender] = useState<Tender | null>(null);

  const handleTenderClick = (tender: Tender) => {
    setSelectedTender(tender);
  };

  function createIdea(selectedTender: Tender): void {
    //check if user submitted an idea before for this tender
    //if not, create new idea
    //else, show error message
    if (selectedTender.id === 1) {
      alert("You already submitted an idea for this tender!");
    } else {
      alert("New idea created!");
    }
  }

  return (
    <div style={{ display: "flex", height: "85vh", width: "100%", overflowY: "hidden" }}>
      <ul style={{ overflowY: "auto", width: "100%" }}>
        {tenderList.map(tender => (
          <li key={tender.id} style={{ cursor: "pointer" }} onClick={() => handleTenderClick(tender)}>
            {/* <div className={`grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0`}>
                <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                  <div className="col-span-1 flex flex-col"> */}
            <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 my-2 space-y-1 py-4 mx-4">
              <div className="flex">
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{tender.title}</span>
                  <div className="flex gap-1 items-center">
                    <span className="text-sm">{tender.description}</span>
                  </div>
                </div>
              </div>
              {tender && (
                <p className="my-0 text-sm">
                  <span className="font-bold">Ideas proposal until</span>:{" "}
                  <span style={{ color: "#999999" }}>{tender.dateIdeasDue.toLocaleDateString("it")}</span>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {selectedTender && (
        <div style={{ width: "100%" }} className="bg-secondary p-10">
          <button
            style={{ position: "absolute", top: 10, right: 10 }}
            className="btn btn-ghost btn-sm"
            onClick={() => setSelectedTender(null)}
          >
            X
          </button>
          <h1 className="text-3xl my-0">{selectedTender.title}</h1>
          <p className="text-neutral">
            <p className="italic">{selectedTender.description}</p>
            <p>
              <span className="font-bold">Date Created</span>: {selectedTender.dateCreated.toLocaleString("it")}
            </p>
            <p>
              <span className="font-bold">Date Ideas Due</span>: {selectedTender.dateIdeasDue.toLocaleString("it")}
            </p>
            <p>
              <span className="font-bold">Date Close Voting</span>:{" "}
              {selectedTender.dateCloseVoting.toLocaleString("it")}
            </p>
            <p>
              <span className="font-bold">Budget</span>: {selectedTender.budget} €
            </p>
            <p>
              <span className="font-bold">Link</span>: {selectedTender.link}
            </p>
          </p>
          <button
            style={{ borderRadius: "10px" }}
            className="btn-primary p-3"
            onClick={() => createIdea(selectedTender)}
          >
            Create New Idea
          </button>
        </div>
      )}
    </div>
  );
};

export default NewPage;
