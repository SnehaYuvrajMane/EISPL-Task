import React from "react";
import Image from "next/image";
import Connect from "./Connect";

function Main() {
  return (
    <>
      <div className=" flex flex-col  text-center items-center">
        <Image
          src="/agile.png"
          width={800}
          height={500}
          alt="images"
          className="  mt-20"
        />
        <Image
          src="/group.png"
          width={800}
          height={600}
          alt="images"
          className="  mt-20 "
        />
        <p className=" text-3xl font-bold m-12  text-blue-800 ">Agile Model</p>
        <Image
          src="/image.png"
          width={800}
          height={500}
          alt="images"
          className=" mt-20 "
        />

        
     <Connect 
     />
      </div>
    </>
  );
}

export default Main;
