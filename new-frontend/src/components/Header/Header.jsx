import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
  {
    display: "login",
    url: "/login",
  },
];

const Header = ({ bgColor }) => {
  const menuRef = useRef();

  const navigate = useNavigate();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const handlePageChange = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2
              className=" d-flex align-items-center gap-1"
              onClick={handlePageChange}
              style={{ cursor: "pointer" }}
            >
              <i class="ri-pantone-line"></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => {
                  return (
                    <li key={index} className="nav__item">
                      <Link to={item.url}>{item.display}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
