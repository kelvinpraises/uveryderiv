import { doc, getDoc, getFirestore } from "firebase/firestore";

import { app } from "@/data/firebase";

export interface FeaturedGuilds {
  cover: string;
  name: string;
  bio: string;
  id: string;
}

export default async function () {
  const db = getFirestore(app);

  const docRef = doc(db, "uveryderivData", "guilds");
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  if (docSnap.exists()) {
    return data?.quickInfo as FeaturedGuilds[];
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
