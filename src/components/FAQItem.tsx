"use client";

import { useState } from "react";

interface FAQItemProp {
  title: string;
  answer: string;
}

const FAQItem = ({ title, answer }: FAQItemProp) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className=" border-y-[1px] w-full border-[#494949] py-8 first:border-t-2 last:border-b-2">
      <div
        className=" flex justify-between items-center font-medium text-2xl cursor-pointer select-none"
        onClick={() => setShowDescription(!showDescription)}
      >
        <p>{title}</p>
        <p className=" text-3xl ">{showDescription ? "-" : "+"}</p>
      </div>
      <p
        className={`${
          showDescription ? " block" : " hidden"
        } pt-4 text-[#545B5E]`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FAQItem;
