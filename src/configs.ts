import { EthereumNetworkID } from "./model/EthereumNetwork";

const configs = {
  ONBOARD_API_KEY: "66f8590b-4e8a-49a7-a7d2-28dfe46ab84c",
  ONBOARD_NETWORK_ID: EthereumNetworkID.GoerliNetwork,
  FORTMATIC_KEY:
    "pk_test_737DD7FC0782E5A0" /* live(Mainnet) pk_live_ECF4039B2C85FB79*/,
  PORTIS_KEY: "",
  INFURA_KEY: "a6699e4ad89f4c4187e807f0709a360c",
  RPC_URL: "https://goerli.infura.io/v3/a6699e4ad89f4c4187e807f0709a360c",
  POLYGON_RPC_URL:
    "https://rpc-mumbai.maticvigil.com/" /* https://polygon-rpc.com/ */,
  POLYGON_BLOCK_EXPLORER:
    "https://mumbai.polygonscan.com/" /* https://polygonscan.com/ */,
  HASH_LINK_URL: "https://goerli.etherscan.io/tx/",
  BLOCK_EXPLORER: "https://goerli.etherscan.io",
  WALLET_APP_NAME: "BMverse"
};

export default configs;
