import { combineReducers } from "redux";
import { walletReducer as wallet } from "./Wallet/wallet.slice";

export const rootReducer = combineReducers({
  wallet
});
