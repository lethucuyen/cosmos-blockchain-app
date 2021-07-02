// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgSendIbcPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";


const types = [
  ["/user.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
  ["/user.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
  ["/user.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
  ["/user.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
  ["/user.planet.blog.MsgDeletePost", MsgDeletePost],
  ["/user.planet.blog.MsgSendIbcPost", MsgSendIbcPost],
  ["/user.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
  ["/user.planet.blog.MsgUpdatePost", MsgUpdatePost],
  ["/user.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
  ["/user.planet.blog.MsgCreatePost", MsgCreatePost],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgCreateTimedoutPost: (data: MsgCreateTimedoutPost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgCreateTimedoutPost", value: data }),
    msgDeleteSentPost: (data: MsgDeleteSentPost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgDeleteSentPost", value: data }),
    msgUpdateTimedoutPost: (data: MsgUpdateTimedoutPost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgUpdateTimedoutPost", value: data }),
    msgCreateSentPost: (data: MsgCreateSentPost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgCreateSentPost", value: data }),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgDeletePost", value: data }),
    msgSendIbcPost: (data: MsgSendIbcPost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgSendIbcPost", value: data }),
    msgUpdateSentPost: (data: MsgUpdateSentPost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgUpdateSentPost", value: data }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgUpdatePost", value: data }),
    msgDeleteTimedoutPost: (data: MsgDeleteTimedoutPost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgDeleteTimedoutPost", value: data }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/user.planet.blog.MsgCreatePost", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
