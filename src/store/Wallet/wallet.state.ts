export type WalletReducerState = {
  address: string;
  balance: number;
};

export const WALLET_INITIAL_STATE: WalletReducerState = {
  address: "",
  balance: 0
};
