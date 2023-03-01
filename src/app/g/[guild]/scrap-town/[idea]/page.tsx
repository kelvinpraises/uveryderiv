"use client";

import { getUserFromWeb3mq } from "@/hooks/web3Mq";
import { Client, EventTypes } from "@web3mq/client";
import { useCallback, useEffect, useMemo, useState } from "react";

interface d {
  id: number;
  indexId: number;
  content: string;
  senderId: string;
}

export default function Home() {
  const channelId = "group:2aeb14d8454a033694ca9987b7390a4327e0a3c8";

  const [client, setClient] = useState<Client>();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<d[]>([]);
  const messagesSet = new Set(messages);

  const init = useCallback(async () => {
    const { loginInfo, userid } = await getUserFromWeb3mq();

    const { tempPrivateKey, tempPublicKey } = loginInfo;

    const keys = {
      PrivateKey: tempPrivateKey,
      PublicKey: tempPublicKey,
      userid,
    };

    const client = Client.getInstance(keys);
    setClient(client);
  }, []);

  useMemo(async () => {
    await client?.message.getMessageList({ page: 1, size: 20 }, channelId);
  }, [client]);

  const sendMessage = useCallback(async () => {
    await client?.message.sendMessage(message, channelId);
  }, [message]);

  const handleEvent = useCallback((event: { type: EventTypes }) => {
    if (event.type === "channel.getList") {
      console.log(client?.channel.channelList);
    }

    if (event.type === "message.getList") {
      const d: d[] = (client?.message.messageList as unknown as d[]) || [];

      d.map((x) => {
        setMessages((xy) => {
          const temp = [...xy];
          temp.push({
            content: x.content,
            id: x.id,
            indexId: x.indexId,
            senderId: x.senderId,
          });
          return temp;
        });
      });
    }

    if (event.type === "message.send") {
      console.log("message send");
    }
  }, []);

  client?.on("channel.getList", handleEvent);
  client?.on("message.send", handleEvent);
  client?.on("message.getList", handleEvent);

  useEffect(() => {
    return () => {
      client && client.off("channel.getList");
    };
  }, [client]);

  return (
    <div>
      {Array.from(messagesSet).map((x) => {
        return x.content;
      })}

      <button onClick={async () => await init()}>init</button>

      {client && (
        <button
          onClick={async () => {
            await client.channel.createRoom({
              groupid: "",
              groupName: "Kelvx Group exp",
              permissions: { "group:join": { type: "enum", value: "public" } },
            });

            await client.channel.queryChannels({
              page: 1,
              size: 20,
            });
          }}
        >
          create group
        </button>
      )}

      {client && (
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
        />
      )}

      {client && (
        <button onClick={async () => await sendMessage()}>send message</button>
      )}
    </div>
  );
}
