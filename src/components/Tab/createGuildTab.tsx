export const CreateGuildTab = () => {
  const content = [
    <div>
      <div>
        <div>
          <div>Name</div>
          <input />
        </div>
        <div>
          <div>Cover Url</div>
          <input />
        </div>
        <div>
          <div>Bio</div>
          <textarea rows={3} />
        </div>
      </div>
    </div>,
  ];
  return (
    <div>
      <div>
        <div />
        <div>
          {/* width: 10px; height: 10px; background-color: ${({ active }) => (active ? "#D9D9D9" : "#272830")}; border-radius: 10px; */}
          <div />
          {/* width: 10px; height: 10px; background-color: ${({ active }) => (active ? "#D9D9D9" : "#272830")}; border-radius: 10px; */}
          <div />
        </div>
        <div />
      </div>
      {content[0]}
    </div>
  );
};
