import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import { useStore } from "@/store/useStore";

const HomeModal = () => {
  const { disconnect } = useEthereumProvider();
  const setProfileModal = useStore((state) => state.setProfileModal);

  const sections = [
    "message",
    "guild",
    "collection",
    "activities",
    "update profile",
  ];

  return (
    <div className="flex flex-col gap-4 h-[calc(100%-70px)] mt-[70px] pt-4 pr-0">
      <div className="flex justify-end w-full">
        <button
          className="h-min bg-black px-6 py-3 rounded-3xl text-white flex justify-center items-center font-outfit mr-6"
          onClick={() => {
            setProfileModal({ open: false });
            disconnect();
          }}
        >
          Disconnect Wallet
        </button>
      </div>
      <div className=" w-full grid grid-cols-3 gap-4 px-6">
        {sections.map((modalSection, i) => (
          <Card
            key={i}
            cardName={modalSection}
            onClick={() => setProfileModal({ modalSection })}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeModal;

const Card = ({ cardName, onClick }: { cardName: string; onClick: any }) => {
  return (
    <div
      {...{ onClick }}
      className=" bg-white shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] grid place-items-center w-[280px] h-[180px] rounded-2xl cursor-pointer capitalize"
    >
      <p className=" font-bebas text-3xl">{cardName}</p>
    </div>
  );
};
