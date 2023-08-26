import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import book_heart from "../assets/bx_bx-book-heart.svg";
import round_notification from "../assets/ic_round-notifications-none.svg";
import fluent from "../assets/fluent_premium-person-20-regular.svg";
import person_img from "../assets/IMG20210528181544.svg";
import InputContext from "./context/Inputcontext";
const Navbar = () => {
  const inputContext = useContext(InputContext);
  const { _, setInput } = inputContext;
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <nav className="flex flex-row h-20 bg-navbackground items-center justify-between text-textcolor">
        <div className="flex items-center  mr-6">
          <img src={logo} alt="logo" className="fill-current h-8 w-16 mr-2" />

          <span>KeazoNBOOKS</span>
        </div>
        <div className="flex flex-row  h-10 items-center grow gap-6">
          <input
            onChange={(event) => setSearchText(event.target.value)}
            type="search"
            placeholder=""
            className="w-5/6 py-2 px-4 bg-inputbackground appearance-none border-none leading-tight focus:outline-none rounded"
          />
          <button
            className="border-2 border-slate-500 py-1.5 px-4 rounded"
            onClick={() => setInput(searchText)}
          >
            Search
          </button>
        </div>
        <div className="flex flex-row gap-4 mr-4">
          <img src={book_heart} alt="" />
          <img src={round_notification} alt="" />
          <img src={fluent} alt="" />
          <img src={person_img} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
