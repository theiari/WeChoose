import { useState } from "react";
import { ContractUI } from "~~/components/scaffold-eth/Contract/ContractUI2";

const NewPage = () => {
  return (
    <div style={{ display: "flex", height: "85vh", width: "100%", overflowY: "hidden" }}>
      <ContractUI contractName="YourContract" />
    </div>
  );
};

export default NewPage;
