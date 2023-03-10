import { app } from "@/data/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function (handle: string) {
  const db = getFirestore(app);

  const docRef = doc(db, "guilds", handle);
  const docSnap = await getDoc(docRef);

  let activeIssueId = null;
  let scrapTownPostId = null;

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const data = docSnap.data();

    activeIssueId = data.activeIssueId;
    scrapTownPostId = data.guildInfo.scrapTownPostId;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  return {
    activeIssueId,
    scrapTownPostId,
  };
}
