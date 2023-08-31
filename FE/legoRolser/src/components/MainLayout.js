import { Outlet } from "react-router-dom";
import Header from "./Header";
import Scroll from "./Scroll";
import Footer from "./Footer";
import React from "react";


  
export default function MainLayout(){
    return (
        <>
          <Header />
          <Scroll />
          <Outlet /> 
          <Footer />
        </>
      );
}
