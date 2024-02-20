import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className=" flex-col">
        <div className="flex">
          <div className="flex flex-col w-1/2 ml-36">
            <h2 className=" p-9 text-2xl font-semibold mt-10 ">
              Boost Your Web Development
              <br /> Success with Stackkaroo's
            </h2>
            <p className=" font-extrabold text-blue-800 text-7xl m-10">
              PROJECT EXECUTION MODEL
            </p>
            <button className=" bg-orange-500 w-36 p-2 rounded-md ml-9">
              Let's Discuss
            </button>
          </div>
          <div className=" mr-20">
            <Image
              src="/home.png"
              alt="image"
              width={400}
              height={400}
              className=" mr-20"
            />
          </div>
        </div>
        <div className=" mt-24 flex-col justify-center text-center">
          <div className=" flex text-center justify-center gap-20 text-3xl font-bold  text-blue-800 ">
            <ul className=" list-disc flex gap-40 text-4xl">
              <li>Flexible</li>
              <li>Client-Centric</li>
              <li>Balanced</li>
            </ul>
          </div>
          <div className=" pl-72 pr-64 mt-12 text-xl font-semi-bold mb-6">
            <p>Every project is one-of-a-kind, which means it needs to be treated with care and attention. In addition to considering the cost, time, and scope, the relationship between the client and the agency is also crucial in maintaining a balance.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
