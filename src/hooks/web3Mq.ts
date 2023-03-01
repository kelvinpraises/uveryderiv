import React, { useMemo, useState, useEffect } from "react";
import { Client, KeyPairsType, WalletType } from "@web3mq/client";

export const getUserFromWeb3mq = async () => {
  await Client.init({
    connectUrl: "https://testnet-us-west-1-1.web3mq.com",
    app_key: "vAUJTFXbBZRkEDRE",
  });

  const password = "1234569*(H*(J98";
  const didType: WalletType = "eth";

  // 1. connect wallet and get user
  const { address: didValue } = await Client.register.getAccount(didType);
  const { userid, userExist } = await Client.register.getUserInfo({
    did_value: didValue,
    did_type: didType,
  });

  // 2. create main key pairs
  const { publicKey: localMainPublicKey, secretKey: localMainPrivateKey } =
    await Client.register.getMainKeypair({
      password,
      did_value: didValue,
      did_type: didType,
    });

  // register func
  if (!userExist) {
    const { signContent } = await Client.register.getRegisterSignContent({
      userid,
      mainPublicKey: localMainPublicKey,
      didType,
      didValue,
    });
    const { sign: signature, publicKey: did_pubkey = "" } =
      await Client.register.sign(signContent, didValue, didType);
    const params = {
      userid,
      didValue,
      mainPublicKey: localMainPublicKey,
      did_pubkey,
      didType,
      nickname: "",
      avatar_url: `https://cdn.stamp.fyi/avatar/${didValue}?s=300`,
      signature,
    };
    const registerRes = await Client.register.register(params);
    console.log(registerRes);
  }

  // login func
  const loginInfo = await Client.register.login({
    password,
    mainPublicKey: localMainPublicKey,
    mainPrivateKey: localMainPrivateKey,
    userid,
    didType,
    didValue,
  });

  return {loginInfo, userid}
};
