import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../assets/styles/style.scss'

const MainHOC: FC = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainHOC;

