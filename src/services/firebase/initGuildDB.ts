import { app } from "@/data/firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default async function ({
  handle,
  signerAddress,
  scrapTownPostId,
}: {
  signerAddress: string;
  scrapTownPostId: string;
  handle: string;
}) {
  const db = getFirestore(app);

  await setDoc(doc(db, "guilds", handle), {
    guardianEOA: [signerAddress],
    handle,
    ///
    issues: [],
    activeIssueId: null,
    ///
    stage: {
      avatarSrc: "",
      nameOfGuild: "",
      issue: "",
      title: "",
      textContent: "",
      nft: [],
    },
    ///
    scrapTown: {
      square: {},
      ideas: [],
    },
    ///
    collection: [],
    ///
    guildInfo: {
      scrapTownPostId,
      membershipNFTAddress: "", // TODO: fix this!
      membershipAddressList: [],
      collectiblesMinted: 0,
    },
  });
}
