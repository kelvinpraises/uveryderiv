
import { ChangeEvent } from "react";

export const TextInput = ({
  type = "input",
  onChange,
  value,
  heading,
  subheading,
  name,
}: {
  type?: "input" | "textArea";
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  heading: string;
  subheading: string;
  name: string;
}) => {
  return (
    <div className="pb-4">
      <p className="text-[1.2rem]">{heading}</p>
      <p className="text-base text-[#6c6c7d] mb-2">{subheading}</p>
      {type === "input" ? (
        <input
          className="w-full border text-base bg-transparent resize-none px-4 py-[0.8rem] focus:outline-none border-solid border-[#b3b3b3] rounded-[10px]"
          onChange={onChange}
          value={value}
          name={name}
        />
      ) : (
        <textarea
          className="w-full h-32 border text-base bg-transparent resize-none px-4 py-[0.8rem] border-solid border-[#b3b3b3] rounded-[10px] focus:outline-none"
          onChange={onChange}
          value={value}
          name={name}
        />
      )}
    </div>
  );
};
