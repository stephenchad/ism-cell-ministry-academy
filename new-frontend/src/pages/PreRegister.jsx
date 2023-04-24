import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PreRegisterBoxes from "../components/PreRegisterBoxes";

const PreRegister = () => {
  return (
    <Fragment>
      <Header />
      <PreRegisterBoxes />
      <Footer />
    </Fragment>
  );
};

export default PreRegister;
