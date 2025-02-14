import { useState } from "react";
import { Link } from "react-router-dom";
import MainImg from "../components/mainImg/MainImg";
import Footer from "../components/Footer/footer";

function OurAboutus() {
  const slides = [
    {
      id: "01",
      title: "We take Ownership",
      description:
        "Whether you need to design or development your first MVP to get funding, redesign your product to improve business metrics, or get a remote design/branding team to grow faster - our product engineers are here to help you.",
    },
    {
      id: "02",
      title: "We do the right things ",
      description:
        "We offer a wealth of knowledge in dealing with the planning process for commercial projects. We offer support in preparing and submitting planning applications, as well as advising on the necessary, specialist input to support your project.",
    },
    {
      id: "03",
      title: "We aim high ",
      description:
        "We specialise in guiding clients through the planning process for their agricultural plans. Our services include site appraisals to identify development opportunities through to a comprehensive consulting service to prepare, submit and manage any rural planning projects.",
    },
    {
      id: "04",
      title: "We listen ",
      description:
        "We are highly experienced in dealing with historic buildings and sites, and are committed to preserving the character and integrity of these important assets. Whether your project is a listed building, or develop a site that is of historical significance.Our team can handle it.",
    },
    // Add more slides as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(slides.slice(0, 2));

  const handleForward = () => {
    const newIndex = currentIndex + 1;
    const newVisibleItems = slides.slice(newIndex, newIndex + 2);
    setCurrentIndex(newIndex);
    setVisibleItems(newVisibleItems);
  };

  const handleBackward = () => {
    const newIndex = currentIndex - 1;
    const newVisibleItems = slides.slice(newIndex, newIndex + 2);
    setCurrentIndex(newIndex);
    setVisibleItems(newVisibleItems);
  };
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

  const [visibleItemsC, setVisibleItemsC] = useState(customerData.slice(0, 3));

  const handleCustomerForward = () => {
    const newIndex = currentIndex + 1;
    const newVisibleItemsC = customerData.slice(newIndex, newIndex + 3);
    setCurrentIndex(newIndex);
    setVisibleItemsC(newVisibleItemsC);
  };

  const handleCustomerBackward = () => {
    const newIndex = currentIndex - 1;
    const newVisibleItemsC = customerData.slice(newIndex, newIndex + 3);
    setCurrentIndex(newIndex);
    setVisibleItemsC(newVisibleItemsC);
  };
  // Form Validation
  const [findUsValue, setFindUsValue] = useState("");

  const handleFindUsChange = (event) => {
    setFindUsValue(event.target.value);
  };

  const isFormValid = () => {
    return findUsValue !== "" && console.log("FormSubmit");
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
    <>
      <MainImg
        imgurl="/OtherPages/Aboutusimg/main.svg"
        navbgcolor="bg-[#35A9B6]"
        title="About Us"
        description="We're a visionary creative design/development powerhouse, employing scalable and futuristic solutions to transform innovative business ideas into extraordinary realities."
        logohudbilleaf="/Navbarimg/hudbilleaflogo-white.svg"
        contentNav="Transform your online presence with our professional web development services, tailored to elevate your brand's digital footprint."
      />

      <div className="bg-[#35A9B6] p-5 lg:p-[100px]">
        <div>
          <p className="lg:text-3xl font-400 lg:w-[70vmax] lg:h-[239px] md:text-2xl">
            Working hand in hand with our clients, our project are consistently
            awarded and we are proud of that. This means that we are moving in
            the right direction. Founded in 2016, we have quietly scaled from a
            one-man band to a powerhouse of exceptional developers and
            designers, growing solely through the power of word of mouth.
          </p>
          <p className="lg:text-3xl font-400 lg:w-[70vmax] mt-8 md:text-2xl">
            Founded in 2012, we have quietly scaled from a one-man band to a
            powerhouse of exceptional developers and designers, growing solely
            through the power of word of mouth.
          </p>
          <p className="lg:text-3xl font-400 lg:w-[70vmax] mt-12 md:text-2xl">
            Today we specialise in bespoke software solutions. We love getting
            into the minute details of your business problems and crafting a
            product tailored to your exact needs, so you can focus on everything
            else in your business.
          </p>
        </div>
        <div className="mt-10 lg:mt-16">
          <div className="lg:flex flex-wrap lg:flex-nowrap">
            {visibleItems.map((item, index) => (
              <div key={index} className="mt-10 flex items-start gap-5">
                <div className="flex items-center lg:w-[10vw]">
                  <hr className="w-3 sm:w-6 mx-3" />{" "}
                  <h1 className="lg:text-[60px] font-[600] md:text-[80px] sm:text-[50px]">
                    {item.id}.
                  </h1>
                </div>
                <div>
                  <h3 className="font-medium lg:pl-8 md:pl-12 lg:text-4xl md:text-3xl sm:text-xl text-sm">
                    {item.title}
                  </h3>
                  <p className="font-thin lg:pl-8 md:pl-12 lg:text-3xl mt-2 md:mt-6 md:text-2xl sm:text-lg text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-center flex-wrap p-1 md:mt-20 lg:mt-20">
              {" "}
              <button
                type="button"
                className="btn-animate-white  lg:w-[180px] lg:h-[49px] md:text-[20px] md:w-40 md:h-10 w-32 h-7 text-sm border border-white rounded-full"
              >
                Our industries <span></span>
              </button>
              {/* Desktop Buttons*/}
              <div className="flex justify-between">
                <div className="mr-2 space-x-3 sm:space-x-2">
                  <button
                    onClick={handleBackward}
                    disabled={currentIndex === 0}
                    className="md:w-[60px] mx-5 sm:mx-5 md:mx-0 w-[8vmin]"
                  >
                    {" "}
                    <svg
                      width="48"
                      height="25"
                      viewBox="0 0 48 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="nav-svg cursor-pointer"
                    >
                      <rect
                        x="0.5"
                        y="1"
                        width="47"
                        height="23"
                        rx="11.5"
                        stroke="white"
                        className="background-animation"
                      />
                      <g
                        clipPath="url(#clip0_4386_161)"
                        className="left-arrow-animation"
                      >
                        <g clipPath="url(#clip1_4386_161)">
                          <path
                            d="M23.1992 8.5L19.1992 12.5M19.1992 12.5L23.1992 16.5M19.1992 12.5H28.7992"
                            stroke="white"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_4386_161">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(16 4.5)"
                          />
                        </clipPath>
                        <clipPath id="clip1_4386_161">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(16 4.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button
                    onClick={handleForward}
                    disabled={currentIndex + 2 >= slides.length}
                    className="md:w-[60px] mx-5 sm:mx-5 md:mx-0 w-[8vmin]"
                  >
                    {" "}
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
                        y="1"
                        width="47"
                        height="23"
                        rx="11.5"
                        stroke="white"
                        className="background-animation"
                      />
                      <g
                        clipPath="url(#clip0_4386_167)"
                        className="right-arrow-animation"
                      >
                        <g clipPath="url(#clip1_4386_167)">
                          <path
                            d="M24.7992 8.5L28.7992 12.5M28.7992 12.5L24.7992 16.5M28.7992 12.5H19.1992"
                            stroke="white"
                            strokeLinecap="square"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_4386_167">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(16 4.5)"
                          />
                        </clipPath>
                        <clipPath id="clip1_4386_167">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(16 4.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* What we're Good at */}
        <div>
          <div className="mt-10 md:mt-20">
            <h1 className="font-[600] lg:text-8xl md:text-[70px] text-[12vmin]">
              What we&#39;re
              <br />
              good at
            </h1>
            <h3 className="md:mt-24 mt-10 lg:text-3xl font-[400] md:text-2xl sm:text-xl text-sm">
              Technology agnostic and skilled across a comprehensive range of
              software development domains, we are capable of building anything
              - and we mean absolutely anything. Whatever your project, we will
              bring it to life from concept to launch completely in-house.
            </h3>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 font-thin text-xl">
            <div>
              <ul className="list-circle lg:text-[24px] md:text-[4vmin]">
                <li className="mt-4">Branding & Identity</li>
                <li className="mt-4">Creative Direction</li>
                <li className="mt-4">UX & UI Design</li>
                <li className="mt-4">eCommerce</li>
              </ul>
            </div>
            <div>
              <ul className="list-circle lg:text-[24px] md:text-[4vmin]">
                <li className="mt-4">API Integration</li>
                <li className="mt-4">Wireframing & Prototyping</li>
                <li className="mt-4">Animation & Video</li>
                <li className="mt-4">Content Production</li>
              </ul>
            </div>
            <div>
              <ul className="list-circle lg:text-[24px] md:text-[4vmin]">
                <li className="mt-4">CRM Integration</li>
                <li className="mt-4">SEO / Adwords</li>
                <li className="mt-4">iOS & Android Apps</li>
                <li className="mt-4">Business Process Mapping</li>
              </ul>
            </div>
          </div>

          <div className="mt-28">
            <div className="flex justify-between space-x-4">
              {/* Repeat this block for each customer logo */}
              <div className="flex justify-between items-center lg:w-[73px] lg:h-[150px] md:w-[4rem] sm:w-[3rem] w-[2rem]">
                <img
                  src="/OtherPages/Aboutusimg/01.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[202px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/02.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[170px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[4rem]">
                <img
                  src="/OtherPages/Aboutusimg/03.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[158px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/04.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[170px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/05.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
            </div>

            <div className="flex justify-between space-x-4 mt-10">
              {/* Repeat this block for each customer logo */}
              <div className="flex justify-center items-center lg:w-[94px] lg:h-[150px] md:w-[4rem] sm:w-[3rem] w-[2rem]">
                <img
                  src="/OtherPages/Aboutusimg/06.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[111px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/07.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[216px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/08.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[219px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/09.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[155px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/10.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
            </div>
            <div className="flex justify-between space-x-4 mt-10">
              {/* Repeat this block for each customer logo */}
              <div className="flex justify-center items-center lg:w-[103px] lg:h-[150px] md:w-[4rem] sm:w-[3rem] w-[2rem]">
                <img
                  src="/OtherPages/Aboutusimg/11.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[201px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/12.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[155px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/13.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[106px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/14.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[93px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/15.svg"
                  alt=""
                  className="customer-companies w-full h-full"
                />
              </div>
            </div>
            <div className="flex justify-between space-x-4 mt-10">
              {/* Repeat this block for each customer logo */}
              <div className="flex justify-center items-center lg:w-[162px] lg:h-[150px]  md:w-[4rem] sm:w-[3rem] w-[2rem]">
                <img
                  src="/OtherPages/Aboutusimg/16.svg"
                  alt=""
                  className="customer-companies"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[213px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/17.svg"
                  alt=""
                  className="customer-companies"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[171px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/18.svg"
                  alt=""
                  className="customer-companies"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[144px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/19.svg"
                  alt=""
                  className="customer-companies"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[160px] lg:h-[150px] md:w-[7rem] sm:w-[5rem] w-[3rem]">
                <img
                  src="/OtherPages/Aboutusimg/20.svg"
                  alt=""
                  className="customer-companies"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Our Services */}
        <div className="my-10 md:my-20">
          <h1 className="text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Our Services
          </h1>
        </div>
        <div>
          {/* Images section */}
          <div className="mx-3 flex flex-wrap md:justify-center mt-10">
            <div className="w-full md:w-1/2 lg:w-1/2 md:px-20">
              <div className="text-sm lg:text-3xl">
                <div className="lg:w-[35vw] md:w-[20rem] md:-ml-10">
                  <Link to="/research">
                    <img
                      src="images/Hudbil-Research 1.png"
                      alt="img-1"
                      className="w-full h-full"
                    />
                  </Link>
                  <h1 className="my-4 font-bold text-lg lg:text-3xl flex items-center lg:mt-5">
                    <hr className="w-3 sm:w-6 mx-3" /> RESEARCH <br />
                  </h1>
                  <p className="research-img text-sm sm:text-xl lg:text-3xl lg:leading-10 md:pl-12">
                    Our extensive research helps us understand exactly what your
                    audiences are looking for, and our process accountability
                    helps us offer UX Solutions as a core service in the studio.
                  </p>
                </div>

                <div className="lg:mt-28 mt-16 lg:w-[40vw] md:w-[20rem] md:-ml-10">
                  <Link to="/uiuxdesign">
                    <img
                      src="images/Hudbil-Design 1.png"
                      alt="img-3"
                      className="w-full h-full"
                    />
                  </Link>
                  <h1 className="my-4 font-bold text-lg lg:text-3xl flex items-center lg:mt-5">
                    <hr className="w-3 sm:w-6 mx-3" /> UI/UX DESIGN
                  </h1>
                  <p className="research-img text-sm sm:text-xl lg:text-3xl lg:leading-10 md:pl-12">
                    Our scientifically proven UX design process means you can
                    simultaneously release products users love and check off
                    business goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 p-4 md:px-20 md:py-10 lg:py-20">
              <div className="text-sm lg:text-3xl">
                <div className="mt-8 lg:w-[29vw] md:w-[18.5rem]">
                  <Link to="/strategy">
                    <img
                      src="images/Hudbil-Strategy 1.png"
                      alt="img-2"
                      className="w-full h-full"
                    />
                  </Link>
                  <h1 className="my-4 font-bold text-lg lg:text-3xl flex items-center lg:mt-5">
                    <hr className="w-3 sm:w-6 mx-3" /> STRATEGY
                  </h1>
                  <p className="research-img text-sm sm:text-xl lg:text-3xl lg:leading-10 md:pl-12">
                    Understanding your brand, identifying your pain points,
                    empathizing with your audience, and strategizing delightful
                    user experiences are some of the things we do as your UX
                    Partners.
                  </p>
                </div>

                <div className="mt-16 md:mt-[8rem] lg:mt-[18rem] lg:w-[30vw] md:w-[17rem]">
                  <Link to="/development"></Link>
                  <img
                    src="images/Hudbil-Development 1.png"
                    alt="img-4"
                    className="w-full h-full"
                  />
                  <h1 className="my-4 font-bold text-lg lg:text-3xl flex items-center lg:mt-5">
                    <hr className="w-3 sm:w-6 mx-3" /> BE-SPOKEN DEVELOPMENT
                  </h1>
                  <p className="research-img text-sm sm:text-xl lg:text-3xl lg:leading-10 ">
                    We spend time understanding your unique business challenges,
                    creating flexible software roadmaps, and developing secure,
                    scalable solutions that deliver ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-28">
          <div className="md:mt-32 lg:mr-2 flex justify-between items-center h-[60px]">
            <h1 className="lg:text-8xl md:text-6xl text-4xl">Customers love</h1>
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
                    y="1"
                    width="47"
                    height="23"
                    rx="11.5"
                    stroke="white"
                    className="background-animation"
                  />
                  <g
                    clipPath="url(#clip0_4386_161)"
                    className="left-arrow-animation"
                  >
                    <g clipPath="url(#clip1_4386_161)">
                      <path
                        d="M23.1992 8.5L19.1992 12.5M19.1992 12.5L23.1992 16.5M19.1992 12.5H28.7992"
                        stroke="white"
                        strokeLinecap="square"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4386_161">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(16 4.5)"
                      />
                    </clipPath>
                    <clipPath id="clip1_4386_161">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(16 4.5)"
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
                className=""
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
                    y="1"
                    width="47"
                    height="23"
                    rx="11.5"
                    stroke="white"
                    className="background-animation"
                  />
                  <g
                    clipPath="url(#clip0_4386_167)"
                    className="right-arrow-animation"
                  >
                    <g clipPath="url(#clip1_4386_167)">
                      <path
                        d="M24.7992 8.5L28.7992 12.5M28.7992 12.5L24.7992 16.5M28.7992 12.5H19.1992"
                        stroke="white"
                        strokeLinecap="square"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4386_167">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(16 4.5)"
                      />
                    </clipPath>
                    <clipPath id="clip1_4386_167">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(16 4.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:mt-28">
          <div
            className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-12 items-baseline"
            id="customer-grid"
          >
            {visibleItemsC.map((item, index) => (
              <div key={index} className="mt-10">
                <img src={item.img} alt="" />
                <h3 className="mt-4 md:mt-8 lg:mt-16 text-sm md:text-base lg:text-xl md:h-[250px] ">
                  {item.h3}
                </h3>
                <h6 className=" md:mt-10 text-xs lg:text-sm">{item.h6_1}</h6>
                <h6 className="text-xs lg:text-sm">{item.h6_2}</h6>
              </div>
            ))}
          </div>
        </div>

        {/* Get in Touch */}
        <div className="mt-10 flex flex-wrap">
          <div>
            <h3 className="lg:text-[48px] lg:w-[100vmin] lg:my-20 sm:text-[2rem] text-[1.5rem]">
              Want to stand out from the crowd with a brillant website ?
            </h3>
            <h5 className="lg:text-[24px] font-[200] lg:my-20 mt-10">
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
                      className="bg-[#35A9B6] lg:text-[22px] font-[200] py-2 placeholder:text-white w-full outline-none"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      className="lg:text-[32px] font-[200] md:text-[20px]"
                    >
                      What&#39;s your email address ?
                    </label>
                  </div>
                  <div className="border-b lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                    {" "}
                    <input
                      type="email"
                      placeholder="Your Email "
                      className="bg-[#35A9B6] lg:text-[22px] font-thin py-2 placeholder:text-white w-full outline-none"
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
                    <div className="pb-5 flex items-center gap-2">
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
                                ? "text-white bg-black"
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
                                ? "text-white bg-black"
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
                                ? "text-white bg-black"
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
                    <div className="flex mb-5 items-center gap-2">
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
                            className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 ${
                              findUsValue === "social-media"
                                ? "text-white bg-black"
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
                                ? "text-white bg-black"
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
                            className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1 ${
                              findUsValue === "website"
                                ? "text-white bg-black"
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
                      className="bg-[#35A9B6] w-full text-[22px] font-[200] placeholder:text-white outline-none"
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
      <div className="bg-[#35A9B6]">
        <Footer bginput="bg-[#35A9B6]" />
      </div>
    </>
  );
}

export default OurAboutus;
