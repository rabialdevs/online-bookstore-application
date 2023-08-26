import React from "react";
import Navbar from "./Components/Navbar";
import DefaultBooks from "./Components/DefaultBooks";
import ShowAllBooks from "./Components/ShowAllBooks";
import { InputProvider } from "./Components/context/InputProvider";

const App = () => {
  return (
    <InputProvider>
      <>
        <Navbar />
        <DefaultBooks />
        <ShowAllBooks />
      </>
    </InputProvider>
  );
};

export default App;
