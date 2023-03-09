import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import CollectionModal from "./CollectionModal";
import CreateGuildModal from "./CreateGuildModal";
import CreateProfileModal from "./CreateProfileModal";
import GuildModal from "./GuildModal";
import HomeModal from "./HomeModal";
import MessageModal from "./MessageModal";

const ModalContainer = () => {
  const setProfileModal = useStore((state) => state.setProfileModal);

  const openProfileModal = useStore((state) => state.openProfileModal);
  const profileModalPage = useStore((state) => state.profileModalSection);

  useEffect(() => {
    if (openProfileModal) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openProfileModal]);

  const SelectedModal = () => {
    switch (profileModalPage) {
      case "home":
        return <HomeModal />;

      case "message":
        return <MessageModal />;

      case "guild":
        return <GuildModal />;

      case "collection":
        return <CollectionModal />;

      case "collection":
        return <CollectionModal />;

      case "createGuild":
        return <CreateGuildModal />;

      case "createProfile":
        return <CreateProfileModal />;

      default:
        return <HomeModal />;
    }
  };

  if (!openProfileModal) {
    return null;
  }

  return (
    <div className=" fixed inset-0 bg-[rgba(0,0,0,0.5)] grid place-items-center z-20 overscroll-none">
      <div className="w-[65vw] h-[75vh] rounded-2xl bg-white overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="bg-[#EFF1F8] w-[65vw] flex justify-between items-center h-[70px] rounded-t-2xl px-4 fixed">
          <button>
            <img
              src="/back.svg"
              alt=""
              className=" h-[30px]"
              onClick={() => setProfileModal({ modalSection: "home" })}
            />
          </button>
          <button>
            <img
              src="/close.svg"
              alt=""
              className=" h-[30px]"
              onClick={() => setProfileModal({ open: false })}
            />
          </button>
        </div>
        {SelectedModal()}
      </div>
    </div>
  );
};

export default ModalContainer;
