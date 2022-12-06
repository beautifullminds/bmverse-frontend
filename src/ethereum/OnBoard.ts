import Onboard from "bnc-onboard";
import Web3 from "web3";
import configs from "../configs";

let web3: any;
declare let window: any;

const wallets = [
  { walletName: "metamask", preferred: true },
  { walletName: "coinbase", preferred: true },
  { walletName: "trust", preferred: true, rpcUrl: configs.RPC_URL },
  { walletName: "authereum" },
  {
    walletName: "ledger",
    rpcUrl: configs.RPC_URL
  },
  {
    walletName: "lattice",
    rpcUrl: configs.RPC_URL,
    appName: configs.WALLET_APP_NAME
  },
  {
    walletName: "cobovault",
    rpcUrl: configs.RPC_URL,
    appName: configs.WALLET_APP_NAME
  },
  {
    walletName: "fortmatic",
    apiKey: configs.FORTMATIC_KEY,
    preferred: true
  },
  {
    walletName: "portis",
    apiKey: configs.PORTIS_KEY,
    preferred: true,
    label: "Login with Email"
  },
  {
    walletName: "walletConnect",
    infuraKey: configs.INFURA_KEY
  },
  { walletName: "opera" },
  { walletName: "operaTouch" },
  { walletName: "torus" },
  { walletName: "status" },
  {
    walletName: "walletLink",
    rpcUrl: configs.RPC_URL,
    appName: configs.WALLET_APP_NAME
  },
  { walletName: "imToken", rpcUrl: configs.RPC_URL },
  { walletName: "meetone" },
  { walletName: "mykey", rpcUrl: configs.RPC_URL },
  { walletName: "huobiwallet", rpcUrl: configs.RPC_URL },
  { walletName: "hyperpay" },
  { walletName: "wallet.io", rpcUrl: configs.RPC_URL },
  { walletName: "atoken" },
  { walletName: "frame" },
  { walletName: "ownbit" },
  { walletName: "alphawallet" },
  { walletName: "gnosis" },
  { walletName: "xdefi" },
  { walletName: "bitpie" }
];

const initializationOptions = {
  dappId: configs.ONBOARD_API_KEY,
  networkId: configs.ONBOARD_NETWORK_ID,
  subscriptions: {
    wallet: (wallet: any) => {
      // instantiate web3 when the user has selected a wallet
      web3 = new Web3(wallet.provider);
    }
  },
  walletSelect: {
    wallets: wallets
  }
};

const onboard = Onboard(initializationOptions);

export { onboard, web3 };
