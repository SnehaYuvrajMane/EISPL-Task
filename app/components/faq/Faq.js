"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Faq() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center gap-10 text-center  m-10 text-blue-400">
      <Accordion className="border-5">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What are Stackkaroo's Project Execution Models? "
          className=" w-96 border p-5 rounded-2xl "
        >
          Stackkaroo&apos;s Project Execution Models are a group of rules and methods
          made to simplify web development projects. These models give a clear
          way to plan, carry out and finish projects. This makes sure they are
          successful and done well.
        </AccordionItem>
      </Accordion>

      <Accordion className=" rounded-s-xl">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What is the best project execution model for web development?"
          className=" w-96 rounded-lg border p-5"
        >
          The way we do a project can change based on things like its needs, how
          many people are on the team, time limits and what the client wants.
          Agile and DevOps are often chosen for making websites because they can
          quickly change, give results fast, and work well with new needs. But,
          for projects with clear and steady needs, the Waterfall method can
          also work well. We must check what each project needs before picking
          the best model for it.
        </AccordionItem>
      </Accordion>
      <Accordion className=" rounded-s-xl">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="How do Stackkaroo's Project Execution Models help with my web development projects?"
          className=" w-96 rounded-e-2xl  p-5 border-cyan-500"
        >
          Stackkaroo&apos;s Project Execution Models help manage projects in a
          step-by-step way. This makes it easier to organize, talk to others
          well, and be more productive. Use these examples to make sure your
          website projects finish on time, within the money limits and make the
          client happy.
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Faq;
