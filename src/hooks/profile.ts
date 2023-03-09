import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import {
  createCreateProfileTypedData,
  relay,
  relayActionStatus
} from "@/services/cyberConnect";
import { getProfileMetadata } from "@/services/pinata";
import { useStore } from "@/store/useStore";
import { useState } from "react";

export function useCCProfile() {
  const { signerAddress } = useEthereumProvider();

  const [loading, setLoading] = useState(false);

  const { operator, handle, avatar, display_name, bio, cover_image } = useStore(
    (state) => state.input
  );

  const isValidHandle = () => {
    return true;
  };

  const saveProfile = async () => {
    if (isValidHandle()) {
      const metadata = await getProfileMetadata({
        handle,
        display_name,
        bio,
        avatar,
        cover_image,
      });
      console.log(metadata);

      const typedDataID = await createCreateProfileTypedData({
        to: signerAddress!,
        operator,
        metadata,
        handle,
        avatar,
      });
      console.log(typedDataID);

      const relayActionId = await relay(typedDataID);
      console.log(relayActionId);

      const txn = await relayActionStatus(relayActionId);
      console.log(txn);
    } else {
      alert("The handle has been registered please use another one");
      throw new Error("The handle has been registered please use another one");
    }
  };

  return { saveProfile };
}
