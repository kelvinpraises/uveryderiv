import { Provider } from "@/contexts/EthereumWalletContext";
import { Content, PublishResponse } from "@/types";
import CyberConnect, { Env } from "@cyberlab/cyberconnect-v2";

export default async function (content: Content, provider: Provider): Promise<PublishResponse> {
  const cyberConnect = new CyberConnect({
    namespace: "CyberConnect",
    env: Env.PRODUCTION,
    provider: provider?.provider,
    signingMessageEntity: "CyberConnect" || "Uveryderiv",
  });

  return await cyberConnect.createPost(content);
}
