import { doc, getFirestore, setDoc } from "firebase/firestore";

import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import { app } from "@/data/firebase";

export default async function () {
  const { signerAddress } = useEthereumProvider();
  const db = getFirestore(app);

  const createGuild = async ({ handle }: { handle: string }) => {
    await setDoc(doc(db, "guilds", handle), {
      guardianEOA: [signerAddress],
      handle,
      ///
      issues: [],
      activeIssueId: null,
      ///
      stage: {},
      ///
      scrapTown: {
        square: {},
        ideas: [],
      },
      ///
      collection: [],
      ///
      guildInfo: {
        membershipNFTAddress: "", // TODO: fix this!
        membershipAddressList: [],
        collectiblesMinted: 0,
      },
    });
  };

  return { createGuild };
}
