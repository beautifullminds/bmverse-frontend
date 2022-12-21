import React, { useEffect } from "react";
import { disconnectWallet, connectWallet } from "store/Wallet/wallet.slice";
import {
  getWalletAddress,
  getWalletBalance
} from "store/Wallet/wallet.selector";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { onboard } from "ethereum/OnBoard";
import configs from "configs";

import Logo from "assets/imgs/logo.png";
import LogoGod from "assets/imgs/logo-god.png";

interface HeaderProps {
  scrollH: number;
}

const buttonStyle = {
  color: "#fff",
  borderRadius: "8px",
  padding: "0 17px",
  border: "1px solid #707070",
  backgroundImage:
    "linear-gradient(to top , rgba(75, 75, 75, 0.655) , rgba(177, 176, 176, 0.178))",
  fontWeight: 500
};

const Header: React.FC<HeaderProps> = ({ scrollH }) => {
  const walletAddress = useAppSelector(getWalletAddress);
  const balance = useAppSelector(getWalletBalance);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (walletAddress) {
      dispatch(connectWallet());
    }
  }, [dispatch, walletAddress]);

  const getNutAddress = () => {
    const repTxt = walletAddress.substr(5, 33);
    return walletAddress.replace(repTxt, "...");
  };

  const connectEthWallet = () => {
    dispatch(connectWallet());
  };

  const disconnectEthWallet = () => {
    onboard.walletReset();
    dispatch(disconnectWallet());
  };

  return (
    <div className="header-container relative z-50">
      <div className="flex flex-wrap bg-black w-full px-4 fixed">
        <div className="w-auto md:w-1/3">
          <img src={Logo} alt="logo" width={54} />
        </div>
        <div className="text-center md:w-1/3">
          <a href={`/${configs.BASE_URL}`}>
            <img className="inline" src={LogoGod} width={62} alt="logo-god" />
            <span className="text-white text-22 lg:text-28 tracking-wide">
              BMVerse.io
            </span>
          </a>
        </div>
        {!walletAddress ? (
          <div className="text-right md:pt-[12px] w-full md:w-1/3 text-18 md:text-22">
            <button style={buttonStyle} onClick={connectEthWallet}>
              Connect Wallet
            </button>
          </div>
        ) : (
          <div className="text-right md:pt-[12px] w-full md:w-1/3 text-18 md:text-22">
            <span className="text-16 mr-4">{getNutAddress()}</span>
            <span className="text-16 mr-4">{balance} ETH</span>
            <button style={buttonStyle} onClick={disconnectEthWallet}>
              Disconnect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
