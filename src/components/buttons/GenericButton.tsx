import React from "react";

const GenericButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: any;
}) => {
  return (
    <button
      {...{ onClick }}
      className=" h-min bg-black px-6 py-3 rounded-3xl text-white grid place-items-center cursor-pointer"
    >
      <p>{children}</p>
    </button>
  );
};

export default GenericButton;
