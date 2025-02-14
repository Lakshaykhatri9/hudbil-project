import { useState } from "react";
import MainImg from "../components/mainImg/MainImg";
import Footer from "../components/Footer/footer";

function OurWork() {
  // Customer Section Data
  const customerData = [
    {
      id: 1,
      img: "/customer love section/01.svg",
      h3: "“Working with the Hudbil team has been a great experience, they often came up with lean and creative solutions to meet our business challenges and requirements that we threw at them, very creative in terms of the design and clean development skills”",
      h6_1: "MR. DAVID MANSON",
      h6_2: "OWNER OF THE BLUEMAIL",
    },
    {
      id: 2,
      img: "/customer love section/02.svg",
      h3: "“We partnered with Hudbil to design our website. We found them incredibly helpful and patient as we really didn't know what we wanted. We ended up with a website we loved. I would definitely recommend Hudbil Private Limited - you won't be disappointed.”",
      h6_1: "MR. PRADEEP GUPTA",
      h6_2: "OWNER OF THE MONSTRACK",
    },
    {
      id: 3,
      img: "/customer love section/03.svg",
      h3: "“The team at Hudbil are enthusiastic, friendly and great to work with. They really listened to our needs and came up with a design which encapsulates exactly the spirit and personality of the organisation, whilst still remaining practical and user-friendly”",
      h6_1: "MS. MOHAN SINA",
      h6_2: "MANAGER OF THE FINOSOFT",
    },
    {
      id: 4,
      img: "/customer love section/04.svg",
      h3: "“Hudbil creative team provided the most prompt quote of three requested for website design, communicated well during the project, and provided a well-designed website with an easy to use content management system. their branding skills is international level.”",
      h6_1: "MR. DAVID DAVIES",
      h6_2: "MD OF THE VALLEYCOVERS",
    },
    {
      id: 5,
      img: "/customer love section/05.svg",
      h3: "“We are extremely happy with the website that Hudbil have created for us. It is visually appealing, clean, easy to navigate and responsive – everything we asked for. The CMS is intuitive and user friendly. We would definitely recommend Hudbil Studios to others.”",
      h6_1: "MR.PRATAP KUMAR",
      h6_2: "OWNER OF THE CAPIXAI",
    },
    {
      id: 6,
      img: "/customer love section/06.svg",
      h3: "“We enjoyed working with Hudbil team on our new website. The team had lots of ideas to make the website look great, as well as practical advice to ensure the site is both user-friendly and SEO-friendly. Everyone is delighted with the end result. ”",
      h6_1: "MR.SUSAN WEISS",
      h6_2: "OWNER OF THE NETTANGO",
    },
    {
      id: 7,
      img: "/customer love section/07.svg",
      h3: "“The team at Hudbil are very great and worked on our platforms, with great efforts. They really listened to our needs and came up with  great design which encapsulates exactly the spirit our organisation, whilst still remaining practical and user-friendly”",
      h6_1: "MR.CRAIG MITCHEL",
      h6_2: "MD OF THE LMG TOURING",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(customerData.slice(0, 3));

  const handleCustomerForward = () => {
    const newIndex = currentIndex + 1;
    const newVisibleItems = customerData.slice(newIndex, newIndex + 3);
    setCurrentIndex(newIndex);
    setVisibleItems(newVisibleItems);
  };

  const handleCustomerBackward = () => {
    const newIndex = currentIndex - 1;
    const newVisibleItems = customerData.slice(newIndex, newIndex + 3);
    setCurrentIndex(newIndex);
    setVisibleItems(newVisibleItems);
  };
  // Form Validation
  const [findUsValue, setFindUsValue] = useState("");

  const handleFindUsChange = (event) => {
    setFindUsValue(event.target.value);
  };

  const isFormValid = () => {
    return findUsValue !== "" && console.log("isFormValid");
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      // Handle form submission
      console.log("Form submitted successfully");
    } else {
      console.log("Please enter the valide details");
    }
  };
  return (
    <div>
      <MainImg
        imgurl="/OtherPages/OurWorkimg/main.svg"
        navbgcolor="bg-red-500"
        title="Our works"
        description="We're a visionary creative design/development powerhouse, employing scalable and futuristic solutions to transform innovative business ideas into extraordinary realities. "
        textColorLiHover="text-red-950"
        logohudbilleaf="/Navbarimg/hudbilleaflogo-white.svg"
        contentNav="Wire-framing & prototyping allow us to visualise, test the concepts early, ensuring a practical and user-friendly design before development."
      />
      <div className="bg-[#252628] p-2 lg:p-[100px]">
        <p className="mt-[65px] text-center font-[400] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[18px]">
          We&#39;ve helped lots of Startups, technology SMEs, and Fortune 500
          companies to reach success, grow and cover business goals. Let&#39;s
          make your project the next big thing.
        </p>

        <div className="flex justify-center gap-5 flex-wrap mt-20 font-thin">
          <button className="btn-animate-white border border-white rounded-full lg:w-[141px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[25vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            All Projects
          </button>
          <button className="btn-animate-white border border-white rounded-full lg:w-[155px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[25vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            UI/UX Projects
          </button>
          <button className="btn-animate-white border border-white rounded-full lg:w-[185px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[30vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            Websites Projects
          </button>
          <button className="btn-animate-white border border-white rounded-full lg:w-[173px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[25vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            App Projects
          </button>
          <button className="btn-animate-white border border-white rounded-full lg:w-[173px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[25vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            App Projects
          </button>
        </div>
        <div className="flex justify-center flex-wrap gap-5 mt-10">
          <button className="btn-animate-white border border-white rounded-full lg:w-[150px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[25vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            UI/UX Projects
          </button>
          <button className="btn-animate-white border border-white rounded-full lg:w-[185px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[25vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            Websites Projects
          </button>
          <button className="btn-animate-white border border-white rounded-full lg:w-[185px] lg:h-[49px] font-[200] lg:text-[20px] md:w-[25vmin] md:h-[8vmin] md:text-[3vmin] sm:w-[20vmin] sm:h-[6vmin] sm:text-[2vmin] w-36 h-10 text-xs">
            App Projects
          </button>
        </div>

        {/* img section */}
        <div className="mt-36">
          <div className="flex justify-center md:gap-24 gap-10 ">
            <div className="">
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
            <div>
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
          </div>
          {/* repeated block */}
          <div className="flex justify-center md:gap-24 gap-10 mt-20">
            <div>
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
            <div>
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
          </div>
          {/* repeated block */}
          <div className="flex justify-center md:gap-24 gap-10 mt-20">
            <div>
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
            <div>
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
          </div>
          {/* repeated block */}
          <div className="flex justify-center md:gap-24 gap-10 mt-20">
            <div>
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
            <div>
              <img src="/OtherPages/OurWorkimg/Project 01.svg" alt="" />
              <h3 className="flex items-center mt-3 font-[600] lg:text-3xl md:text-2xl sm:text-lg text-sm">
                <hr className="w-3 sm:w-6 mx-3 " /> PROJECT NAME
              </h3>
              <p className="font-[200] pl-8 md:pl-12 mt-3 lg:text-xl lg:w-[30vw] sm:text-sm text-xs">
                Our extensive research helps us understand exactly what your
                audiences are looking for, and our process accountability helps
                us offer UX Solutions as a core service in the studio.
              </p>
              <p className="font-600 pl-8 md:pl-12 mt-10 lg:text-2xl md:text-xl sm:text-sm text-xs">
                UNITED KINGDOM - 2023
              </p>
            </div>
          </div>
        </div>
        {/* Customer Love  */}

        <div>
          <div className="mt-10 md:mt-28">
            <div className="mt-2 lg:mr-2 flex justify-between items-center h-[60px]">
              <h1 className="text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                Customers love
              </h1>
              <div className="flex justify-between gap-2 items-center">
                <button
                  onClick={handleCustomerBackward}
                  disabled={currentIndex === 0}
                  type="button"
                  title="left-arrow"
                  id="left-arrow-customer"
                >
                  <svg
                    width="48"
                    height="25"
                    viewBox="0 0 48 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="nav-svg"
                  >
                    <rect
                      x="0.5"
                      y="0.556152"
                      width="47"
                      height="23"
                      rx="11.5"
                      stroke="white"
                      className="background-animation"
                    />
                    <g
                      clipPath="url(#clip0_5267_354)"
                      className="left-arrow-animation"
                    >
                      <g clipPath="url(#clip1_5267_354)">
                        <path
                          d="M23.1992 8.05615L19.1992 12.0562M19.1992 12.0562L23.1992 16.0562M19.1992 12.0562H28.7992"
                          stroke="white"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_5267_354">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(16 4.05615)"
                        />
                      </clipPath>
                      <clipPath id="clip1_5267_354">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(16 4.05615)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  onClick={handleCustomerForward}
                  disabled={currentIndex + 3 >= customerData.length}
                  type="button"
                  title="right-arrow"
                  id="right-arrow-customer"
                >
                  <svg
                    width="48"
                    height="25"
                    viewBox="0 0 48 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="nav-svg"
                  >
                    <rect
                      x="0.5"
                      y="0.556152"
                      width="47"
                      height="23"
                      rx="11.5"
                      stroke="white"
                      className="background-animation"
                    />
                    <g
                      clipPath="url(#clip0_5267_360)"
                      className="right-arrow-animation"
                    >
                      <g clipPath="url(#clip1_5267_360)">
                        <path
                          d="M24.7992 8.05615L28.7992 12.0562M28.7992 12.0562L24.7992 16.0562M28.7992 12.0562H19.1992"
                          stroke="white"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_5267_360">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(16 4.05615)"
                        />
                      </clipPath>
                      <clipPath id="clip1_5267_360">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(16 4.05615)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div
              className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-12 items-baseline"
              id="customer-grid"
            >
              {visibleItems.map((item, index) => (
                <div key={index} className="mt-10">
                  <img src={item.img} alt="" />
                  <h3 className="mt-4 md:mt-8 lg:mt-16 text-sm md:text-base lg:text-xl md:h-[250px] ">
                    {item.h3}
                  </h3>
                  <h6 className="mt-2 text-xs lg:text-sm">{item.h6_1}</h6>
                  <h6 className="text-xs lg:text-sm">{item.h6_2}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="mt-10 flex flex-wrap">
          <div>
            <h3 className="lg:text-[48px] lg:w-[100vmin] lg:h-[30vmin] sm:text-[2rem] text-[1.5rem]">
              Want to stand out from the crowd with a brillant website ?
            </h3>
            <h5 className="lg:text-[24px] font-[200] lg:w-[80vmin] lg:h-[30vmin] mt-10">
              Get in touch with us for a chat! <br /> We respond to all
              enquiries within two business days.
            </h5>
          </div>
          <div className="mt-5 md:flex">
            <div className=" text-xl font-thin md:w-1/2"></div>

            <div className="-my-1">
              <form onSubmit={handleFormSubmit}>
                <div>
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      className="lg:text-[32px] font-[200] md:text-[20px]"
                    >
                      What&#39;s your full name
                    </label>
                  </div>
                  <div className="border-b lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                    {" "}
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="bg-[#252628] lg:text-[22px] font-[200] py-2 placeholder:text-white w-full outline-none"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      className="  lg:text-[32px] font-[200] md:text-[20px]"
                    >
                      What&#39;s your email address ?
                    </label>
                  </div>
                  <div className="border-b lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                    {" "}
                    <input
                      type="email"
                      placeholder="Your Email "
                      className="bg-[#252628] lg:text-[22px] font-thin py-2 placeholder:text-white w-full outline-none"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <div>
                    {" "}
                    <label htmlFor="" className="text-[32px] font-thin">
                      {" "}
                      How you find us?
                    </label>{" "}
                  </div>

                  <div className="py-5">
                    {" "}
                    {/* first row */}
                    <div className="pb-5 flex justify-between items-center">
                      {" "}
                      <div>
                        <input
                          type="radio"
                          id="word-of-mouth"
                          name="find-us"
                          value="word-of-mouth"
                          checked={findUsValue === "word-of-mouth"}
                          onChange={handleFindUsChange}
                          className="hidden"
                        />
                        <label htmlFor="word-of-mouth">
                          {" "}
                          <button
                            type="button"
                            className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 ${
                              findUsValue === "word-of-mouth"
                                ? "bg-gray-500"
                                : "border-white text-white"
                            }`}
                            onClick={() => setFindUsValue("word-of-mouth")}
                          >
                            Word of mouth
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="google-search"
                          name="find-us"
                          value="google-search"
                          checked={findUsValue === "google-search"}
                          onChange={handleFindUsChange}
                          className="hidden"
                        />
                        <label htmlFor="google-search">
                          {" "}
                          <button
                            type="button"
                            className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 ${
                              findUsValue === "google-search"
                                ? "bg-gray-500"
                                : "border-white text-white"
                            }`}
                            onClick={() => setFindUsValue("google-search")}
                          >
                            {" "}
                            Google search
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id=" Google-adwords"
                          name="find-us"
                          value=" Google-adwords"
                          checked={findUsValue === "Google-adwords"}
                          onChange={handleFindUsChange}
                          className="hidden"
                        />
                        <label htmlFor=" Google-adwords">
                          {" "}
                          <button
                            type="button"
                            className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 ${
                              findUsValue === "google-adwords"
                                ? "bg-gray-500"
                                : "border-white text-white"
                            }`}
                            onClick={() => setFindUsValue("google-adwords")}
                          >
                            {" "}
                            Google adwords
                          </button>
                        </label>
                      </div>
                    </div>
                    {/* Second Row */}
                    <div className="flex mb-5 justify-between items-center gap-2">
                      {" "}
                      <div>
                        <input
                          type="radio"
                          id="social-media"
                          name="find-us"
                          value="social-media"
                          checked={findUsValue === "social-media"}
                          onChange={handleFindUsChange}
                          className="hidden"
                        />
                        <label htmlFor="social-media">
                          {" "}
                          <button
                            type="button"
                            className={`btn-animate-white  border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 ${
                              findUsValue === "social-media"
                                ? "bg-gray-500"
                                : "border-white text-white"
                            }`}
                            onClick={() => setFindUsValue("social-media")}
                          >
                            {" "}
                            social media
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="client-reference"
                          name="find-us"
                          value="client-reference"
                          checked={findUsValue === "client-reference"}
                          onChange={handleFindUsChange}
                          className="hidden"
                        />
                        <label htmlFor="client-reference">
                          {" "}
                          <button
                            type="button"
                            className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 ${
                              findUsValue === "client-reference"
                                ? "bg-gray-500"
                                : "border-white text-white"
                            }`}
                            onClick={() => setFindUsValue("client-reference")}
                          >
                            {" "}
                            client reference
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="website"
                          name="find-us"
                          value="website"
                          checked={findUsValue === "website"}
                          onChange={handleFindUsChange}
                          className="hidden"
                        />
                        <label htmlFor="website">
                          {" "}
                          <button
                            type="button"
                            className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[119px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 mr-14 ${
                              findUsValue === "website"
                                ? "bg-gray-500"
                                : "border-white text-white"
                            }`}
                            onClick={() => setFindUsValue("website")}
                          >
                            {" "}
                            website
                          </button>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    {" "}
                    <label htmlFor="" className="text-[32px] font-[200]">
                      Your Message
                    </label>
                  </div>
                  <div className="border-b lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                    {" "}
                    <input
                      type="text"
                      placeholder="Hi there"
                      className="bg-[#252628] w-full text-[22px] font-[200] placeholder:text-white outline-none"
                    />
                  </div>
                </div>

                <div className="mt-16">
                  <button className="btn-animate-white border border-white rounded-full text-sm px-1 py-2 w-24 md:text-lg">
                    {" "}
                    <input type="submit" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#252628]">
        <Footer bginput="bg-[#252628]" />
      </div>
    </div>
  );
}

export default OurWork;
