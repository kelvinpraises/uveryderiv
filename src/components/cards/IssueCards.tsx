const IssueCards = () => {
  return (
    <div className=" flex flex-col gap-4 rounded-lg border-[1px] border-[#EFF1F8] p-4 w-[50rem] shadow-[0_0_50px_7px_rgba(0,0,0,0.08)] ">
      <div className=" flex justify-between w-[11rem] items-center">
        <div className=" p-2 bg-black grid place-items-center rounded-lg text-white">
          <p className=" text-xs font-light">#Issue 1</p>
        </div>
        <p className=" text-[13px] font-light">Contributed by</p>
      </div>
      <p className=" text-lg text-[#484E62] font-semibold">
        Where are you now?
      </p>
      <p className=" text-[#4C505F]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga et
        pariatur! Sint quisquam eos quibusdam rerum quia provident, quidem in
        fuga eius eveniet impedit soluta corrupti odio voluptate iusto?
      </p>
    </div>
  );
};

export default IssueCards;
