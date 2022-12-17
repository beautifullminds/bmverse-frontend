import { RootState } from "../index";
import { toFixed } from "../number";

export function getWalletAddress(state: RootState): string {
  return state?.wallet?.address;
}

export function getWalletBalance(state: RootState): any {
  let balance = state?.wallet?.balance;
  if (balance) return toFixed(balance, 2);
  return 0;
}
