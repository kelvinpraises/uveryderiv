"use client";

import { useEffect, useMemo } from "react";

import { useImageUpload } from "@/hooks/image";
import { useStore } from "@/store/useStore";

const ImageInput = ({ type }: { type: "avatar" | "coverImage" }) => {
  const setInput = useStore((state) => state.setInput);
  const setAvatar = useStore((state) => state.setAvatar);
  const setCoverImage = useStore((state) => state.setCoverImage);

  const { dropzone, get, image: imgData } = useImageUpload();
  const { getRootProps, getInputProps, open } = dropzone;

  // Save link to uploaded image.
  useMemo(() => {
    if (get?.response) {
      const link = `https://${get.response.cid}.ipfs.w3s.link`;

      switch (type) {
        case "avatar":
          setInput({
            name: "avatar",
            value: link,
          });
          break;

        case "coverImage":
          setInput({
            name: "cover_image",
            value: link,
          });
          break;

        default:
          break;
      }
    }
  }, [get?.response, setInput]);

  const percent = useMemo(() => {
    return get?.progress && (get.progress.loaded / get.progress.total) * 100;
  }, [get?.progress]);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload;
    imgData && reader.readAsDataURL(imgData);
    reader.onload = function (event) {
      switch (type) {
        case "avatar":
          setAvatar(event.target?.result as string);
          break;

        case "coverImage":
          setCoverImage(event.target?.result as string);
          break;

        default:
          break;
      }
    };
  }, [imgData]);

  return (
    <div className="flex items-center w-fit" {...getRootProps()}>
      <input {...getInputProps()} />
      <button
        className="cursor-pointer grid min-w-min place-items-center text-[white] bg-green-600 font-semibold leading-5 text-[0.9rem] h-min transition-all duration-200 ease-[ease] select-none px-[20px] py-2.5 rounded-[20px] hover:bg-green-700 active:bg-green-800 disabled:bg-green-500 "
        onClick={open}
      >
        {(() => {
          switch (type) {
            case "avatar":
              return "Choose avatar";

            case "coverImage":
              return "Choose cover";

            default:
              break;
          }
        })()}
      </button>
      {percent && (
        <p className=" ml-3 text-sm">{"Uploaded " + percent + "%"}</p>
      )}
    </div>
  );
};

export default ImageInput;
