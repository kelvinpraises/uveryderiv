"use client";

import { styled } from "styled-components";

export const CreateGuildTab = () => {
  const content = [
    <SInputs>
      <SInputsContent>
        <SInputLabelGroup>
          <SLabel>Name</SLabel>
          <SInput />
        </SInputLabelGroup>
        <SInputLabelGroup>
          <SLabel>Cover Url</SLabel>
          <SInput />
        </SInputLabelGroup>
        <SInputLabelGroup>
          <SLabel>Bio</SLabel>
          <STextarea rows={3} />
        </SInputLabelGroup>
      </SInputsContent>
    </SInputs>,
  ];
  return (
    <STab>
      <SNav>
        <SClose />
        <SSwitchIndicatorContainer>
          <SSwitchIndicator active={true} />
          <SSwitchIndicator active={false} />
        </SSwitchIndicatorContainer>
        <SSwitch />
      </SNav>
      {content[0]}
    </STab>
  );
};

const STab = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: #0e101b;
  min-height: 100vh;
  padding: 32px;
  gap: 64px;
`;

const SNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  gap: 32px;
  height: 100%;
`;

const SClose = styled.div`
  width: 55px;
  height: 55px;
  background: #212434;
  border-radius: 50%;
`;

const SSwitchIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
`;

const SSwitchIndicator = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? "#D9D9D9" : "#272830")};
  border-radius: 10px;
`;

const SSwitch = styled.div`
  width: 55px;
  height: 100px;
  background: #212434;
  border-radius: 30px;
`;

const SInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 64px 0 0;
  /* flex-grow: 1; */
  width: 50%;
  height: 100%;
  max-width: 38rem;
  overflow: scroll;
`;

const SInputsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 32px;
  width: 100%;
`;

const SInputLabelGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

const SInput = styled.input`
  font-size: 1rem;
  color: #ffffff;
  background: #0e101b;
  border: 1px solid #b7baca;
  border-radius: 8px;
  resize: none;
  outline: none;
  width: 100%;
  max-width: 35rem;
  height: 60px;
  padding: 10px 8px;
`;

const STextarea = styled.textarea`
  font-size: 1rem;
  color: #ffffff;
  background: #0e101b;
  border: 1px solid #b7baca;
  border-radius: 8px;
  /* resize: none; */
  column-count: auto;
  outline: none;
  width: 100%;
  max-width: 35rem;
  height: 180px;
  padding: 10px 8px;
`;

const SLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;





