import Link from "next/link";
import type { NextPage } from "next";
import { ClipboardDocumentCheckIcon, LightBulbIcon, QueueListIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">We Choose</span>
          </h1>
          {/* <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/pages/index.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p> */}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <LightBulbIcon className="h-8 w-8 fill-secondary" />
              <p>
                Submit a new proposal through{" "}
                <Link href="/new" passHref className="link">
                  Push Idea
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <ClipboardDocumentCheckIcon className="h-8 w-8 fill-secondary" />
              <p>
                Select your favourite in the{" "}
                <Link href="/vote" passHref className="link">
                  Vote Ideas
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <QueueListIcon className="h-8 w-8 fill-secondary" />
              <p>
                Check the list of latest{" "}
                <Link href="/approved" passHref className="link">
                  Approved Ideas
                </Link>{" "}
                in the last tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
