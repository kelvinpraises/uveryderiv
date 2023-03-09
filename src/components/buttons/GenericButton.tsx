import React from "react";

const GenericButton = ({
  buttonText,
}: {
  buttonText?: string;
}) => {
  return (
    <div
      className=" h-min bg-black px-6 py-3 rounded-3xl text-white grid place-items-center cursor-pointer"
    >
      <p>{buttonText}</p>
    </div>
  );
};

export default GenericButton;
