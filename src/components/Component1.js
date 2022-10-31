import React, { useContext } from "react";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";
// import Component2 from "./Component2";

const ComponentContext = createContext();

export const Component1 = ({ children }) => {
  const [user, setUser] = useState("Google Stark");
  //   const valueObject={
  //     user123:user
  // }
  return (
    <>
      <div>Main Component COMPONENT-1 which wraps all component</div>
      <div className="d-flex gap-3 align-items-center">
        <h4><Link to={"home"}>Home</Link></h4>
        <Link to={"card"}>Card</Link>
      </div>
      {/* <ComponentContext.Provider value={valueObject}> */}
      <ComponentContext.Provider value={{ user }}>
        {children}
      </ComponentContext.Provider>
    </>
  );
};

export const UseUserAuthContext = () => {
  return useContext(ComponentContext);
};
