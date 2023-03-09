import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { uploadFairsaveImage } from "@/services/fairsave";

export const useImageUpload = () => {
  const [image, setImage] = useState<File | null>();
  const [get, set] = useState<{
    progress: ProgressEvent<XMLHttpRequestEventTarget>;
    response: {
      cid: string;
      title: string;
    };
  }>();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
      uploadFairsaveImage({ image: acceptedFiles[0], set });
      setImage(acceptedFiles[0]);
    }
  }, []);

  const dropzone = useDropzone({
    accept: { "image/png": [".png", ".jpg", ".gif", ".jpeg"] },
    maxFiles: 1,
    onDrop,
  });

  return { dropzone, get, image };
};
