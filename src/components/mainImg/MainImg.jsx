/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import PropTypes from "prop-types";

function MainImg(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = (isOpen) => {
    setMenuOpen(isOpen);
  };
  const {
    imgurl,
    imgalt,
    title,
    description,
    MaintextColor,
    blog,
    // Navbar
    navbgcolor,
    contentNav,
    bgColor,
    textColor,
    textColorLi,
    textColorLiHover,
    logohudbil,
    logohudbilleaf,
  } = props;
  return (
    <div className="h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-screen relative">
      <img
        src={imgurl}
        alt={imgalt}
        className="absolute top-0 w-full h-full object-cover z-[-1]"
      />

      <Navbar
        navbgcolor={navbgcolor}
        contentNav={contentNav}
        bgColor={bgColor}
        textColor={textColor}
        textColorLi={textColorLi}
        textColorLiHover={textColorLiHover}
        logohudbil={logohudbil}
        logohudbilleaf={logohudbilleaf}
        onMenuOpen={handleMenuOpen}
      />

      <div
        className={`${
          menuOpen ? "hidden" : "flex justify-end items-end absolute bottom-0 "
        }`}
      >
        {" "}
        <div>
          <h1
            className={`lg:text-[38px] lg:leading-[52px] font-[600] text-[8vmin] pl-7 sm:text-[10vmin] lg:px-[100px]  ${MaintextColor}`}
          >
            {blog}
          </h1>
          <h1
            className={`lg:text-[80px] lg:leading-[110px] font-[700] text-[8vmin] pl-7 sm:text-[10vmin] lg:px-[100px] ${MaintextColor}`}
          >
            {title}
          </h1>
          <marquee scrollamount="10">
            <h1
              className={`lg:text-[90px] text-[9vmin] font-[200] sm:text-[11vmin] ${MaintextColor}`}
            >
              {description}
            </h1>
          </marquee>
        </div>
      </div>
    </div>
  );
}

MainImg.propTypes = {
  imgurl: PropTypes.string.isRequired,
  imgalt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string,
  MaintextColor: PropTypes.string,
  blog: PropTypes.string,
  // Navbar
  navbgcolor: PropTypes.string,
  contentNav: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  textColorLi: PropTypes.string,
  textColorLiHover: PropTypes.string,
  logohudbil: PropTypes.string,
  logohudbilleaf: PropTypes.string,
};
MainImg.defaultProps = {
  imgurl: "/OtherPages/Careerimg/main.svg",
  imgalt: "Img Not Found",

  description:
    "Working hand in hand with our clients, our project are consistently awarded and we are proud of that This means that we are moving in the right direction",
  // Navbar props
  navbgcolor: "bg-black",
  contentNav:
    "We are a global creative agency that combines design expertise with technology and AI intelligence.",
  bgColor: "bg-white",
  textColor: "text-white",
  textColorLi: "text-white",
  textColorLiHover: "text-gray-500",
  logohudbil: "logo/logo.svg",
};

export default MainImg;
