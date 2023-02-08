import React from "react";
import { Link } from "react-router-dom";

interface MenuProps {}

interface IMenu {
  label: string;
  url: string;
}

const menus: IMenu[] = [
  { label: "BM Game", url: "bmgame" },
  { label: "BM Galaxy", url: "bmgalaxy" },
  { label: "BM Mega", url: "bmmega" },
  { label: "BM Music", url: "bmmusic" },
  { label: "BM Jewel", url: "bmjewel" },
  { label: "BM Cards", url: "bmcard" },
  { label: "BM Learn", url: "bmlearn" }
];

const menuItemStyle = {
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: 30
};

const Menu: React.FC<MenuProps> = () => {
  return (
    <div className="Menu-container ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 pt-4 p-2 m-auto w-full md:w-5/6 gap-x-6 gap-y-1 border-y border-t-0 border-white">
        {menus.map((item: IMenu, index: number) => (
          <div className="text-center py-1" key={index} style={menuItemStyle}>
            <Link
              className="font-semibold text-14 md:text-22 text-white"
              to={`/${item.url}`}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
