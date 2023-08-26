import React from "react";
import Navbar from "./Components/Navbar";
import DefaultBooks from "./Components/DefaultBooks";
import ShowAllBooks from "./Components/ShowAllBooks";
import { InputProvider } from "./Components/context/InputProvider";

const App = () => {
  return (
    <InputProvider>
      <div className="bg-[#242121] text-[#FFFFFF]">
        <Navbar />
        <DefaultBooks />
        <ShowAllBooks />
      </div>
    </InputProvider>
  );
};

export default App;
