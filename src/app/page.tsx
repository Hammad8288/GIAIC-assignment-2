import React from "react";
import Box from "./component/box";
import Main from "./component/main";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div className="home bg-[#252B42] ">
      <Navbar />
      <Main />
      <Box />
    </div>
  );
}