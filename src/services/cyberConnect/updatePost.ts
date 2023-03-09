import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import { Content, PublishResponse } from "@/types";
import CyberConnect, { Env } from "@cyberlab/cyberconnect-v2";

export default async function (
  id: string,
  content: Content
): Promise<PublishResponse> {
  const { provider } = useEthereumProvider();
  const cyberConnect = new CyberConnect({
    namespace: "CyberConnect",
    env: Env.PRODUCTION,
    provider: provider?.provider,
    signingMessageEntity: "CyberConnect" || "Uveryderiv",
  });

  return await cyberConnect.updatePost(id, content);
}
