import MainImg from "../components/mainImg/MainImg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <MainImg
        imgurl="/Contactus/lucas-george-wendt-9oFY29DNfeM-unsplash 1.png"
        navbgcolor="bg-[#f4f0cf]"
        title="Contact"
        description="Geographies don’t stop us from working for your organisations in
          the India, US, Uk, Japan, Middle East and Europe, we are here to
          work for everyone."
        MaintextColor="text-black"
        textColorLi="text-[#201e1e]"
        textColorLiHover="text-[#e79a68]"
        textColor="text-[#fc5f5f]"
        logohudbil="/logo/logo2.svg"
        logohudbilleaf="/Navbarimg/hudbilleaflogo-white.svg"
        contentNav="Build a robust backend infrastructure to support app functionality, including databases, servers, and APIs."
      />

      <div className="bg-[#DFC102] p-3 lg:p-[100px]">
        <div className="pt-10 md:flex md:justify-between">
          {" "}
          <div className="">
            {" "}
            <h1 className="text-black lg:text-7xl font-[400] sm:text-3xl text-2xl">
              Let’s do something...
            </h1>
            <p className="text-black lg:text-3xl mt-5 font-[400] sm:text-xl text-xs">
              Want to change your future for the better? Flick us an email or
              give us a call
            </p>
          </div>
        </div>

        <div className="md:flex lg:justify-between lg:mt-36 mt-20">
          {" "}
          <div>
            <img
              src="OtherPages/Contactimg/hudbil-logo.svg"
              alt=""
              className="h-[100px] overflow-hidden md:h-[80px] lg:h-[200px]"
            />
            <div>
              <div className="my-5 md:my-0">
                <div>
                  <h3 className="text-black lg:text-[20px] lg:font-[500] ">
                    EMAIL US AT
                  </h3>
                  <h3 className="text-black lg:text-2xl lg:font-[400] ">
                    info@hudbil.com
                  </h3>
                </div>

                <div className="my-10 md:my-0 md:mt-5">
                  <h3 className="text-black  lg:text-[20px] lg:font-[500] ">
                    CALL US ON
                  </h3>
                  <h3 className="text-xs text-black lg:text-xl lg:font-[400] ">
                    +91 88 00 22 1006
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <div>
                  <h5 className="lg:text-[14px] lg:font-[500] lg:leading-[16px] text-black ">
                    DROP BY AT BANGALORE OFFICE
                  </h5>
                </div>

                <div className="my-1 md:my-0 md:mt-2">
                  <h5 className="text-black lg:text-xl lg:font-[400] lg:leading-[36px] w-1/2">
                    No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage,
                    Indiranagar Hoysala Nagar, Bangalore - 560038.
                  </h5>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <div>
                  <h5 className="lg:text-[14px] lg:font-[500] lg:leading-[16px] text-black ">
                    DROP BY AT MUMBAI OFFICE
                  </h5>
                </div>

                <div className="my-1 md:my-0 md:mt-2">
                  <h5 className="text-black  lg:text-xl lg:font-[400] lg:leading-[36px] w-1/2">
                    74/II, “C” Cross Road, Opp Gate No 2, MIDC - 400093, Seepz,
                    Andheri East, Mumbai, Maharashtra.
                  </h5>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <div>
                  <h5 className="lg:text-[14px] lg:font-[500] lg:leading-[16px] text-black ">
                    DROP BY AT DELHI OFFICE
                  </h5>
                </div>

                <div className="my-1 md:my-0 md:mt-2">
                  <h5 className="text-black  lg:text-xl lg:font-[400] lg:leading-[36px] w-1/2">
                    90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram,
                    Sarhol, Haryana - 122008.
                  </h5>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <div>
                  <h5 className="lg:text-[14px] lg:font-[500] lg:leading-[16px] text-black ">
                    DROP BY AT CHANDIGARH OFFICE
                  </h5>
                </div>

                <div className="my-1 md:my-0 md:mt-2">
                  <h5 className="text-black lg:text-xl lg:font-[400] lg:leading-[36px] w-1/2">
                    Ground Floor, C-205, Phase 8B, Sector 74, Sahibzada Ajit
                    Singh Nagar, Punjab 140308 .
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* Email Section */}
          <div>
            <div>
              <h3 className="lg:text-[32px] font-[400] md:text-[20px] text-black ">
                Your Email
              </h3>
            </div>
            <div className="mt-5">
              <div className="my-1">
                <form>
                  <div>
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] text-black md:text-[6vmin] text-[5vmin] "
                      >
                        I,am interested in
                      </label>
                    </div>
                    <div>
                      <div className="py-5">
                        {" "}
                        {/* first row */}
                        <div className="flex mb-5 flex-wrap items-center gap-2">
                          {" "}
                          <div>
                            <input
                              type="radio"
                              id="ui/ux-design"
                              name="find-us"
                              value="ui/ux-design"
                            />
                            <label htmlFor="ui/ux-design  ">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[155px] lg:h-[49px] md:w-[150px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[3vmin] w-[35vmin] p-1">
                                {" "}
                                UI/UX design
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="website-development"
                              name="find-us"
                              value="website-development"
                            />
                            <label htmlFor="website-development">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[250px] lg:h-[49px] md:w-[170px] md:h-[35px] md:text-[15px] sm:w-[30vmin] sm:h-[30px] sm:text-sm text-[3vmin] w-[38vmin] p-1">
                                {" "}
                                Website developments
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="application-development"
                              name="find-us"
                              value="application-development"
                            />
                            <label htmlFor="application-development">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[260px] lg:h-[49px] md:w-[180px] md:h-[35px] md:text-[15px] sm:w-[33vmin] sm:h-[30px] sm:text-sm text-[3vmin] w-[39vmin] p-1">
                                {" "}
                                Application development
                              </button>
                            </label>
                          </div>
                        </div>
                        {/* Second Row */}
                        <div className="flex mb-5 flex-wrap items-center gap-2">
                          {" "}
                          <div>
                            <input
                              type="radio"
                              id="branding-design"
                              name="find-us"
                              value="branding-design"
                            />
                            <label htmlFor="branding-design">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[3vmin] w-[35vmin] p-0.5">
                                {" "}
                                Branding design
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="design-strategy"
                              name="find-us"
                              value="design-strategy"
                            />
                            <label htmlFor="design-strategy">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[3vmin] w-[35vmin] p-0.5">
                                {" "}
                                Design Strategy
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="chat-bot-development"
                              name="find-us"
                              value="chat-bot-development"
                            />
                            <label htmlFor="chat-bot-development">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[230px] lg:h-[49px] md:w-[190px] md:h-[35px] md:text-[15px] sm:w-[33vmin] sm:h-[30px] sm:text-sm text-[3vmin] w-[38vmin] p-1">
                                {" "}
                                Chat-bot development
                              </button>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] md:text-[20px] text-black"
                      >
                        What&#39;s your name ?
                      </label>
                    </div>
                    <div className="border-b border-black md:w-[76vw] lg:w-[50vw]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Typing"
                        className="bg-[#DFC102] lg:text-[22px] font-[200] py-2 placeholder:text-black w-full outline-none text-black"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] md:text-[20px] text-black"
                      >
                        What&#39;s your company name ?
                      </label>
                    </div>
                    <div className="border-b border-black md:w-[76vw] lg:w-[50vw]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Typing"
                        className="bg-[#DFC102] lg:text-[22px] font-[200] py-2 placeholder:text-black w-full outline-none text-black"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] md:text-[20px] text-black"
                      >
                        What &#39;s your email address ?
                      </label>
                    </div>
                    <div className="border-b border-black md:w-[76vw] lg:w-[50vw]">
                      {" "}
                      <input
                        type="email"
                        placeholder="Typing"
                        className="bg-[#DFC102] lg:text-[22px] font-thin py-2 placeholder:text-black w-full outline-none text-black"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] md:text-[20px] text-black"
                      >
                        What’s your city?
                      </label>
                    </div>
                    <div className="border-b border-black md:w-[76vw] lg:w-[50vw]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Typing"
                        className="bg-[#DFC102] lg:text-[22px] font-[200] py-2 placeholder:text-black w-full outline-none text-black"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] md:text-[20px] text-black"
                      >
                        What’s your project brief?
                      </label>
                    </div>
                    <div className="border-b border-black md:w-[76vw] lg:w-[50vw]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Typing"
                        className="bg-[#DFC102] lg:text-[22px] font-[200] py-2 placeholder:text-black w-full outline-none text-black"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <div className="lg:text-[32px] font-[200] md:text-[20px] text-black">
                      What’s your project budget?
                    </div>
                    <div className="lg:text-[32px] font-[200] md:text-[20px] text-black">
                      Select
                    </div>

                    <div className="-ml-6 lg:w-[44rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                      <div className="py-5">
                        {" "}
                        {/* first row */}
                        <div className="lg:pb-5 flex flex-wrap gap-2">
                          {" "}
                          <div>
                            <input
                              type="radio"
                              id="1000-2000"
                              name="find-us"
                              value="1000-2000"
                            />
                            <label htmlFor="1000-2000">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[142px] lg:h-[49px] md:w-[118px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1">
                                {" "}
                                $ 1000- 2000
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="3000-5000"
                              name="find-us"
                              value="3000-5000"
                            />
                            <label htmlFor="3000-5000">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[142px] lg:h-[49px] md:w-[118px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1">
                                {" "}
                                $ 3000- 5000
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id=" 6000-7000"
                              name="find-us"
                              value=" 6000-7000"
                            />
                            <label htmlFor=" 6000-7000">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[147px] lg:h-[49px] md:w-[118px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-1">
                                {" "}
                                $ 6000 - 7000
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="8000-10000"
                              name="find-us"
                              value="8000-10000"
                            />
                            <label htmlFor="8000-10000">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[168px] lg:h-[49px] md:w-[118px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] px-2 py-0.5">
                                {" "}
                                $ 8000 - 10000
                              </button>
                            </label>
                          </div>
                        </div>
                        {/* Second Row */}
                        <div className="flex mb-5 gap-3">
                          {" "}
                          <div>
                            <input
                              type="radio"
                              id="11000-12000"
                              name="find-us"
                              value="11000-12000"
                            />
                            <label htmlFor="11000-12000">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-0.5 mt-3">
                                {" "}
                                $ 11000 - 12000
                              </button>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="13000-15000"
                              name="find-us"
                              value="13000-15000"
                            />
                            <label htmlFor="13000-15000">
                              {" "}
                              <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[162px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[10px] p-0.5 mt-3">
                                {" "}
                                $ 13000 - 15000
                              </button>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] md:text-[20px] text-black"
                      >
                        What’s your message for us?
                      </label>
                    </div>
                    <div className="border-b border-black md:w-[76vw] lg:w-[50vw]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Typing"
                        className="bg-[#DFC102] lg:text-[22px] font-[200] py-2 placeholder:text-black outline-none w-full"
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex items-center gap-3">
                    <button className="btn-animate-black border border-black text-black rounded-full lg:text-xl font-[200] lg:w-[130px] lg:h-[49px] md:w-[138px] md:h-[46px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-24 p-1 px-1 md:text-lg">
                      {" "}
                      submit
                    </button>
                    <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[155px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-[35vmin] p-1">
                      Client Support
                    </button>
                    <button className="btn-animate-black border border-black text-black rounded-full lg:text-[20px] font-[200] lg:w-[155px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-[35vmin] p-1">
                      Chat with Ella
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Moving Img */}
      <div
        id="moving-img"
        className="pt-10 h-[200px] overflow-hidden md:h-[400px] lg:h-[600px] bg-[#DFC102] "
      >
        <img src="/images/Worldmap 1.png" alt="" className="w-full h-auto " />
      </div>

      <div className="bg-[#DFC102] p-3 lg:px-[100px] lg:pt-[62px] lg:pb-[49px]">
        <div>
          <h1 className="text-3xl font-semibold text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Let &#39;s work together
            <span className="inline-block align-middle">
              <svg
                width="116"
                height="4"
                viewBox="0 0 116 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="110" height="4" fill="#FEF59A" />
                <rect width="110" height="4" fill="black" />
              </svg>
            </span>
          </h1>
          <h1 className="text-3xl font-semibold text-black sm:text-3xl md:text-4xl lg:text-5xl">
            and collaborate <strike className="text-black">tomorrow </strike>
            Today...
          </h1>
        </div>

        <div className="md:flex md:items-center md:gap-6 lg:mt-10">
          <div className="mt-5 md:mt-0">
            <div className="md:text-sm lg:text-[18px] w-[196px] text-black">
              JOIN THE NEWS LETTER
            </div>
          </div>

          <div className="mt-5 md:mt-0 relative">
            <input
              type="email"
              name="email"
              placeholder="Insert your email address"
              autoComplete="off"
              id="contact-email"
              className="text-thin bg-[#DFC102] w-full border-black border-b-2 md:pr-10 lg:w-96 placeholder:text-black placeholder:font-extralight outline-none placeholder:text-xs placeholder:sm:text-xl text-black"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <i className="fa-solid fa-arrow-right text-black"></i>
            </span>
          </div>
        </div>

        <div className="text-center mt-10 md:mt-8 md:text-left md:flex md:justify-between md:items-center md:gap-4 lg:gap-16">
          <h5 className="font-bold text-[15px] text-black">
            &copy; 2024 Hudbil Private Limited. All rights reserved &nbsp;
            &nbsp; <Link to="/privacypolice">Privacy Policy</Link> &nbsp;|
            &nbsp; <Link to="/termsofservices">Terms & Conditions</Link> &nbsp;|
            &nbsp;<Link to="/cookiespolicy">Cookies Policies</Link>
          </h5>
          {/* Desktop */}
          <div>
            <button
              type="button"
              className="footer-btn btn-animate-black hidden md:block border rounded-full border-black text-black"
            >
              Fb &nbsp; Li &nbsp; lg &nbsp; Tw
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
