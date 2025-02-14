import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [xPosition, setXPosition] = useState(18.3359);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [debouncedPos, setDebouncedPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 1024) {
      const rect = e.currentTarget.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left + 2,
        y: e.clientY - rect.top + 2,
      });
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const handler = setTimeout(() => {
        setDebouncedPos(cursorPos);
      }, 20);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [cursorPos]);

  const handleMouseEnter2 = () => {
    if (window.innerWidth >= 1024) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave2 = () => {
    if (window.innerWidth >= 1024) {
      setIsHovering(false);
    }
  };

  const handleMouseEnter = () => {
    setXPosition(0);
  };

  const handleMouseLeave = () => {
    setXPosition(18.3359);
  };

  const handleOpenMenu = () => {
    setMenuOpen(true);
    setXPosition(0);
    if (typeof props.onMenuOpen === "function") {
      props.onMenuOpen(true);
    }
    document.body.classList.add("noscroll");
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
      if (typeof props.onMenuOpen === "function") {
        props.onMenuOpen(false);
      }
      document.body.classList.remove("noscroll");
    }, 1600);
  };

  const handleMenuToggle = () => {
    if (menuOpen) {
      handleCloseMenu();
    } else {
      handleOpenMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [menuOpen]);
  const links = [
    { to: "/", text: "Home" },
    { to: "/aboutmainmenu", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/products", text: "Products" },
    { to: "/work", text: "Work" },
    { to: "/resourcesforyou", text: "Blog" },
    { to: "/contact", text: "Contact" },
    { to: "/chat", text: "Chat with ella" },
  ];

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const pathname = location.pathname;
    const activeLink = links.find((link) => link.to === pathname);
    if (activeLink) {
      setActiveItem(activeLink.text);
    } else {
      setActiveItem("");
    }
  }, [location.pathname]);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: [0.42, 0, 0.58, 1],
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: [0.42, 0, 0.58, 1],
      },
    }),
  };

  const menuVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const leftsideVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <header
      className={`transition-all duration-700 z-[10000] ${
        menuOpen ? `${props.navbgcolor} lg:pr-[14px]` : ""
      } `}
    >
      <nav className="flex justify-between items-center lg:px-[100px] lg:pt-[30px] md:p-10 p-6">
        <div className="logo">
          <Link to="/">
            <svg
              className="w-24 2xl:w-36 page6-cont"
              viewBox="0 0 147 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_4604_30873)">
                <g filter="url(#filter1_i_4604_30873)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M85.7396 0V32.8362L84.8707 32.0235C82.3765 29.6902 79.43 28.4746 75.8446 28.2993C71.4494 28.0846 67.459 29.6459 64.4405 32.7617C61.247 36.058 59.7318 39.8679 59.7246 44.6199C59.7176 49.1996 61.2161 53.0679 64.2366 56.2674C67.5128 59.7378 72.0424 61.4734 76.597 61.0035C79.8147 60.6714 82.4987 59.5852 84.7384 57.7087L85.6747 56.9242V61.0035H92.1006V0H85.7396ZM78.2458 34.8659C81.3242 35.9562 83.5837 38.4945 84.4437 41.8288C86.1196 48.3263 81.7538 54.8709 75.7436 54.8709C72.5495 54.8709 69.5875 52.9473 67.9701 49.8223C64.9082 43.9064 67.7698 36.3516 73.6785 34.7516C74.9368 34.4109 77.1151 34.4654 78.2458 34.8659Z"
                    fill={menuOpen ? "#FE7272" : "white"}
                    className="transition duration-300"
                  />
                </g>
                <g filter="url(#filter2_i_4604_30873)">
                  <g filter="url(#filter3_i_4604_30873)">
                    <path
                      d="M0.498047 0.179688L0.498047 61.013H6.85819V51.2167C6.85884 46.2329 6.9153 41.9511 6.98927 41.2891C7.47957 36.8988 9.7111 34.4981 13.3021 34.4981C16.4146 34.4981 18.4367 36.0884 19.2813 39.2003C19.4717 39.902 19.5023 41.1626 19.5415 49.9231V61.013H25.9947V38.4433L25.6503 37.1925C24.0139 31.2504 19.9838 28.0194 14.1896 28.0041C11.7878 27.9979 9.46115 28.6858 7.56068 29.9643C7.23793 30.1813 6.94761 30.3589 6.91556 30.3589C6.88337 30.3589 6.85716 27.3561 6.85716 1.17551V0.179688H0.498047Z"
                      fill={menuOpen ? "#FE7272" : "white"}
                      className="transition duration-300"
                    />
                    <path
                      d="M140.163 0.248171V60.8341H146.498V0.248171H140.163Z"
                      fill={menuOpen ? "#FE7272" : "white"}
                      className="transition duration-300"
                    />
                    <path
                      d="M29.6041 29.2382C29.5666 29.3357 29.557 34.008 29.5829 39.6209C29.6282 49.4548 29.6398 49.8698 29.9042 51.025C30.2891 52.7066 30.5306 53.4029 31.2043 54.773C33.1854 58.8014 36.8301 61.0128 41.4886 61.013C43.6401 61.0131 45.7067 60.3454 47.6205 59.0312L48.4965 58.4297L48.6241 61.013H55.1152V29.0655H48.6263L48.6241 37.8937C48.6228 42.7492 48.5657 47.2457 48.4972 47.8859C48.0711 51.8667 46.3843 54.002 43.3134 54.4482C40.0808 54.9179 37.6579 53.3114 36.5371 49.9556L36.2714 48.976L36.1028 29.1302L32.8875 29.0955C30.2606 29.0673 29.6598 29.0935 29.6041 29.2382Z"
                      fill={menuOpen ? "#FE7272" : "white"}
                      className="transition duration-300"
                    />
                  </g>
                </g>
                <g filter="url(#filter4_i_4604_30873)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M94.5293 0.121094V61.0124H100.927V56.9843L101.859 57.7705C104.089 59.651 106.761 60.7395 109.964 61.0723C114.498 61.5433 119.008 59.8039 122.27 56.3261C125.277 53.1197 126.768 49.2431 126.761 44.6537C126.754 39.8915 125.246 36.0735 122.066 32.7701C119.061 29.6477 115.089 28.083 110.713 28.2982C107.144 28.4739 104.21 29.6921 101.727 32.0304L100.862 32.8448V0.121094H94.5293ZM108.323 34.8788C105.258 35.9715 103.008 38.5152 102.152 41.8566C100.484 48.368 104.83 54.9266 110.814 54.9266C113.994 54.9266 116.942 52.9989 118.553 49.8672C121.601 43.9387 118.752 36.3678 112.87 34.7643C111.617 34.4228 109.448 34.4775 108.323 34.8788Z"
                    fill={menuOpen ? "#FE7272" : "white"}
                    className="transition duration-300"
                  />
                </g>
                <g filter="url(#filter5_i_4604_30873)">
                  <path
                    d="M130.35 60.8344V28.9141H136.711L136.838 60.8344H130.35Z"
                    fill={menuOpen ? "#FE7272" : "white"}
                    className="transition duration-300"
                  />
                </g>
                <g filter="url(#filter6_i_4604_30873)">
                  <circle
                    cx="133.289"
                    cy="21.232"
                    r="2.93903"
                    fill={menuOpen ? "#FE7272" : "white"}
                    className="transition duration-300"
                  />
                </g>
                <g filter="url(#filter7_i_4604_30873)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M92.1004 0.179688H85.7393V32.8357L84.8705 32.023C82.3763 29.6897 79.4298 28.4741 75.8444 28.2988C71.4492 28.0841 67.4588 29.6454 64.4403 32.7611C61.2618 36.0419 59.7459 39.8315 59.7246 44.5522H66.7287C66.7818 40.0909 69.4497 35.8962 73.6783 34.7511C74.9366 34.4104 77.1149 34.4649 78.2456 34.8654C81.324 35.9557 83.5835 38.494 84.4435 41.8283C84.679 42.7414 84.7952 43.6555 84.8043 44.5522H92.1004V0.179688Z"
                    fill={menuOpen ? "#FE7272" : "white"}
                    className="transition duration-300"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_4604_30873"
                  x="0.498047"
                  y="0"
                  width="146"
                  height="65.1484"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
                <filter
                  id="filter1_i_4604_30873"
                  x="59.7246"
                  y="0"
                  width="34.377"
                  height="63.0801"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2.00713" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
                <filter
                  id="filter2_i_4604_30873"
                  x="0.498047"
                  y="0.179688"
                  width="146"
                  height="64.834"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.968627 0 0 0 0 0.454902 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
                <filter
                  id="filter3_i_4604_30873"
                  x="0.498047"
                  y="0.179688"
                  width="146"
                  height="64.8483"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4.01427" />
                  <feGaussianBlur stdDeviation="2.00713" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
                <filter
                  id="filter4_i_4604_30873"
                  x="94.5293"
                  y="0.121094"
                  width="32.2324"
                  height="65.0416"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4.01427" />
                  <feGaussianBlur stdDeviation="2.00713" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
                <filter
                  id="filter5_i_4604_30873"
                  x="130.35"
                  y="28.9141"
                  width="6.48828"
                  height="35.9342"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4.01427" />
                  <feGaussianBlur stdDeviation="2.00713" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.447059 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
                <filter
                  id="filter6_i_4604_30873"
                  x="130.35"
                  y="18.293"
                  width="5.87891"
                  height="9.89317"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4.01427" />
                  <feGaussianBlur stdDeviation="2.00713" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
                <filter
                  id="filter7_i_4604_30873"
                  x="59.7246"
                  y="0.179688"
                  width="34.375"
                  height="46.373"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="2.00713" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.968627 0 0 0 0 0.454902 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_4604_30873"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
        </div>

        {/* Hamburger menu */}
        <button id="nav-open" onClick={handleMenuToggle}>
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className="hamburger-menu relative transition-all duration-700 cursor-effect w-20 h-20  flex items-center justify-end"
            style={{
              transition: "left 0.3s ease-out, top 0.3s ease-out",
            }}
          >
            {menuOpen ? (
              <svg
                width="36"
                height="28"
                viewBox="0 0 55 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={
                  isHovering
                    ? {
                        position: "absolute",
                        left: debouncedPos.x,
                        top: debouncedPos.y,
                        transform: "translate(-50%, -50%)",
                        transition: "left 0.3s ease-out, top 0.3s ease-out",
                      }
                    : {}
                }
              >
                <rect
                  id="rect1"
                  y="15.5742"
                  width="55"
                  height="4"
                  fill={menuOpen ? "#FE7272" : "white"}
                  className="transition-all duration-300"
                  transform="rotate(45 36 6)"
                />
                <rect
                  id="rect2"
                  y="0.0742188"
                  width="55"
                  height="4"
                  fill={menuOpen ? "#FE7272" : "white"}
                  className="transition duration-300"
                  transform="rotate(-45 32 6)"
                />
              </svg>
            ) : (
              <svg
                width="36"
                height="28"
                viewBox="0 0 55 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={
                  isHovering
                    ? {
                        position: "absolute",
                        left: debouncedPos.x,
                        top: debouncedPos.y,
                        transform: "translate(-50%, -50%)",
                        transition: "left 0.3s ease-out, top 0.3s ease-out",
                      }
                    : {}
                }
              >
                <rect
                  id="rect1"
                  x={xPosition}
                  y="15.5742"
                  width="55"
                  height="4"
                  fill={menuOpen ? "#FE7272" : "white"}
                  className="transition-all duration-300"
                />
                <rect
                  id="rect2"
                  y="0.0742188"
                  width="55"
                  height="4"
                  fill={menuOpen ? "#FE7272" : "white"}
                  className="transition duration-300"
                />
              </svg>
            )}
          </div>
        </button>
      </nav>

      {/* Navigation item */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            animate={menuOpen ? "visible" : "hidden"}
            id="navigation-menu"
            initial="hidden"
            exit="exit"
            variants={menuVariants}
            className="w-full fixed z-[10000]"
          >
            <div
              className={`${
                menuOpen
                  ? `flex justify-center lg:justify-between lg:pl-[105px] lg:pr-[119px] lg:pb-[80px] py-6 ${props.navbgcolor}`
                  : "hidden"
              } `}
            >
              <div className="hidden  lg:min-h-screen lg:flex lg:items-end lg:justify-center lg:w-1/2">
                <motion.div
                  animate={menuOpen ? "visible" : "hidden"}
                  initial="hidden"
                  exit="exit"
                  variants={leftsideVariants}
                  className="pb-[200px]"
                >
                  <div className={`text-base ${props.textColorLi} `}>
                    {props.contentNav}
                  </div>
                  <div className="flex mt-3">
                    <div
                      className={`opacity-70 2xl:text-xl ${props.textColorLi} `}
                    >
                      Follow us
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div
                      className={`font-medium 2xl:text-xl ${props.textColorLi} `}
                    >
                      Fb &nbsp; Li &nbsp; lg &nbsp; Tw
                    </div>
                  </div>
                  <div
                    className={`mt-3 text-xs font-thin ${props.textColorLi} `}
                  >
                    &copy; 2024 Hudbil Private Limited. All rights reserved |
                    Privacy Policy | Terms & Conditions | Cookies Policies
                  </div>
                </motion.div>
              </div>

              <div className="min-h-screen cursor-effect cursor-pointer flex items-center text-center text-4xl md:text-6xl lg:text-4xl  2xl:text-5xl lg:text-right lg:items-end lg:justify-center ">
                <ul className="pb-[180px]">
                  <AnimatePresence>
                    {menuOpen &&
                      !isClosing &&
                      links.map((link, index) => (
                        <motion.li
                          key={link.to}
                          custom={index}
                          initial="hidden"
                          animate={menuOpen ? "visible" : "hidden"}
                          exit="exit"
                          variants={itemVariants}
                        >
                          <div className="2xl:mb-5 2xl:font-bold">
                            <Link
                              to={link.to}
                              className={`ajax-link ${
                                activeItem === link.text
                                  ? props.textColorLiHover
                                  : props.textColorLi
                              } hover:${
                                props.textColorLiHover
                              } transition-all duration-500`}
                            >
                              {link.text}
                            </Link>
                          </div>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

Navbar.propTypes = {
  contentNav: PropTypes.string.isRequired,
  navbgcolor: PropTypes.string,
  textColorLi: PropTypes.string,
  textColorLiHover: PropTypes.string,
  onMenuOpen: PropTypes.func,
};
Navbar.defaultProps = {
  navbgcolor: "bg-black",
  contentNav:
    "We are a global creative agency that combines design expertise with technology and AI intelligence.",
  bgColor: "bg-white",
  textColor: "text-white",
  textColorLi: "text-white",
  textColorLiHover: "bg-[#c5f5f]",
  logohudbil: "logo/logo.svg",
  logohudbilleaf: "logo/logo.svg",
};

export default Navbar;
