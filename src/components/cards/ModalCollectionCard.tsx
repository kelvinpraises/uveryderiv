import Image from "next/image";

interface ICollectionProps {
  cover: string;
  nameOfNFT: string;
  createdBy: string;
  price: string;
}

const ModalCollectionCard = (collection: ICollectionProps)  => {
  return (
    <div className=" bg-white w-full rounded-[20px] border-2 border-[#EFF1F8] h-[18rem] shadow-[0_0_50px_7px_rgba(0,0,0,0.08)] flex flex-col gap-2">
      <div className=" relative w-full h-[18.25rem] overflow-hidden rounded-t-[20px]">
        <Image
          src={collection.cover}
          style={{
            objectFit: "cover",
            zIndex: 0,
            // borderRadius: "8px",
          }}
          fill
          priority
          alt={collection.nameOfNFT}
        />
      </div>
      <div className=" h-[4.5rem] w-full flex flex-col px-2 pb-4 justify-between">
        <div className=" flex justify-between items-center">
          <p className=" font-bebas max-w-[10rem] overflow-hidden text-2xl">
            {collection.nameOfNFT}
          </p>
          <p className=" font-outfit text-sm text-[#4C505F]">
            ${collection.price}
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <p className=" font-outfit text-[#4C505F]">
            created by{" "}
            <span className=" font-bold">{collection.createdBy}</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default ModalCollectionCard;
