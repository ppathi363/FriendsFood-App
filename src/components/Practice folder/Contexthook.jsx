import { createContext, useContext, useState } from "react";

const Giftcontext = createContext();

export const GiftProvider = ({ children }) => {
  const [suprise, setSuprise] = useState("Pradeep");

  return (
    <div>
      <Giftcontext.Provider value={{ suprise, setSuprise }}>
        {children}
      </Giftcontext.Provider>
    </div>
  );
};

export const useData = () => useContext(Giftcontext);
