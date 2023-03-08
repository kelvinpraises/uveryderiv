
interface IModalProp {
  setModalSelected: any;
}

const HomeModal: React.FC<IModalProp> = ({ setModalSelected }) => {
  const sections = [
    "message",
    "guild",
    "collection",
    "activities",
    "update profile",
  ];

  return (
    <div className=" w-full h-[calc(100%-70px)] mt-[70px] grid grid-cols-3 gap-4 py-12 px-6">
      {sections.map((section, i) => (
        <Card key={i} cardName={section} setModalSelected={setModalSelected} />
      ))}
    </div>
  );
};

export default HomeModal;

const Card = ({
  cardName,
  setModalSelected,
}: {
  cardName: string;
  setModalSelected: any;
}) => {
  return (
    <div
      className=" bg-white shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] grid place-items-center w-[280px] h-[180px] rounded-2xl cursor-pointer capitalize"
      onClick={() => setModalSelected(cardName)}
    >
      <p className=" font-bebas text-3xl">{cardName}</p>
    </div>
  );
};
