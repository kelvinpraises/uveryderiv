import { Provider } from "@/contexts/EthereumWalletContext";
import { Content, PublishResponse } from "@/types";
import CyberConnect, { Env } from "@cyberlab/cyberconnect-v2";

export default async function ({
  content,
  commentId,
  targetContentId,
  provider,
}: {
  content: Content;
  commentId: string;
  targetContentId: string;
  provider: Provider;
}): Promise<PublishResponse> {
  const cyberConnect = new CyberConnect({
    namespace: "CyberConnect",
    env: Env.PRODUCTION,
    provider: provider?.provider,
    signingMessageEntity: "CyberConnect" || "Uveryderiv",
  });

  return await cyberConnect.updateComment(commentId, targetContentId, content);
}
