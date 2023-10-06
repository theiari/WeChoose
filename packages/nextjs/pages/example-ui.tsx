import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";
import { Header } from "~~/components/example-ui/Header";
import { Login } from "~~/components/example-ui/Login";

const ExampleUI: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="We Choose"
        description="We Choose is a decentralized application that allows users to vote on proposals."
      >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <Header />
      {/*open ContratInteraction only if logged in */}
      <ContractInteraction />

      {/* <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
        {/* <ContractInteraction />
        <ContractData /> /}
  <Login /> */}
      {/* </div> */}
    </>
  );
};

export default ExampleUI;
