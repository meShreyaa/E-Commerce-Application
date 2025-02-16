import React from "react";
import Header from "./Util/Header";
import { Outlet } from "react-router-dom";
import Body from "./Util/Body";
import Slide from "./Util/Slide";
import Electronics from "./Util/Electronics";
import Electronics1 from "./Util/Electronics1";
import Register from "./Public/Register";
const App = () => {
  return (
    <div className="m-0">
      <Header />
      <Outlet />
      <Body/>
      <Slide/>
      <Electronics/>
      <Electronics1/>
    </div>
  );
};

export default App;
