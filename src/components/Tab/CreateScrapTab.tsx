// @ts-nocheck

import * as Accordion from "@radix-ui/react-accordion";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { relative } from "path";
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
      <div>
        <div>
          <div>
            <div>Title</div>
            <input
              type="text"
              value={title}
              autoComplete="off"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <div>Description</div>
            <textarea
              rows={3}
              value={description}
              autoComplete="off"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          {assets.length < 0 && (
            <div>
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
            </div>
          )}
          {assets.length > 0 && <div>Assets</div>}
          {assets.length > 0 &&
            assets.map((x, i) => {
              if (x.type === "text") {
                return (
                  <div>
                    <div>
                      <div>Text</div>
                      <textarea
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
                    </div>
                  </div>
                );
              } else if (x.type === "imageUrl") {
                return (
                  <div>
                    <div>
                      <div>Image Url</div>
                      <input
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
                    </div>
                  </div>
                );
              }
            })}
          <button
            onClick={() => {
              setIndex((i) => i + 1);
            }}
          >
            Continue
          </button>
        </div>
      </div>
      <div>
        <div>
          <button
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
          </button>
          <button
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
          </button>
        </div>
      </div>
    </>,
    <div>
      <div>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "28px",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "28px",
            color: "#ffffff",
          }}
        >
          {description}
        </p>
      </div>
      <AssetsAccordion>
        {assetsState.map((a) => {
          if (a.type === "text") {
            return (
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "28px",
                  color: "#ffffff",
                }}
              >
                {a.value}
              </p>
            );
          } else if (a.type === "imageUrl") {
            return (
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={a.value}
                  style={{ objectFit: "cover", zIndex: 0 }}
                  fill
                  priority
                  alt={""}
                />
              </div>
            );
          }
        })}
      </AssetsAccordion>
      <button>Submit</button>
    </div>,
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
    <div>
      <div>
        <div
          onClick={() => {
            router.back();
          }}
        >
          <Cross2Icon />
        </div>
        <div>
          {content.map((_, i) => (
            <div
              active={i === index ? true : false}
            /> /*   width: 10px; height: 10px; background-color: ${({ active }) => (active ? "#D9D9D9" : "#272830")}; border-radius: 10px; */
          ))}
        </div>
        <div>
          <ChevronUpIcon onClick={handleBackwardChange} />
          <ChevronDownIcon onClick={handleForwardChange} />
        </div>
      </div>
      {content[index]}
    </div>
  );
};

const AssetsAccordion = ({ children }: any) => (
  <Accordion.Root type="single" defaultValue="item-1" collapsible>
    <Accordion.Item value="item-1">
      <AccordionTrigger>Assets Board</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger {...props} ref={forwardedRef}>
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          gap: "16px",
        }}
      >
        {children}
      </div>
    </Accordion.Content>
  )
);
