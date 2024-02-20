import React from "react";
import Image from "next/image";
import Data from "./Data";

function Connect() {
  return (
    <>
      <div
        className="flex flex-col items-center m-2 border w-screen object-cover h-96"
        style={{ backgroundImage: "url('/img.png')" }}
      >
        <h2 className="w-96 font-bold text-blue-500 mt-20 text-2xl">
          Achieve Customization and Satisfaction with Stackkaroo&apos;s Carefully
          Crafted Web Solutions
        </h2>
        <p className="w-96 font-semi-bold mt-5 text-xl">
          Consider Stackkaroo&apos;s trusted web development services for top-notch
          and cutting-edge web development solutions. Stackkaroo boasts a team
          of highly experienced and skilled web designers and developers who are
          dedicated to delivering high-quality and innovative websites.
        </p>
      </div>
      <div className="flex flex-col items-center mt-20 ">
        <h2 className="font-bold  text-blue-500 text-2xl ">
          Why should you Choose Stackkaroo&apos;s Website Development Service?
        </h2>
        <div className="flex flex-wrap gap-32 justify-center mt-10 ">
          {Data.map((ele) => {
            return (
              <div className="border-2 w-72 flex flex-col justify-center items-center h-64 rounded-md border-red-900 border-x-indigo-500">
                <Image src={ele.image} width={100} height={100} />
                <p className="mt-3 text-xl">{ele.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Connect;
