"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useImageUpload } from "@/hooks/image";

const ImageInput = () => {
  const [fileDataURL, setFileDataURL] = useState<string>();
  const { dropzone, get, image: imgData } = useImageUpload();
  const { getRootProps, getInputProps, open } = dropzone;

  get?.response && console.log(`https://${get.response.cid}.ipfs.w3s.link`);

  const percent =
    get?.progress && (get.progress.loaded / get.progress.total) * 100;

  useEffect(() => {
    const reader = new FileReader();
    reader.onload;
    imgData && reader.readAsDataURL(imgData);
    reader.onload = function (event) {
      setFileDataURL(event.target?.result as string);
    };
  }, [imgData]);

  return (
    <div className="flex items-center overflow-hidden mt-0 mb-8 mx-8">
      <div className="max-w-[9rem] w-full h-36 grid place-items-center relative z-[1] overflow-hidden mr-[1.4rem] rounded-[50%] bg-[#717171]">
        {fileDataURL ? (
          <Image
            src={fileDataURL || ""}
            style={{ objectFit: "cover", zIndex: 0 }}
            fill
            priority
            alt={""}
          />
        ) : (
          <img src="/profile.svg" alt="" />
        )}
      </div>

      <div className="flex flex-col;">
        <p className="text-base text-[#6c6c7d]">
          It&apos;s recommended to use a picture that&apos;s at least 98 x 98
          pixels and 4MB or less. Use a PNG or GIF (no animations) file.
        </p>

        <div className="flex items-center w-fit;" {...getRootProps()}>
          <input {...getInputProps()} />
          <button
            className="cursor-pointer grid place-items-center text-[white] h-8 bg-[green] font-semibold leading-5 text-[0.9rem] text-center transition-all duration-200 ease-[ease] select-none px-[22px] py-2.5 rounded-[20px] hover:bg-[green] active:bg-[green] disabled:bg-[green] disabled:opacity-70 disabled:cursor-default;"
            onClick={open}
          >
            Choose profile
          </button>
          {percent && (
            <p style={{ marginLeft: "1rem" }}>{"Uploaded" + percent + "%"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
