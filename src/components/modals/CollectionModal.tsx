import { collectionData } from "@/data/data";
import React from "react";
import ModalCollectionCard from "../cards/ModalCollectionCard";

const CollectionModal = () => {
  return (
    <div className=" w-full mt-[70px] h-[calc(100%-70px)]">
      <div className=" grid grid-cols-4 gap-4 overflow-y-scroll p-6 h-full">
        {collectionData.map((data, i) => (
          <ModalCollectionCard {...data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CollectionModal;
