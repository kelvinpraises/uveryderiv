"use client";

import { TextInput } from "@/components/Inputs/textInput";
import { useCCProfile } from "@/hooks/profile";
import { useSubscribe } from "@/hooks/subscribe";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import GenericButton from "../buttons/GenericButton";
import ImageInput from "../Inputs/ImageInput";

const CreateGuildModal = () => {
  const input = useStore((state) => state.input);
  const setInput = useStore((state) => state.setInput);

  const avatarFile = useStore((state) => state.avatarFile);
  const coverImageFile = useStore((state) => state.coverImageFile);

  const { saveProfile } = useCCProfile();
  const { createSubscription } = useSubscribe();

  return (
    <div className=" w-full mt-[70px] p-8 flex gap-8 ">
      <div className=" w-[50%] overflow-y-scroll flex flex-col gap-4">
        <TextInput
          name="handle"
          onChange={(e) => {
            setInput({
              name: "handle",
              value: e.target.value,
            });
          }}
          value={input["handle"]}
          heading={"Handle"}
          subheading={"the handle of your guild"}
        />

        <TextInput
          name="display_name"
          onChange={(e) => {
            setInput({
              name: "display_name",
              value: e.target.value,
            });
          }}
          value={input["display_name"]}
          heading={"Display name"}
          subheading={"the display name of your guild"}
        />

        <TextInput
          type="textArea"
          name="bio"
          onChange={(e) => {
            setInput({
              name: "bio",
              value: e.target.value,
            });
          }}
          value={input["bio"]}
          heading={"Bio"}
          subheading={"The simple description of your guild"}
        />

        <div className=" grid grid-cols-2">
          <ImageInput type={"avatar"} />
          <ImageInput type={"coverImage"} />
        </div>

        <div className=" flex justify-end mt-6 pt-6 border-t border-[#b3b3b3]">
          <GenericButton buttonText="Save Profile" />
        </div>
      </div>
      <div className=" w-[50%] flex flex-col items-center h-min">
        <div className=" min-w-[9rem] w-full h-36 grid place-items-center relative z-[1] overflow-hidden  rounded-[20px] bg-[#3b3a3a]">
          {coverImageFile && (
            <Image
              src={coverImageFile || ""}
              style={{ objectFit: "cover", zIndex: 0 }}
              fill
              priority
              alt={""}
            />
          )}
        </div>
        <div className="max-w-[9rem] mt-[-4.5rem] w-full border-2 border-[#EFF1F8] h-36 grid place-items-center relative z-[1] overflow-hidden rounded-[50%] bg-[#717171]">
          {avatarFile ? (
            <Image
              src={avatarFile || ""}
              style={{ objectFit: "cover", zIndex: 0 }}
              fill
              priority
              alt={""}
            />
          ) : (
            <img src="/profile.svg" alt="" />
          )}
        </div>
        <p className="font-bebas text-3xl mt-2">{input["handle"]}</p>
        <p className="text-xl font-outfit">{input["display_name"]}</p>
        <div className=" w-full flex ">
          <p> {input["bio"]} </p>
        </div>
      </div>
    </div>
  );
};

export default CreateGuildModal;
