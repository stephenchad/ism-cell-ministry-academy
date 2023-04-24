import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SingleVideo from "../components/SingleVideo";

const SingleCourse = () => {
  return (
    <Fragment>
      <Header />
      <SingleVideo />
      <Footer />
    </Fragment>
  );
};

export default SingleCourse;
