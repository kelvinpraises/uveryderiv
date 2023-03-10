"use client";

import MessageButton from "@/components/buttons/MessageButton";
import SquareCard from "@/components/cards/SquareCard";
import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import useGuildData from "@/hooks/useGuildData";
import createComment from "@/services/cyberConnect/createComment";
import getProfiles from "@/services/cyberConnect/getProfiles";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");
  const [encrypt, setEncrypt] = useState(false);
  const { provider, signerAddress } = useEthereumProvider();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    contentId: "",
    comments: [] as any[],
  });

  const pathname = usePathname();
  const guildId = pathname?.split("/")[2] || ""; // FIXME: fragile

  const { scrapTownSquareData } = useGuildData();

  useEffect(() => {
    (async () => {
      const data = await scrapTownSquareData(guildId);
      setData(data);
    })();
    setLoading(false);
  }, [guildId, setLoading, message]);

  return (
    <div className=" flex flex-col max-w-[48.5rem] w-full ">
      <div className=" flex flex-col gap-8 pb-40">
        {data?.comments.map((data, i) => (
          <SquareCard {...data} key={i} />
        ))}
      </div>
      <div className=" flex flex-col gap-2 bg-white p-4 fixed bottom-4 max-w-[48.5rem] w-full h-min rounded-[20px] shadow-[0_0_50px_7px_rgba(0,0,0,0.08)]">
        <textarea
          className=" w-full border-none focus:outline-none text-[#4C505F] max-h-[9rem] rounded-lg pt-1 pl-1 resize-none shadow-[0_0_50px_7px_rgba(0,0,0,0.08)]"
          placeholder={`Message`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {message && (
          <div className=" flex justify-between">
            <img
              src={encrypt ? "/LockC.svg" : "/LockO.svg"}
              className=" w-[18px]"
              alt="encrypt"
              onClick={() => setEncrypt(!encrypt)}
            />
            <MessageButton
              onClick={async () => {
                const profiles = await getProfiles(signerAddress || "");

                if (!profiles) {
                  alert("please create a ccprofile to post or connect wallet");
                  return;
                }

                if (!profiles[0].node.handle) {
                  alert("please create a ccprofile to post");
                  return;
                }

                await createComment({
                  content: {
                    title: `message encrypted ${encrypt}`,
                    body: message,
                    author: profiles[0].node.handle,
                  },
                  provider,
                  targetContentId: data.contentId,
                });

                setMessage("");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
