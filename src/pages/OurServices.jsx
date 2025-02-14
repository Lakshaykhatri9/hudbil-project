import { Link } from "react-router-dom";
import MainImg from "../components/mainImg/MainImg";
import Footer from "../components/Footer/footer";

function OurServices() {
  return (
    <>
      <MainImg
        imgurl="/OtherPages/OurServicesimg/main.svg"
        navbgcolor="bg-[#d9d9d8]"
        title="Our Service"
        MaintextColor="text-[#5D3A3A]"
        description="The future is an exciting place to be. We create brands that deserve to be there."
        logohudbil="/logo/logo2.svg"
        logohudbilleaf="/Navbarimg/hudbilleaflogo.svg"
        bgColor="bg-[#fc5f5f]"
        textColor="text-[#fc5f5f]"
        textColorLi="text-[#5D3A3A]"
        contentNav="Content & design focuses on creating engaging and coherent narratives, suits by visually pleasing elements to enhance user experience."
      />
      <div className="bg-custom-ourservice-page p-3 lg:p-10">
        <div className="flex justify-evenly space-x-10 flex-wrap gap-10 lg:mt-20">
          <div className="lg:w-[595px] lg:h-[761px] mt-8 sm:mt-0">
            <Link to="/research">
              {" "}
              <img
                src="/images/Hudbil-Research 1.png"
                alt="Research"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            {" "}
            <h1 className="mb-3 font-[600] text-lg lg:text-4xl md:text-2xl sm:text-2xl flex items-center sm:mt-5 text-[#201e1e]">
              <hr className="w-3 h-1 sm:w-12 mx-3 bg-[#201e1e] font-bold" />{" "}
              RESEARCH <br />
            </h1>
            <p className="research-img text-sm font-[200] lg:leading-10 sm:text-2xl md:text-3xl lg:text-[32px] lg:w-2/3  text-[#201e1e]">
              Our extensive research helps us understand exactly what your
              audiences are looking for, and our process accountability helps us
              offer UX Solutions as a core service in the studio.
            </p>
            <div className="lg:flex lg:space-x-5 mt-10 lg:mt-40">
              <div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                  UX Research{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                  Ethnographic Research
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                  Design Audit
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                  Maturity Audit
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                  Competitor Analysis
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                  Emerging Trends
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy img section */}
        <div className="mt-20 flex justify-evenly space-x-10 flex-wrap gap-10">
          <div className="lg:w-[595px] lg:h-[758px]">
            <Link to="/strategy">
              <img
                src="/images/Hudbil-Strategy 1.png"
                alt="Research"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="lg:w-1/2 relative mt-10">
            {" "}
            <h1 className="mb-3 font-[600] text-lg lg:text-4xl md:text-2xl sm:text-2xl flex items-center sm:mt-5 text-[#201e1e]">
              <hr className="w-3 h-1 sm:w-12 mx-3 bg-[#201e1e] font-bold" />{" "}
              STRATEGY <br />
            </h1>
            <p className="research-img text-sm font-[200] lg:leading-10 sm:text-2xl md:text-3xl lg:text-[32px] lg:w-3/4  text-[#201e1e]">
              Understanding your brand, identifying your pain points,
              empathizing with your audience, and strategizing delightful user
              experiences are some of the things we do as your UX Partners
            </p>
            <div className="">
              <div className="lg:flex lg:space-x-5 mt-10 lg:mt-40">
                <div>
                  <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                    Brand Strategy{" "}
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      className="border-b-2 border-gray-800 h-10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                        stroke="#201E1E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                    Product Strategy
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      className="border-b-2 border-gray-800 h-10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                        stroke="#201E1E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                    UX Strategy
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      className="border-b-2 border-gray-800 h-10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                        stroke="#201E1E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                    Scale Up Strategy
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      className="border-b-2 border-gray-800 h-10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                        stroke="#201E1E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                    Digital Transformation
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      className="border-b-2 border-gray-800 h-10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                        stroke="#201E1E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-black border-b border-black font-[400] w-56 sm:w-80 text-sm md:text-xl">
                    User Acquisition Strategy{" "}
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      className="border-b-2 border-gray-800 h-10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                        stroke="#201E1E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Design img section */}
        <div className="mt-20 flex flex-wrap justify-evenly space-x-10 gap-10">
          <div className="lg:w-[595px] lg:h-[758px]">
            <Link to="/uiuxdesign">
              <img
                src="/images/Hudbil-Design 1.png"
                alt="Research"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="lg:w-1/2 relative mt-6">
            {" "}
            <h1 className="mb-3 font-[600] text-lg lg:text-4xl md:text-2xl sm:text-2xl flex items-center sm:mt-5 text-[#201e1e]">
              <hr className="w-3 h-1 sm:w-12 mx-3 bg-[#201e1e] font-bold" />{" "}
              Design <br />
            </h1>
            <p className="research-img text-sm font-[200] lg:leading-10 sm:text-2xl md:text-3xl lg:text-[32px] lg:w-2/3 text-[#201e1e]">
              Our scientifically proven UX design process means you can
              simultaneously release products users love and check off business
              goals.
            </p>
            <div className="lg:flex lg:space-x-5 mt-6 lg:space-y-[1.4rem]">
              <div className="mt-5 space-y-5 lg:space-y-6">
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  UI/UX Design{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Design Production{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Be spoke Logo design & Identity{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Print & Digital Collateral Design
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Rebranding Services{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  UI/UX Consulting with AI Integration{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
              </div>

              <div className="mt-8 space-y-5 lg:space-y-6">
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  AR/VR Experience <br /> Design{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  E - Learning platform <br /> UX Design{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Customer <br /> Experience Design{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Bespoke website <br /> design{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Web Redesign <br /> Services{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-evenly space-x-10 gap-10">
          <div className="lg:w-[595px] lg:h-[800px]">
            <Link to="/development">
              <img
                src="/images/Hudbil-Development 1.png"
                alt="Research"
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="lg:w-1/2 relative mt-8">
            {" "}
            <h1 className="mb-3 font-[600] text-lg lg:text-4xl md:text-2xl sm:text-2xl flex items-center sm:mt-5 text-[#201e1e]">
              <hr className="w-3 h-1 sm:w-12 mx-3 bg-[#201e1e] font-bold" />{" "}
              BUILD <br />
            </h1>
            <p className="research-img text-sm font-[200] lg:leading-10 sm:text-2xl md:text-3xl lg:text-[32px] lg:w-2/3 text-[#201e1e]">
              We spend time understanding your unique business challenge,
              creating flexible software roadmaps, and developing secure,
              scalable solutions that deliver ROI.
            </p>
            <div className="lg:flex lg:space-x-5 mt-3">
              <div className="mt-7 space-y-5 lg:space-y-[1.4rem]">
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Website development{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Web Application Development
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Website Migration{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Platform Compatoitor
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Cross platform App Development
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  IOS App Development{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  AI Integration Design{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  AI Based Chatbot Integration{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Resource Support{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Software development{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  MVP Development{" "}
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
                <div className="flex items-center justify-between text-black border-b border-black font-[400] w-60 sm:w-80 text-sm md:text-xl">
                  Andiord App Development
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    className="border-b-2 border-gray-800 h-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H17.8M17.8 8L10.8 1M17.8 8L10.8 15"
                      stroke="#201E1E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-40">
          <div className="div-1 grid lg:grid-cols-4 grid-cols-2 lg:space-x-7">
            <div>
              <p className="font-[400] text-black text-xs sm:text-lg lg:text-2xl">
                Users on marketplaces we &#39;ve created in 2023.
              </p>
              <p className="font-[700] text-black mt-4 text-sm sm:text-xl lg:text-5xl">
                8500+
              </p>
            </div>
            <div>
              <p className="font-[400] text-black text-xs sm:text-lg lg:text-2xl">
                Successfully finished projects with creativity.
              </p>
              <p className="font-[700] text-black mt-4 text-sm sm:text-xl lg:text-5xl">
                660+
              </p>
            </div>
            <div>
              <p className="font-[400] text-black text-xs sm:text-lg lg:text-2xl">
                Monthly visitors on our e-Commerce platform.
              </p>
              <p className="font-[700] text-black mt-4 text-sm sm:text-xl lg:text-5xl">
                6834+
              </p>
            </div>
            <div>
              <p className="font-[400] text-black text-xs sm:text-lg lg:text-2xl">
                Onboarding conversions growth increased.
              </p>
              <p className="font-[700] text-black mt-4 text-sm sm:text-xl lg:text-5xl">
                38%
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-28 flex justify-between flex-wrap md:flex-nowrap gap-5">
          <div className="">
            <p className="text-black font-[500] lg:text-4xl md:text-xl sm:text-xl text-sm">
              We work with brands and businesses to ensure they shine
            </p>
          </div>
          <div>
            <div className="flex justify-between gap-2 py-2 md:py-4">
              <p className="text-black lg:text-2xl sm:text-lg text-xs">
                Successfully finished projects with creativity.
              </p>
              <p className="text-black lg:text-2xl sm:text-lg text-xs">
                We value each and every human life placed our hands constantly
                work towards meeting the expectations of our customers.
              </p>
            </div>
            <hr className="h-1 opacity-10" />
            <div className="flex justify-between gap-2 py-2 md:py-4">
              <p className="text-black lg:text-2xl sm:text-lg text-xs">
                Work together for better branding solutions.
              </p>
              <p className="text-black lg:text-2xl sm:text-lg text-xs">
                We value each and every human life placed our hands constantly
                work towards meeting the expectations of our customers.
              </p>
            </div>
            <hr className="h-1 opacity-10" />
            <div className="flex justify-between gap-2 py-2 md:py-4">
              <p className="text-black lg:text-2xl sm:text-lg text-xs">
                Committed to deliver unique digital media.
              </p>
              <p className="text-black lg:text-2xl sm:text-lg text-xs">
                We value each and every human life placed our hands constantly
                work towards meeting the expectations of our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 flex justify-between items-center flex-wrap sm:space-x-4">
          <p className="text-black lg:text-[24px] font-[500] sm:text-[4vmin] text-[3vmin]">
            OPEN POSITION
          </p>
          <p className="text-black lg:text-[32px] font-[300] lg:leading-[48px] text-[3vmin]">
            Do you think you have what it takes to join us?
            <br />
            Reach out to hr@hudbil.com
          </p>
        </div>
      </div>
      <div className="bg-[#d9d9d8]">
        <Footer
          bginput="bg-[#d9d9d8]"
          textColor="text-[#201e1e]"
          btnborder="border-[#201e1e]"
          hudbilimg="/images/footer-logo-black.svg"
          btnanimate="btn-animate-black"
          linesvgcolor="black"
        />
      </div>
    </>
  );
}

export default OurServices;
