import React, { useContext } from "react";
import { createContext, useState } from "react";
// import Component2 from "./Component2";

const ComponentContext = createContext();

export const Component1 = ({children}) => {

  const [user, setUser] = useState("Google Stark");
//   const valueObject={
//     user123:user
// }
  return (
   

    //   <ComponentContext.Provider value={valueObject}>
    <ComponentContext.Provider value={{user}}>
        {children}
      </ComponentContext.Provider>
  );
};

export const UseUserAuthContext = () => {
    return useContext(ComponentContext);
  };
