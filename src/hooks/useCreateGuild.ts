import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import createPost from "@/services/cyberConnect/createPost";
import initGuildDB from "@/services/firebase/initGuildDB";
import { useStore } from "@/store/useStore";
import { useCCProfile } from "./profile";

export default function () {
  const { signerAddress, provider } = useEthereumProvider();
  const { saveProfile } = useCCProfile();
  const input = useStore((state) => state.input);

  const createGuild = async () => {
    if (!signerAddress) return;
    const handle = input["handle"];
    try {
      await saveProfile();

      const published = await createPost(
        {
          title: `${handle} guild`,
          body: `${handle} guild was created @ ${new Date().toISOString()} on Uveryderiv`,
          author: handle,
        },
        provider
      );

      await initGuildDB({
        handle,
        signerAddress,
        scrapTownPostId: published.contentID,
      });

      alert(
        `Created ${handle} guild with with, contentID @ ${published.contentID}, and arweave transaction @ ${published.arweaveTxHash}`
      );
      return true;
    } catch (error) {
      alert("an error occured please try again");
      console.error(error);
    }
  };

  return { createGuild };
}
