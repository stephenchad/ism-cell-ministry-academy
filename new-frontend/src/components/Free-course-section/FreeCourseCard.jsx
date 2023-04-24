import React from "react";
import { useNavigate } from "react-router-dom";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;
  const navigate = useNavigate();
  const handleSingleCourse = () => {
    navigate("/single-course");
  };
  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn" onClick={handleSingleCourse}>
          Enroll Now
        </button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
