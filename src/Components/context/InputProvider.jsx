import { useState } from "react";
import InputContext from "./Inputcontext";

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState("harry+potter");

  return (
    <InputContext.Provider
      value={{
        setInput: setInput,
        input: input,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
