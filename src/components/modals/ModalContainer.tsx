import { useState } from "react";
import CollectionModal from "./CollectionModal";
import GuildModal from "./GuildModal";
import HomeModal from "./HomeModal";
import MessageModal from "./MessageModal";

const ModalContainer = () => {
  const [modalSelected, setModalSelected] = useState("home");

  const SelectedModal = () => {
    switch (modalSelected) {
      case "home":
        return <HomeModal setModalSelected={setModalSelected} />;

      case "message":
        return <MessageModal />;

      case "guild":
        return <GuildModal />;

      case "collection":
        return <CollectionModal />;

      default:
        return <HomeModal setModalSelected={setModalSelected} />;
    }
  };

  return (
    <div className=" fixed inset-0 bg-[rgba(0,0,0,0.5)] grid place-items-center z-20 ">
      <div className=" w-[65vw] h-[75vh] rounded-2xl bg-white">
        <>
          <div className=" bg-[#EFF1F8] w-[65vw] flex justify-between items-center h-[70px] fixed rounded-t-2xl px-4">
            <img
              src="/back.svg"
              alt=""
              className=" h-[30px]"
              onClick={() => setModalSelected("home")}
            />
            <div className=" flex justify-end w-full">
              <img src="/close.svg" alt="" className=" h-[30px]" />
            </div>
          </div>
          {SelectedModal()}
        </>
      </div>
    </div>
  );
};

export default ModalContainer;
