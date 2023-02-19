//// @ts-nocheck
"use client";

import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { styled } from "styled-components";

interface Asset {
  type: "text" | "imageUrl";
}

interface AssetState {
  type: "text" | "imageUrl";
  value: string;
}

export const CreateScrapTab = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [assetsState, setAssetsState] = useState<AssetState[]>([]);
  const [index, setIndex] = useState(0);

  const content = [
    <>
      <SInputs>
        <SInputsContent>
          <SInputLabelGroup>
            <SLabel>Title</SLabel>
            <SInput
              type="text"
              value={title}
              autoComplete="off"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </SInputLabelGroup>
          <SInputLabelGroup>
            <SLabel>Description</SLabel>
            <STextarea
              rows={3}
              value={description}
              autoComplete="off"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </SInputLabelGroup>
          {assets.length < 0 && (
            <SInfo>
              <p
                style={{
                  width: "25ch",
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: 18,
                  lineHeight: "28px",
                  color: "#696C7A",
                  textAlign: "center",
                }}
              >
                Add a scrap assets using the asset picker
              </p>
            </SInfo>
          )}
          {assets.length > 0 && <SLabel>Assets</SLabel>}
          {assets.length > 0 &&
            assets.map((x, i) => {
              if (x.type === "text") {
                return (
                  <SAssetWrapper>
                    <SInputLabelGroup>
                      <SLabel>Text</SLabel>
                      <STextarea
                        rows={5}
                        value={assetsState[i]?.value || ""}
                        autoComplete="off"
                        onChange={(e) => {
                          setAssetsState((x) => {
                            const temp = [...x];
                            temp[i] = {
                              type: "text",
                              value: e.target.value,
                            };
                            return temp;
                          });
                        }}
                      />
                    </SInputLabelGroup>
                  </SAssetWrapper>
                );
              } else if (x.type === "imageUrl") {
                return (
                  <SAssetWrapper>
                    <SInputLabelGroup>
                      <SLabel>Image Url</SLabel>
                      <SInput
                        type="text"
                        value={assetsState[i]?.value || ""}
                        autoComplete="off"
                        onChange={(e) => {
                          setAssetsState((x) => {
                            const temp = [...x];
                            temp[i] = {
                              type: "imageUrl",
                              value: e.target.value,
                            };
                            return temp;
                          });
                        }}
                      />
                    </SInputLabelGroup>
                  </SAssetWrapper>
                );
              }
            })}
          <SActionButton
            onClick={() => {
              setIndex((i) => i + 1);
            }}
          >
            Continue
          </SActionButton>
        </SInputsContent>
      </SInputs>
      <SAssetSelect>
        <SAssetSelectGroup>
          <SAssetSelectButton
            onClick={() => {
              setAssets((x) => {
                const temp = [...x];
                temp.push({
                  type: "text",
                });
                return temp;
              });
            }}
          >
            Add scrap text
          </SAssetSelectButton>
          <SAssetSelectButton
            onClick={() => {
              setAssets((x) => {
                const temp = [...x];
                temp.push({
                  type: "imageUrl",
                });
                return temp;
              });
            }}
          >
            Add scrap image
          </SAssetSelectButton>
        </SAssetSelectGroup>
      </SAssetSelect>
    </>,
    <SInputsContent>
      <AssetsAccordion></AssetsAccordion>
      <SActionButton>Submit</SActionButton>,
    </SInputsContent>,
  ];

  const handleForwardChange = () => {
    if (index >= content.length - 1) return;
    setIndex((i) => i + 1);
  };
  const handleBackwardChange = () => {
    if (index <= 0) return;
    setIndex((i) => i - 1);
  };

  return (
    <STab>
      <SNav>
        <SClose
          onClick={() => {
            router.back();
          }}
        >
          <SCross2Icon />
        </SClose>
        <SSwitchIndicatorContainer>
          <SSwitchIndicator active={true} />
          <SSwitchIndicator active={false} />
        </SSwitchIndicatorContainer>
        <SSwitch>
          <SChevronUpIcon onClick={handleBackwardChange} />
          <SChevronDownIcon onClick={handleForwardChange} />
        </SSwitch>
      </SNav>
      {content[index]}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SCross2Icon = styled(Cross2Icon)`
  color: #ffffff;
`;

const SChevronUpIcon = styled(ChevronUpIcon)`
  color: #ffffff;
`;

const SChevronDownIcon = styled(ChevronDownIcon)`
  color: #ffffff;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  gap: 35px;
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
  background: transparent;
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
  background: transparent;
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

const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;
  height: 120px;
  width: 100%;
  max-width: 35rem;
  border: 2px dashed #212434;
  border-radius: 8px;
`;

const SAssetSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 16px 16px;
  gap: 16px;

  width: 548.5px;
  height: 739px;
`;

const SAssetSelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 25px;
  gap: 23px;
  background: #212434;
  border-radius: 16px;
`;

const SAssetSelectButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #0e101b;
  border-radius: 8px;
  font-style: normal;
  font-weight: 300px;
  font-size: 13px;
  line-height: 13px;
  color: #ffffff;
  width: 270px;
  cursor: pointer;
`;

const SActionButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #ffffff;
  border-radius: 8px;
  font-style: normal;
  font-weight: 300px;
  font-size: 13px;
  line-height: 13px;
  color: #0e101b;
  width: 100%;
  cursor: pointer;
  width: 100%;
  max-width: 35rem;
`;

const SAssetWrapper = styled.div`
  padding: 2rem;
  background: #000000;
  border-radius: 16px;
  width: 100%;
  max-width: 35rem;
`;

const AssetsAccordion = ({ children }: any) => (
  <SAccordionRoot type="single" defaultValue="item-1" collapsible>
    <SAccordionItem value="item-1">
      <AccordionTrigger>View assets</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </SAccordionItem>
  </SAccordionRoot>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <SAccordionHeader>
      <SAccordionTrigger {...props} ref={forwardedRef}>
        {children}
      </SAccordionTrigger>
    </SAccordionHeader>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <SAccordionContent {...props} ref={forwardedRef}>
      <div style={{ padding: "16px 20px" }}>{children}</div>
    </SAccordionContent>
  )
);

const SAccordionRoot = styled(Accordion.Root)`
  border-radius: 6px;
  width: 100%;
  max-width: 35rem;
`;

const SAccordionItem = styled(Accordion.Item)`
  overflow: hidden;
  margin-top: 100px;

  &:first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const SAccordionTrigger = styled(Accordion.Trigger)`
  font-family: inherit;
  background-color: transparent;
  padding: 0 20px;
  height: 450px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1;
  background-color: white;
`;

const SAccordionContent = styled(Accordion.Content)`
  overflow: hidden;
  font-size: 15px;
  background-color: #d9d9d9;
`;

const SAccordionHeader = styled(Accordion.Header)`
  display: flex;
  button,
  h3 {
    all: unset;
  }
  button {
    all: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    background: #212434;
    font-style: normal;
    font-weight: 300px;
    font-size: 16px;
    line-height: 13px;
    color: #ffffff;
    width: 100%;
    padding: 0 16px;
    cursor: pointer;
  }
`;
