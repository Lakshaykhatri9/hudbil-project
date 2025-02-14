import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import classNames from "classnames";

const DotContainer = ({ index, currentIndex, handleDotClick }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [debouncedPos, setDebouncedPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const dotBorderRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedPos(cursorPos);
    }, 20);

    return () => {
      clearTimeout(handler);
    };
  }, [cursorPos]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    if (currentIndex === index && dotBorderRef.current) {
      gsap.to(dotBorderRef.current, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "linear",
        repeat: 0,
        repeatDelay: 1,
      });
    } else {
      gsap.to(dotBorderRef.current, {
        strokeDashoffset: 47.1,
        duration: 0,
      });
    }
  }, [currentIndex, index]);

  return (
    <div
      className="dot-container w-12 h-12 cursor-effect cursor-pointer flex items-center justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleDotClick(index)}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
        <circle
          ref={dotBorderRef}
          strokeDasharray="47.1"
          strokeDashoffset="47.1"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className={`dot-border ${
            currentIndex === index ? "block" : "hidden"
          }`}
          cx="8"
          cy="8"
          r="7.5"
        />
        <circle className="dot" cx="8" cy="8" r="4" fill="white" />
      </svg>
    </div>
  );
};

function MainMenu(props) {
  const { images, route, title, description, button } = props;
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleImageClick = (index) => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(index);
  //   }
  //   setCurrentIndex(index);
  // };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    setCurrentIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    ref: sliderRef,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1, // show 2 slides on tablet screens
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2, // show 4 slides on large screens and above
        },
      },
    ],
  };

  return (
    <div>
      <div className="p-5 md:p-10 lg:px-[100px]">
        <h3 className="text-2xl md:text-[40px] lg:text-4xl font-[600]">
          <Link to={`${route}`}>{title}</Link>
        </h3>
        <div className="md:flex md:justify-between md:my-8 mt-2">
          <p className="text-xs md:text-xl lg:text-[28px] lg:leading-[42px] md:w-8/12 font-[400] ">
            {description}
          </p>
          <div className="md:w-4/12 md:flex md:justify-end md:items-start mt-2">
            <button className="font-[200] text-[20px] md:text-[15px] border border-white-500 text-white text-xs md:text-xl py-1 px-2 lg:py-2 lg:px-4 bg-transparent rounded-full">
              <Link to={`${route}`}>{button}</Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="overflow-hidden">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={classNames(
                    "py-2 md:py-0 px-4 transition-all duration-500 ease-in-out",
                    {
                      "slide-small": index % 2 === 0,
                      "slide-large": index % 2 !== 0,
                      "highlighted-slide":
                        (currentIndex + 1) % images.length === index,
                      "slick-slide":
                        (currentIndex + 1) % images.length === index,
                    }
                  )}
                >
                  <Link to={`${image.routepath}`}>
                    <img src={image.src} alt={image.alt} className="w-full" />
                  </Link>
                  <div className="my-3 md:my-5 flex items-center justify-between px-2 md:px-0">
                    <hr className="w-36 md:w-8 lg:w-16 xl:w-24" />
                    {image.content && (
                      <h6 className="text-sm md:text-lg lg:text-[20px] font-[600]">
                        {image.content}
                      </h6>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-10 pb-4">
        <div className="flex justify-between items-center">
          <button className="prev cursor-effect" onClick={handlePrevClick}>
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
                clipPath="url(#clip0_4604_30986)"
                className="left-arrow-animation"
              >
                <g clipPath="url(#clip1_4604_30986)">
                  <path
                    d="M23.1992 8L19.1992 12M19.1992 12L23.1992 16M19.1992 12H28.7992"
                    stroke="white"
                    strokeLinecap="square"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_4604_30986">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(16 4)"
                  />
                </clipPath>
                <clipPath id="clip1_4604_30986">
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
          <div className="hidden lg:flex cursor-pointer cursor-effect">
            {images.map((_, index) => (
              <DotContainer
                key={index}
                index={index}
                currentIndex={currentIndex}
                handleDotClick={handleDotClick}
              />
            ))}
          </div>
          <button className="next cursor-effect" onClick={handleNextClick}>
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
                clipPath="url(#clip0_4604_30986)"
                className="right-arrow-animation"
              >
                <g clipPath="url(#clip1_4604_30986)">
                  <path
                    d="M24.1992 8L28.1992 12M28.1992 12L24.1992 16M28.1992 12H18.5992"
                    stroke="white"
                    strokeLinecap="square"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_4604_30986">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(16 4)"
                  />
                </clipPath>
                <clipPath id="clip1_4604_30986">
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
  );
}

MainMenu.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      content: PropTypes.string,
      routepath: PropTypes.string.isRequired,
    })
  ).isRequired,
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default MainMenu;
