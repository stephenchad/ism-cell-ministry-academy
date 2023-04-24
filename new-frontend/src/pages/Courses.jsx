import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import AllCourses from "../components/Courses-section/AllCourses";
import Footer from "../components/Footer/Footer";
import AllcoursesTop from "../components/Courses-section/AllcoursesTop";

const CoursesPage = () => {
  return (
    <Fragment>
      <Header />
      <AllcoursesTop />
      <AllCourses />
      <AllCourses />
      <AllCourses />
      <Footer />
    </Fragment>
  );
};

export default CoursesPage;
