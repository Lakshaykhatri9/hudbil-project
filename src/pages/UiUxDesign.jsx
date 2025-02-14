/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Navbar from "../components/navbar/Navbar";

function UiUxDesign() {
  const images = [
    {
      src: "/OtherPages/Researchimg/01.svg",
      alt: "Image 1",
      content: "our brands",
    },
    {
      src: "/OtherPages/Researchimg/02.svg",
      alt: "Image 1",
      content: "our brands",
    },
    {
      src: "/OtherPages/Researchimg/03.svg",
      alt: "Image 1",
      content: "our brands",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 2));

  const handleNextClick = () => {
    let newIndex = currentIndex + 1;
    if (newIndex > images.length - visibleImages.length) {
      newIndex = images.length - visibleImages.length;
    }
    setCurrentIndex(newIndex);
    setVisibleImages(images.slice(newIndex, newIndex + visibleImages.length));
  };

  const handlePrevClick = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
    setVisibleImages(images.slice(newIndex, newIndex + visibleImages.length));
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      number: "01",
      brandPhoto: "/OtherPages/Researchimg/hudbil-1.svg",
      titel: "Plan and Sketch ",
      description:
        "Your company’s reputation is built on how you identify as a business, act or behave with your clients, and how you perform when providing a service or product. We’ll start by sending you our tailored Brand Foundations document to extract your key ideas to help us think beyond just a logo and create a unique identity across everything you do. This allows us to analyses everything about you, your competitors and your audience.",
    },
    {
      number: "02",
      brandPhoto: "/OtherPages/Researchimg/hudbil-2.svg",
      titel: "Plan and Sketch ",
      description:
        "Whether you need to design or development your first MVP to get funding, redesign your product to improve business metrics, or get a remote design/branding team to grow faster - our product engineers are here to help you.",
    },
    {
      number: "03",
      brandPhoto: "/OtherPages/Researchimg/hudbil-3.svg",
      titel: "Creating Design ",
      description:
        "By examining how we can present your organization as a coherent collective on and offline, we can offer you a clear, simple, and logical way to explain your brand and products and foresee how we can support your growth as the business evolves and develops. We’ll create a brand identity by exploring colours, fonts, messaging and the logo and test these ideas with you, your stakeholders and your teams.",
    },
    {
      number: "04",
      brandPhoto: "/OtherPages/Researchimg/hudbil-4.svg",
      titel: "Our Approach ",
      description:
        "Your company’s reputation is built on how you identify as a business, act or behave with your clients, and how you perform when providing a service or product. We’ll start by sending you our tailored Brand Foundations document to extract your key ideas to help us think beyond just a logo and create a unique identity across everything you do. This allows us to analyses everything about you, your competitors and your audience.",
    },
    {
      number: "05",
      brandPhoto: "/OtherPages/Researchimg/hudbil-5.svg",
      titel: "Our Approach ",
      description:
        "Your company’s reputation is built on how you identify as a business, act or behave with your clients, and how you perform when providing a service or product. We’ll start by sending you our tailored Brand Foundations document to extract your key ideas to help us think beyond just a logo and create a unique identity across everything you do. This allows us to analyses everything about you, your competitors and your audience.",
    },
  ]);

  const handleForward = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleBackward = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const ellipseRef = useRef(null);
  const rectRef = useRef(null);
  useEffect(() => {
    if (window.location.pathname === "/uiuxdesign") {
      gsap.to(ellipseRef.current, { duration: 2, attr: { cx: 461.5 } });
      gsap.to(rectRef.current, {
        duration: 2,
        fill: "#a45c6e",
        stroke: "#a45c6e",
      });
    }
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = (isOpen) => {
    setMenuOpen(isOpen);
  };
  return (
    <>
      {" "}
      <div className="bg-[#596e5c] ">
        {" "}
        <Navbar
          navbgcolor="bg-[#596e5c]"
          onMenuOpen={handleMenuOpen}
          textColorLiHover="text-[#FE7272]"
        />
      </div>
      <div className=" -mt-1 bg-[#596e5c] flex flex-col items-center justify-center h-[85vh] relative">
        <div className="flex flex-col justify-center items-center absolute top-0">
          <svg
            width="300"
            height="413"
            viewBox="0 0 669 413"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pb-24 md:pb-52 lg:pb-96 xl:pb-60 relative md:w-[550px] md:h-[643px] lg:w-[500px] lg:h-[643px] 2xl:w-[700px] 2xl:h-[913px] "
          >
            <g filter="url(#filter0_i_5972_176)">
              <rect width="669" height="412.439" rx="206.219" fill="#FF7400" />
              <rect
                x="5"
                y="5"
                width="659"
                height="402.439"
                rx="201.219"
                stroke="#FF7400"
                strokeWidth="10"
              />
              <g filter="url(#filter1_d_5972_176)">
                <ellipse
                  className="transition-all"
                  cx="261.5"
                  cy="206.5"
                  rx="165.5"
                  ry="164.5"
                  fill="white"
                />
              </g>
            </g>
            <svg
              width="669"
              height="413"
              viewBox="0 0 669 413"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_5972_176)">
                <rect
                  ref={rectRef}
                  width="669"
                  height="412.439"
                  rx="206.219"
                  fill="#808080"
                />
                <rect
                  ref={rectRef}
                  x="5"
                  y="5"
                  width="659"
                  height="402.439"
                  rx="201.219"
                  stroke="#808080"
                  strokeWidth="10"
                />
                <g filter="url(#filter1_d_5972_176)">
                  <ellipse
                    ref={ellipseRef}
                    cx="210.5"
                    cy="206.5"
                    rx="165.5"
                    ry="164.5"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_5972_176"
                  x="0"
                  y="0"
                  width="669"
                  height="420.439"
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
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.932654 0 0 0 0 0.94579 0 0 0 0 0.934296 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_5972_176"
                  />
                </filter>
              </defs>
            </svg>
          </svg>
          <h3 className="text-3xl md:text-5xl lg:text-[50px] 2xl:text-[80px] font-[700] absolute bottom-20 md:bottom-44 lg:bottom-80 xl:bottom-52   ">
            UI/UX DESIGN
          </h3>
        </div>
        <div className={`${menuOpen ? "hidden" : "absolute bottom-0"}`}>
          <marquee scrollamount="10">
            <h1 className="lg:text-[50px] 2xl:text-[90px]  text-[9vmin] font-[200] sm:text-[11vmin] my-10">
              Designers. Dreamers. Doers. On a mission to supercharge businesses
              through design.
            </h1>
          </marquee>
        </div>
      </div>
      <div className="bg-[#596e5c] p-3 lg:p-[100px] -mt-1">
        <div>
          <p className="lg:my-10 my-8 font-[400] md:text-2xl text-sm">
            Our team of experienced designers collaborates with clients to gain
            a deep understanding of their products goals, target audience, and
            design requirements. We employ a human - centered approach , which
            places the users at the center of the design approach, which places
            the users at the center of the design process , to ensure that final
            product is intuitive and easy to use.
          </p>
          <p className="lg:my-10 my-8 font-[400] md:text-2xl text-sm">
            Throughout the design process, we incorporate feedback from clients
            and users to refine the design and functionality. Our goal is to
            create visually appealing digital products that deliver value to the
            user and differentiate our clients in the market.
          </p>
        </div>
      </div>
      <div className="bg-[#596e5c] p-3 -mt-1">
        <div className="carousel">
          <div className="flex md:gap-10 flex-wrap justify-evenly">
            {visibleImages.map((image, index) => (
              <div key={index} className="my-4">
                <img src={image.src} alt={image.alt} className="sm:w-[45vw]" />

                <div className="flex items-center gap-5">
                  {" "}
                  <hr className="w-36 md:w-12 lg:w-16" />
                  {image.content && (
                    <h6 className="my-1 lg:text-[28px] font-[600]">
                      Our brands
                    </h6>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="gap-3 mt-auto mr-5 pb-10 flex flex-row-reverse">
            <button className="" onClick={handleNextClick}>
              <svg
                width="48"
                height="24"
                viewBox="0 0 48 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="23"
                  rx="11.5"
                  stroke="white"
                  className="background-animation"
                />
                <g
                  clipPath="url(#clip0_4965_1810)"
                  className="right-arrow-animation"
                >
                  <g clipPath="url(#clip1_4965_1810)">
                    <path
                      d="M24.8002 8L28.8001 12M28.8001 12L24.8002 16M28.8001 12H19.2002"
                      stroke="white"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4965_1810">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 4)"
                    />
                  </clipPath>
                  <clipPath id="clip1_4965_1810">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="" onClick={handlePrevClick}>
              <svg
                width="48"
                height="24"
                viewBox="0 0 48 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nav-svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="23"
                  rx="11.5"
                  stroke="white"
                  className="background-animation"
                />
                <g
                  clipPath="url(#clip0_4965_1804)"
                  className="left-arrow-animation"
                >
                  <g clipPath="url(#clip1_4965_1804)">
                    <path
                      d="M23.2002 8L19.2002 12M19.2002 12L23.2002 16M19.2002 12H28.8001"
                      stroke="white"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_4965_1804">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 4)"
                    />
                  </clipPath>
                  <clipPath id="clip1_4965_1804">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#596e5c] p-3 lg:p-[100px] lg:-mt-20">
        <div>
          <p className="lg:my-10 my-8 font-[400] md:text-2xl text-sm">
            We do web development without compromise. we love building
            beautiful, creative websites that effectively drive real results for
            your business.
          </p>
          <p className="lg:my-10 my-8 font-[400] md:text-2xl text-sm">
            We have always believed that websites can and must be both beautiful
            and functional - and not just one or the other. In everything we do,
            we pay meticulous attention to detail, ensuring that we can take
            pride in everything we put out into the world.
          </p>
          <p className="lg:my-10 my-8 font-[400] md:text-2xl text-sm">
            We do web development without compromise. we love building
            beautiful, creative websites that effectively drive real results for
            your business.
          </p>
          <p className="lg:my-10 my-8 font-[400] md:text-2xl text-sm">
            We have always believed that websites can and must be both beautiful
            and functional - and not just one or the other. In everything we do,
            we pay meticulous attention to detail, ensuring that we can take
            pride in everything we put out into the world.
          </p>
        </div>

        <div className="sm:mt-20 mt-16">
          {" "}
          <div className="grid grid-cols-5 ">
            {/* Repeat this block for each customer logo */}
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-01.svg"
                alt=""
                className="w-[13vw]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-02.svg"
                alt=""
                className="w-[13vw]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-03.svg"
                alt=""
                className="w-[5vw]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-04.svg"
                alt=""
                className="w-[5vw]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-05.svg"
                alt=""
                className="w-[12vw]"
              />
            </div>
          </div>
          <div className="mt-20 grid grid-cols-4">
            {/* Repeat this block for each customer logo */}
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-06.svg"
                alt=""
                className="w-[13vw]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-07.svg"
                alt=""
                className="w-[13vw]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-08.svg"
                alt=""
                className="w-[8vw]"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/logo-09.svg"
                alt=""
                className="w-[13vw]"
              />
            </div>
          </div>
        </div>

        {/* We think big */}
        <div className="mt-28">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <div className="md:flex justify-between my-5 ">
                <div className="lg:w-[50vw]">
                  <div className="mt-5 flex justify-between items-center">
                    <div>
                      {" "}
                      <button className="border border-white rounded-full w-[210px] h-[40px] text-[20px] font-[100] bg-[#a45c6e]">
                        OUR APPROACH
                      </button>
                      <h1 className="text-[10vmin] sm:text-[70px] lg:text-[96px] font-[300]">
                        WE THINK BIG.
                      </h1>
                    </div>
                    {/* We use for mobile screen */}
                    {/* <div className="md:hidden">
                      {currentSlide === 0 ? (
                        <button onClick={handleForward}>
                          {" "}
                          <i className="fa-solid fa-arrow-right border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black"></i>
                        </button>
                      ) : currentSlide === slides.length - 1 ? (
                        <button onClick={handleBackward}>
                          {" "}
                          <i className="fa-solid fa-arrow-left border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black"></i>
                        </button>
                      ) : (
                        <div className="flex justify-around gap-2 ">
                          <button onClick={handleBackward}>
                            {" "}
                            <i className="fa-solid fa-arrow-left border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black"></i>
                          </button>
                          <button onClick={handleForward}>
                            {" "}
                            <i className="fa-solid fa-arrow-right border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black"></i>
                          </button>
                        </div>
                      )}
                    </div> */}
                  </div>
                  <div className="flex gap-3 items-center border-b-2 py-3">
                    {" "}
                    <button className="block border border-white rounded-full w-[57px] h-[39px] font-[100]">
                      {slide.number}
                    </button>
                    <h4 className="sm:text-[36px] text-[5vmin] font-[600]">
                      {slide.titel}{" "}
                    </h4>
                  </div>
                  <div className="mt-10">
                    {" "}
                    <p className="lg:text-[24px] text-[4vmin] font-[300]">
                      {slide.description}{" "}
                    </p>
                  </div>

                  {/* Desktop Buttons*/}
                  <div className="md:flex justify-center mt-8 md:mt-6 lg:mt-20">
                    {currentSlide === 0 ? (
                      <button onClick={handleForward}>
                        {" "}
                        <svg
                          width="48"
                          height="24"
                          viewBox="0 0 48 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="nav-svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="47"
                            height="23"
                            rx="11.5"
                            stroke="white"
                            className="background-animation"
                          />
                          <g
                            clipPath="url(#clip0_4965_1810)"
                            className="right-arrow-animation"
                          >
                            <g clipPath="url(#clip1_4965_1810)">
                              <path
                                d="M24.8002 8L28.8001 12M28.8001 12L24.8002 16M28.8001 12H19.2002"
                                stroke="white"
                                strokeLinecap="square"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_4965_1810">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(16 4)"
                              />
                            </clipPath>
                            <clipPath id="clip1_4965_1810">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(16 4)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    ) : currentSlide === slides.length - 1 ? (
                      <button onClick={handleBackward}>
                        {" "}
                        <svg
                          width="48"
                          height="24"
                          viewBox="0 0 48 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="nav-svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="47"
                            height="23"
                            rx="11.5"
                            stroke="white"
                            className="background-animation"
                          />
                          <g
                            clipPath="url(#clip0_4965_1804)"
                            className="left-arrow-animation"
                          >
                            <g clipPath="url(#clip1_4965_1804)">
                              <path
                                d="M23.2002 8L19.2002 12M19.2002 12L23.2002 16M19.2002 12H28.8001"
                                stroke="white"
                                strokeLinecap="square"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_4965_1804">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(16 4)"
                              />
                            </clipPath>
                            <clipPath id="clip1_4965_1804">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(16 4)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    ) : (
                      <div className="space-x-2">
                        <button onClick={handleBackward}>
                          {" "}
                          <svg
                            width="48"
                            height="24"
                            viewBox="0 0 48 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="nav-svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="47"
                              height="23"
                              rx="11.5"
                              stroke="white"
                              className="background-animation"
                            />
                            <g
                              clipPath="url(#clip0_4965_1804)"
                              className="left-arrow-animation"
                            >
                              <g clipPath="url(#clip1_4965_1804)">
                                <path
                                  d="M23.2002 8L19.2002 12M19.2002 12L23.2002 16M19.2002 12H28.8001"
                                  stroke="white"
                                  strokeLinecap="square"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_4965_1804">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(16 4)"
                                />
                              </clipPath>
                              <clipPath id="clip1_4965_1804">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(16 4)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        <button onClick={handleForward}>
                          {" "}
                          <svg
                            width="48"
                            height="24"
                            viewBox="0 0 48 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="nav-svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="47"
                              height="23"
                              rx="11.5"
                              stroke="white"
                              className="background-animation"
                            />
                            <g
                              clipPath="url(#clip0_4965_1810)"
                              className="right-arrow-animation"
                            >
                              <g clipPath="url(#clip1_4965_1810)">
                                <path
                                  d="M24.8002 8L28.8001 12M28.8001 12L24.8002 16M28.8001 12H19.2002"
                                  stroke="white"
                                  strokeLinecap="square"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_4965_1810">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(16 4)"
                                />
                              </clipPath>
                              <clipPath id="clip1_4965_1810">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(16 4)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop img */}
                <div className="hidden lg:block">
                  {" "}
                  <img
                    src={slide.brandPhoto}
                    alt="Brand Photo"
                    className="w-[60vmin]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:mt-16 md:mt-24 mt-10 flex justify-between items-center flex-wrap">
          <p className="font-[400] text-xl sm:text-2xl md:text-4xl  lg:text-[48px] lg:leading-[65px] lg:w-[49vw]">
            Want to stand out from the crowd with a brilliant website?
          </p>
          <button className="btn-animate-white block border border-white rounded-full mt-5 lg:mt-0 text-[2vmin] w-[18vmin] sm:w-[20vmin] h-[8vmin] sm:text-[2.4vmin] md:w-[23vmin] lg:w-[158px] lg:h-[49px] font-[200]">
            View Project
          </button>
        </div>

        <div className="text-center mt-14 md:mt-28 space-y-8">
          <p className="font-[500] text-3xl sm:text-4xl md:text-[56px]">
            Our Product Discovery
          </p>
          <p className="font-[500] text-3xl sm:text-4xl md:text-[56px]">
            {" "}
            process wraps around your
          </p>
          <p className="font-[500] text-3xl sm:text-4xl md:text-[56px]">
            {" "}
            unique business needs
          </p>
        </div>

        <div className="text-center mt-10 sm:mt-20 sm:space-y-3">
          <p className="font-[500] sm:text-[18px] text-xs">
            We unite Business-Driven + User-Centered UX
          </p>

          <p className="font-[500] sm:text-[18px] text-xs">
            processwhile creating the product design tocover
          </p>
          <p className="font-[500] sm:text-[18px] text-xs">
            business goals and user`s needs.
          </p>
        </div>

        <div className="mt-10 sm:mt-28 gap-5 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 border-t-[1px] ">
          <div className="text-center md:border-r border-gray-300 sm:h-[36vh]">
            <p className="mt-5 text-lg font-[600] opacity-[50%]">STAGE 1 </p>
            <div className="flex justify-center">
              <div>
                <button className="mt-8 md:mt-12 block rounded-full bg-[#a45c6e] w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px] ">
                  Product Discovery
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px] ">
                  Briefing & onboarding
                </button>
                <button className="mt-1 block border border-gray-30 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px] ">
                  Stakeholder interviews
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px] ">
                  Market research
                </button>
              </div>
            </div>
          </div>
          <div className="text-center md:border-r border-gray-300 sm:h-[36vh]">
            {" "}
            <div className="flex justify-center">
              <div>
                <p className="mt-5 text-lg font-[600] opacity-[50%]">
                  STAGE 2{" "}
                </p>
                <button className="mt-8 sm:mt-10 lg:mt-24 block rounded-full bg-[#a45c6e] w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px]">
                  Competitive Analysis
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px]">
                  Competitor’s research
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 lg:h-10 text-[13px]">
                  Competitor’s matrix anaysis
                </button>
              </div>
            </div>
          </div>
          <div className="text-center md:border-r border-gray-300 sm:h-[36vh]">
            {" "}
            <div className="flex justify-center">
              <div>
                <p className="mt-5 text-lg font-[600] opacity-[50%]">
                  STAGE 3{" "}
                </p>
                <button className="lg:mt-36 mt-10 block rounded-full bg-[#a45c6e] w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 lg:h-10 text-[13px]">
                  TA Research & User interviews
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px]">
                  Creating user personas
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px]">
                  User Interview
                </button>
              </div>
            </div>
          </div>

          <div className="text-center md:border-r border-gray-300 sm:h-[36vh]">
            <div className="flex justify-center">
              <div>
                <p className="lg:mt-5 md:mt-10 text-lg font-[600] opacity-[50%]">
                  STAGE 4{" "}
                </p>
                <button className="lg:mt-48 mt-10 block rounded-full bg-[#a45c6e] w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 md:h-10 text-[13px]">
                  Informational Architecture
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 md:w-48 sm:w-60 lg:w-[15vw] h-8 text-[13px]">
                  App flow
                </button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <div>
                <p className="mt-10 lg:mt-5 md:mt-10 text-lg font-[600] opacity-[50%]">
                  STAGE 5{" "}
                </p>
                <button className="lg:mt-60 mt-10 block rounded-full bg-[#a45c6e] w-56 sm:w-60 lg:w-[15vw] h-8 text-[13px]">
                  Product Roadmap
                </button>
                <button className="mt-1 block border border-gray-300 rounded-full w-56 sm:w-60 lg:w-[15vw] h-8 lg:h-10 text-[13px]">
                  Control the design implementation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <img src="/OtherPages/UiUxDesignimg/bussiness.svg" alt="" />
        </div>

        <div className="mt-28">
          <p className="font-[500] lg:text-[56px] text-center md:text-5xl sm:text-4xl text-3xl">
            We get things done with quality
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/OtherPages/Researchimg/done-01.svg"
                alt=""
                className="w-20 md:w-28"
              />
              <p className="md:text-2xl lg:text-[22px] font-[500]">
                Flexible collaboration & fixed monthly rate
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/OtherPages/Researchimg/done-02.svg"
                alt=""
                className="w-20 md:w-28"
              />
              <p className="md:text-2xl lg:text-[22px] font-[500]">
                Guaranteed on-time deliverables
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/OtherPages/Researchimg/done-03.svg"
                alt=""
                className="w-20 md:w-28"
              />
              <p className="md:text-2xl lg:text-[22px] font-[500]">
                Hiring system with immediate start
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/OtherPages/Researchimg/done-04.svg"
                alt=""
                className="w-20 md:w-28"
              />
              <p className="md:text-2xl lg:text-[22px] font-[500]">
                Work directly with the designer
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="font-[500] text-2xl sm:text-4xl md:text-5xl lg:text-[56px]">
            Turning projects into trusting
          </p>
          <p className="font-[500] text-2xl sm:text-4xl md:text-5xl lg:text-[56px]">
            partnerships
          </p>
        </div>

        <div className="mt-10">
          <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2">
            {/* Repeat this block for each customer logo */}
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-1.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-2.svg"
                alt=""
                className="customer-companies  lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-3.svg"
                alt=""
                className="customer-companies  lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-4.svg"
                alt=""
                className="customer-companies  lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-5.svg"
                alt=""
                className="customer-companies  lg:w-[8vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-6.svg"
                alt=""
                className="customer-companie lg:w-[8vw] w-20"
              />
            </div>
          </div>
          <div className="mt-5 grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2">
            {/* Repeat this block for each customer logo */}
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-7.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-8.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-9.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-10.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-11.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-12.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
          </div>
          <div className="mt-5 grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2">
            {/* Repeat this block for each customer logo */}
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-13.svg"
                alt=""
                className="customer-companies  lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-14.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-15.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-16.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-17.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/OtherPages/Researchimg/partner-logo-18.svg"
                alt=""
                className="customer-companies lg:w-[12vw] w-20"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32">
          <p className="font-[500] text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            FAQ on Product Discovery service
          </p>
        </div>

        <div className="sm:my-20 my-10">
          <details className="pl-5 p-1 bg-[#A45C6E] rounded-xl lg:rounded-2xl my-3"
          >
            <summary className=" font-[500] lg:text-2xl lg:h-16 md:text-lg md:h-14 sm:text-lg sm:h-10 content-center text-sm h-8 flex items-center gap-1 sm:gap-2 lg:gap-5 lg:ml-3">
               <svg
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 lg:h-10"
              >
                <path
                  d="M2.02539 23.9347L13.273 12.687L2.02539 1.43945"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-width="2.42424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            What is product discovery services?{" "}
            </summary>
            {/* <p className=" font-[500] lg:text-[26px] pl-8 md:text-[4vmin] sm:text-[3vmin] text-[2vmin] ">
              Ans this questions
            </p> */}
          </details>
          <details className="pl-5 p-1 bg-[#A45C6E] rounded-xl lg:rounded-2xl my-3"
          >
            <summary className=" font-[500] lg:text-2xl lg:h-16 md:text-lg md:h-14 sm:text-lg sm:h-10 content-center text-sm h-8 flex items-center gap-1 sm:gap-2 lg:gap-5 lg:ml-3">
               <svg
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 lg:h-10"
              >
                <path
                  d="M2.02539 23.9347L13.273 12.687L2.02539 1.43945"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-width="2.42424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            Why is product discovery crucial for my project?{" "}
            </summary>
            {/* <p className=" font-[500] lg:text-[26px] md:text-[4vmin] sm:text-[3vmin] text-[2vmin]">
              Ans this questions
            </p> */}
          </details>
          <details className="pl-5 p-1 bg-[#A45C6E] rounded-xl lg:rounded-2xl my-3"
          >
            <summary className=" font-[500] lg:text-2xl lg:h-16 md:text-lg md:h-14 sm:text-lg sm:h-10 content-center text-sm h-8 flex items-center gap-1 sm:gap-2 lg:gap-5 lg:ml-3">
               <svg
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 lg:h-10"
              >
                <path
                  d="M2.02539 23.9347L13.273 12.687L2.02539 1.43945"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-width="2.42424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            What are the main discovery phase benefits?{" "}
            </summary>
            {/* <p className=" font-[500] lg:text-[26px] md:text-[4vmin] sm:text-[3vmin] text-[2vmin]">
              Ans this questions
            </p> */}
          </details>
          <details className="pl-5 p-1 bg-[#A45C6E] rounded-xl lg:rounded-2xl my-3"
          >
            <summary className=" font-[500] lg:text-2xl lg:h-16 md:text-lg md:h-14 sm:text-lg sm:h-10 content-center text-sm h-8 flex items-center gap-1 sm:gap-2 lg:gap-5 lg:ml-3">
               <svg
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 lg:h-10"
              >
                <path
                  d="M2.02539 23.9347L13.273 12.687L2.02539 1.43945"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-width="2.42424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            How much does the product discovery cost?{" "}
            </summary>
            {/* <p className=" font-[500] lg:text-[26px] md:text-[4vmin] sm:text-[3vmin] text-[2vmin]">
              Ans this questions
            </p> */}
          </details>
          <details className="pl-5 p-1 bg-[#A45C6E] rounded-xl lg:rounded-2xl my-3"
          >
            <summary className=" font-[500] lg:text-2xl lg:h-16 md:text-lg md:h-14 sm:text-lg sm:h-10 content-center text-sm h-8 flex items-center gap-1 sm:gap-2 lg:gap-5 lg:ml-3">
               <svg
                width="15"
                height="26"
                viewBox="0 0 15 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 lg:h-10"
              >
                <path
                  d="M2.02539 23.9347L13.273 12.687L2.02539 1.43945"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-width="2.42424"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            What is the timeline for product discovery process?{" "}
            </summary>
            {/* <p className=" font-[500] lg:text-[26px] md:text-[4vmin] sm:text-[3vmin] text-[2vmin]">
              Ans this questions
            </p> */}
          </details>
        </div>

        <div className="mt-10 flex justify-between items-center flex-wrap">
          <p className="font-[200] lg:text-[24px] ">
            Get in touch with us for a chat! <br /> We respond to all enquiries
            within two business days.
          </p>
          <button className="btn-animate-white block border border-white rounded-full mt-8 lg:mt-0 px-4 py-2  md:w-[150px] md:h-[49px] md:text-[20px] font-[200]">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>

        <div className="my-20 md:my-40">
          <div className="lg:text-[70px] lg:font-[600] text-2xl sm:text-3xl md:text-4xl">
            <Link to="/development">Next Service</Link>
            <span className={` inline-block align-middle`}>
              <hr className="w-8 sm:w-6 mx-3 h-1 md:w-36 " />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UiUxDesign;
