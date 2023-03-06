const ScrapTownCard = () => {
  return (
    <div className=" flex flex-col gap-4 rounded-[20px] border-[1px] border-[#EFF1F8] p-4 w-[43rem] shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] bg-white">
      <p className=" text-lg text-[#484E62] font-semibold font-outfit">
        Where are you now?
      </p>
      <p className=" text-[#4C505F]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga et
        pariatur! Sint quisquam eos quibusdam rerum quia provident, quidem in
        fuga eius eveniet impedit soluta corrupti odio voluptate iusto?
      </p>
      <div className=" bg-[#1E2024] py-[2px] px-[5px] w-max rounded-lg flex gap-[6px] cursor-pointer">
        <img src="/Chat.svg" alt="comment" />
        <p className=" text-[white] font-outfit">0</p>
      </div>
    </div>
  );
};

export default ScrapTownCard;
