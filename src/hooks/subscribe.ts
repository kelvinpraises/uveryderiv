import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import {
  createSubscribeTypedData,
  relay,
  relayActionStatus,
} from "@/services/cyberConnect";
import getProfileByHandle from "@/services/cyberConnect/getProfileByHandle";

export function useSubscribe() {
  // get profile id from state
  const { signerAddress, provider } = useEthereumProvider();

  const subscribe = async () => {
    const profileId = await getProfileByHandle("dreampiper_io");

    if (
      provider &&
      provider.provider.send &&
      provider.provider.request &&
      signerAddress
    ) {
      const typedData = await createSubscribeTypedData([profileId]);
      console.log(typedData);

      const message = typedData.data;
      const fromAddress = signerAddress;
      const params = [fromAddress, message];
      const method = "eth_signTypedData_v4";

      await provider?.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }], // BNB
      });

      provider?.provider.send({ method, params }, async (err, res) => {
        console.log(res);

        const relayActionId = await relay(typedData.id, res.result);
        console.log(relayActionId);

        const txn = await relayActionStatus(relayActionId);
        console.log(txn); //  { txHash: '0x161f8c93a36ff243ac51d43835d24b232cfce39d4318b5b1bbb8fff6cebaa905', txStatus: 'SUCCESS' } {relayActionId: 210453481797}
      });
    }
  };

  return { subscribe };
}
