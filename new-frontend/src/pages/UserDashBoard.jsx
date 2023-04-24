import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import PreRegisterBoxes from "../components/PreRegisterBoxes";
import Footer from "../components/Footer/Footer";

const UserDashBoard = () => {
  return (
    <Fragment>
      <Header />
      <PreRegisterBoxes />
      <Footer />
    </Fragment>
  );
};

export default UserDashBoard;
