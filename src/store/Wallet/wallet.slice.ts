import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { WalletReducerState, WALLET_INITIAL_STATE } from "./wallet.state";
import Storage from "../storage";
import EthUtil from "ethereum/EthUtil";
import { onboard } from "ethereum/OnBoard";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: WALLET_INITIAL_STATE,
  reducers: {
    setWalletAddress(
      state: Draft<WalletReducerState>,
      action: PayloadAction<string>
    ) {
      state.address = action.payload;
    },
    setWalletBalance(
      state: Draft<WalletReducerState>,
      action: PayloadAction<any>
    ) {
      state.balance = action.payload;
    }
  }
});

export const { reducer, actions } = walletSlice;
export { reducer as walletReducer };

// Actions

export const { setWalletAddress, setWalletBalance } = actions;

export const getWalletBalance = () => async (dispatch: any) => {
  try {
    let balance = await EthUtil.getBalance();
    if (balance) {
      dispatch(setWalletBalance(balance));
    }
  } catch (e) {}
};

export const disconnectWallet = () => (dispatch: any) => {
  try {
    Storage.clearNetworkID();
    Storage.clearWallet();
    dispatch(setWalletAddress(""));
    dispatch(setWalletBalance("0"));
  } catch (e) {}
};

export const connectWallet = () => async (dispatch: any) => {
  try {
    let cachedWallet = Storage.get("SELECTED_WALLET");
    const walletSelected = cachedWallet
      ? await onboard.walletSelect(cachedWallet)
      : await onboard.walletSelect();
    if (walletSelected) {
      const walletCheck = await onboard.walletCheck();
      if (walletCheck) {
        const currentState = onboard.getState();
        const wallet = currentState.wallet;
        if (currentState.address) {
          Storage.set("SELECTED_NETWORK", currentState.network);
          Storage.set("SELECTED_WALLET", wallet.name);
          dispatch(setWalletAddress(currentState.address));
          dispatch(getWalletBalance());
        }
      }
    }
  } catch (e) {}
};
