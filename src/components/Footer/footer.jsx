import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = (props) => {
  const { textColor, bginput, btnborder, hudbilimg, btnanimate, linesvgcolor } =
    props;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const iconRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    iconRefs.current.forEach((icon) => {
      if (icon) icon.style.transform = "translate(0, 0)";
    });
  };

  const handleMouseMove = (event, index) => {
    if (index === hoveredIndex) {
      const { clientX, clientY } = event;
      const icon = iconRefs.current[index];
      const rect = icon.getBoundingClientRect();
      const radius = 50;
      const xOffset = clientX - (rect.left + rect.width / 2);
      const yOffset = clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(xOffset ** 2 + yOffset ** 2);

      if (distance < radius) {
        icon.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      } else {
        const scale = radius / distance;
        icon.style.transform = `translate(${xOffset * scale}px, ${
          yOffset * scale
        }px)`;
      }
    }
  };

  const links = [
    { href: "#", text: "Fb" },
    { href: "#", text: "Li" },
    { href: "#", text: "lg" },
    { href: "#", text: "Tw" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".footer-container",
      { y: 0, opacity: 0 },
      {
        y: 88,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
    
  }, []);

  return (
    <footer
      className={` ${bginput} footer-container  p-3 md:p-5  lg:px-[100px] lg:pt-0 `}
    >
      <div>
        <h1
          className={`${textColor} text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl`}
        >
          Let&apos;s connect
        </h1>
        <h1
          className={`${textColor} text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl`}
        >
          and collaborate
          <span className={`${btnborder} inline-block align-middle`}>
            <svg
              width="159"
              height="2"
              viewBox="0 0 159 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3 w-[50px] sm:w-[200px]"
            >
              <rect width="159" height="2" fill={`${linesvgcolor}`} />
              <rect width="159" height="2" fill={`${linesvgcolor}`} />
            </svg>
          </span>
        </h1>
      </div>

      <div className="lg:flex lg:items-center lg:justify-between md:gap-6 md:my-10">
        <div className="mt-5 md:mt-0">
          {" "}
          <button
            type="button"
            title="start-btn"
            className={` ${textColor} ${btnborder} ${btnanimate} str-project block border rounded-full w-[176px] h-[49px] text-[19px] my-10 lg:my-0`}
          >
            Start a Project
          </button>
        </div>
        <div className="mt-5 md:mt-0 my-10 lg:my-0">
          <div className={`${textColor} md:text-sm lg:text-[18px] w-[196px]`}>
            JOIN THE NEWS LETTER
          </div>
        </div>

        <div className="mt-5 md:mt-0 relative my-10 lg:my-0">
          <input
            type="email"
            name="email"
            placeholder="Insert your email address"
            id="contact-email"
            autoComplete="off"
            className={`text-thin ${bginput} w-full ${btnborder} border-b-2 hover:${bginput} hover: ${textColor} md:pr-10 lg:w-[23vw] placeholder:${textColor} placeholder:font-thin outline-none placeholder:text-xs placeholder:sm:text-xl placeholder:opacity-50`}
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <i
              className={` ${textColor} fa-solid fa-arrow-right opacity-50 `}
            ></i>
          </span>
        </div>

        <div className="mt-5 md:mt-0 lg:-mt-24">
          <img
            src={hudbilimg}
            alt=""
            className="overflow-hidden w-[228x] h-[220px]"
          />
        </div>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center md:gap-4 lg:gap-8">
        <div>
          <div className="my-5 md:my-0">
            <div>
              <h3 className={`${textColor} text-[13px]`}>EMAIL US AT</h3>
              <h3 className={`${textColor} text-[17px]`}>info@hudbil.com</h3>
            </div>

            <div className="my-17 md:my-0 md:mt-5 lg:mt-10">
              <h3 className={`${textColor} text-[13px]`}>CALL US ON</h3>
              <h3 className={`${textColor} text-[15px]`}>+91 88 00 22 1006</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5 md:my-0">
            <div>
              <h5 className={`${textColor} text-[13px]`}>
                DROP BY AT BANGALORE OFFICE
              </h5>
            </div>

            <div className="my-1 md:my-0 md:mt-4">
              <h5 className={`lg:text-[18px] lg:leading-6 ${textColor}`}>
                No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage, Indiranagar
                Hoysala Nagar, Bangalore - 560038.
              </h5>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div>
          <div className="my-5 md:my-0">
            <div>
              <h5 className={`${textColor} text-[13px]`}>
                DROP BY AT MUMBAI OFFICE
              </h5>
            </div>

            <div className="my-1 md:my-0 md:mt-4">
              <h5 className={`lg:text-[18px] lg:leading-6 ${textColor}`}>
                74/II, “C” Cross Road, Opp Gate No 2, MIDC - 400093, Seepz,
                Andheri East, Mumbai, Maharashtra.
              </h5>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5 md:my-0">
            <div>
              <h5 className={`${textColor} text-[13px]`}>
                DROP BY AT DELHI OFFICE
              </h5>
            </div>

            <div className="my-1 md:my-0 md:mt-4">
              <h5 className={`lg:text-[18px] lg:leading-6 ${textColor}`}>
                90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram,
                Sarhol, Haryana - 122008.
              </h5>
            </div>
          </div>
        </div>

        <div>
          <div className="my-5 md:my-0">
            <div>
              <h5 className={`${textColor} text-[13px]`}>
                DROP BY AT CHANDIGARH OFFICE
              </h5>
            </div>

            <div className="my-1 md:my-0 md:mt-4">
              <h5 className={`lg:text-[18px] lg:leading-6 ${textColor}`}>
                Ground Floor, C-205, Phase 8B, Sector 74, Sahibzada Ajit Singh
                Nagar, Punjab 140308 .
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-8 md:text-left md:flex md:justify-between md:items-center md:gap-4 lg:gap-16">
        <h5 className={`font-[800] text-[13px] ${textColor}`}>
          &copy; 2024 Hudbil Private Limited. All rights reserved &nbsp; &nbsp;
          <Link to="/privacypolice">Privacy Policy</Link> &nbsp;| &nbsp;{" "}
          <Link to="/termsofservices">Terms & Conditions</Link> &nbsp;| &nbsp;{" "}
          <Link to="/cookiespolicy">Cookies Policies</Link>
        </h5>
        {/* Desktop */}
        <div className="md:flex md:gap-2 lg:gap-4">
          <button
            type="button"
            className={`footer-btn  hidden md:block border rounded-full ${btnborder} ${textColor} ${btnanimate}`}
          >
            Get in Touch
          </button>
          <button
            type="button"
            className={`footer-btn  hidden md:block border rounded-full ${btnborder} ${textColor} ${btnanimate}`}
          >
            <Link to="/chat"> Chat with Ella</Link>
          </button>
          <div
            className={`footer-btn-icons hidden border ${btnborder}  md:flex items-center justify-between gap-1 px-4 rounded-full`}
          >
            {links.map((link, index) => (
              <div
                key={index}
                ref={(el) => (iconRefs.current[index] = el)}
                className="footer-icon cursor-none"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(event) => handleMouseMove(event, index)}
              >
                <a
                  className={`scale-100 cursor-none opacity-75 hover:scale-150 hover:opacity-100 ${textColor}  `}
                  href={link.href}
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  textColor: PropTypes.string,
  bginput: PropTypes.string,
  btnborder: PropTypes.string,
  hudbilimg: PropTypes.string,
  btnanimate: PropTypes.string,
  linesvgcolor: PropTypes.string,
};
Footer.defaultProps = {
  textColor: "text-white",
  bginput: "bg-black",
  linesvgcolor: "white",
  hudbilimg: "/images/footer-logo.svg",
  btnanimate: "btn-animate-white",
};

export default Footer;
