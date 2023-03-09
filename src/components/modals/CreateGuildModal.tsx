"use client";

import { TextInput } from "@/components/Inputs/textInput";
import { useCCProfile } from "@/hooks/profile";
import { useSubscribe } from "@/hooks/subscribe";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import ImageInput from "../Inputs/ImageInput";

const CreateGuildModal = () => {
  const input = useStore((state) => state.input);
  const setInput = useStore((state) => state.setInput);

  const avatarFile = useStore((state) => state.avatarFile);
  const coverImageFile = useStore((state) => state.coverImageFile);

  const { saveProfile } = useCCProfile();
  const { createSubscription } = useSubscribe();

  return (
    <>
      <div>
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

        <ImageInput type={"avatar"} />
        <ImageInput type={"coverImage"} />

        <button onClick={() => {}}>Save Profile</button>
      </div>
      <div>
        <div className="max-w-[9rem] w-full h-36 grid place-items-center relative z-[1] overflow-hidden mr-[1.4rem] rounded-[20px] bg-[#717171]">
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
        <div className="max-w-[9rem] w-full h-36 grid place-items-center relative z-[1] overflow-hidden mr-[1.4rem] rounded-[50%] bg-[#717171]">
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
      </div>
    </>
  );
};

export default CreateGuildModal;
