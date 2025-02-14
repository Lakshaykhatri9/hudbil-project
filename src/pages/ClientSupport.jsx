import MainImg from "../components/mainImg/MainImg";
import Footer from "../components/Footer/footer";

function ClientSupport() {
  return (
    <div>
      <MainImg
        imgurl="/OtherPages/ClientSupportimg/nik-XNK6Z3ynehc-unsplash 1.png"
        navbgcolor="bg-[#00ADA6]"
        title="Client Support"
        description="We support our clients to sort any design and development issues with no time."
        logohudbilleaf="/Navbarimg/hudbilleaflogo-white.svg"
        contentNav="Build a robust backend infrastructure to support app functionality, including databases, servers, and APIs."
      />
      <main className="bg-[#00ADA6] p-4 lg:p-[100px]">
        {" "}
        <div>
          {" "}
          <h1 className="lg:text-[72px] font-[400] md:text-[10vmin] sm:text-[9vmin] text-[7vmin]">
            Our team is here...
          </h1>
          <p className="lg:text-[32px] font-[400] lg:w-[60vw] md:text-[5vmin] sm:text-[4vmin] text-[3vmin]">
            If you are dealing with any issue&#39;s in your on going project,
            request a call we are available to help 24/7
          </p>
        </div>
        {/* Form Section */}
        <div className="sm:mt-10 mt-7">
          <div>
            <h3 className="lg:text-[32px] font-[200] sm:text-[5vmin] text-[4vmin]">
              Choose your project
            </h3>
          </div>
          <div className="mt-5">
            <form>
              <div>
                <div>
                  {" "}
                  <label
                    htmlFor=""
                    className="lg:text-[32px] font-[200] sm:text-[5vmin] text-[4vmin]"
                  >
                    Select your on-going project with us
                  </label>
                </div>
                <div>
                  <div className="sm:py-5 py-2">
                    {" "}
                    {/* first row */}
                    <div className="pb-5 flex items-center flex-wrap gap-3">
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
                          <button className="btn-animate-white border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[155px] lg:h-[49px]  md:w-[38vmin] md:h-[7vmin] md:text-[3vmin] sm:w-[33vmin] sm:h-[6vmin] sm:text-[2.8vmin] w-24 h-8 text-sm">
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
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[250px] lg:h-[49px]  md:w-[38vmin] md:h-[7vmin] md:text-[3vmin] sm:w-[33vmin] sm:h-[6vmin] sm:text-[2.8vmin] text-sm w-40 h-8">
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
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[250px] lg:h-[49px] md:w-[38vmin] md:h-[7vmin] md:text-[3vmin] sm:w-[33vmin] sm:h-[6vmin] text-sm h-8 w-40 mt-1 md:mt-0">
                            {" "}
                            Application development
                          </button>
                        </label>
                      </div>
                    </div>
                    {/* Second Row */}
                    <div className="flex mb-5 items-center flex-wrap gap-2">
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
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[38vmin] md:h-[7vmin] md:text-[3vmin] sm:w-[33vmin] sm:h-[6vmin] text-sm w-28 h-8">
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
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[38vmin] md:h-[7vmin] md:text-[3vmin] sm:w-[33vmin] sm:h-[6vmin] text-sm w-28 h-8">
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
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[230px] lg:h-[49px] md:w-[38vmin] md:h-[7vmin] md:text-[3vmin] sm:w-[32vmin] sm:text-[3vmin] text-sm w-40 h-8 mr-14">
                            {" "}
                            Chat-bot development
                          </button>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div>
                  {" "}
                  <label
                    htmlFor=""
                    className="lg:text-[32px] font-[200] md:text-[5vmin] sm:text-[4vmin]"
                  >
                    What&#39;s your name ?
                  </label>
                </div>
                <div className="border-b border-white w-10/12">
                  {" "}
                  <input
                    type="text"
                    placeholder="Typing"
                    className="bg-[#00ADA6] lg:text-[22px] font-[200] py-2 placeholder:text-white outline-none "
                  />
                </div>
              </div>
              <div className="mt-10">
                <div>
                  {" "}
                  <label
                    htmlFor=""
                    className="lg:text-[32px] font-[200] md:text-[5vmin] sm:text-[4vmin]"
                  >
                    What&#39;s your company name ?
                  </label>
                </div>
                <div className="border-b border-white w-10/12">
                  {" "}
                  <input
                    type="text"
                    placeholder="Typing"
                    className="bg-[#00ADA6] lg:text-[22px] font-[200] py-2 placeholder:text-white outline-none "
                  />
                </div>
              </div>
              <div className="mt-10">
                <div>
                  {" "}
                  <label
                    htmlFor=""
                    className="lg:text-[32px] font-[200] md:text-[5vmin] sm:text-[4vmin]"
                  >
                    What&#39;s your email address ?
                  </label>
                </div>
                <div className="border-b border-white w-10/12">
                  {" "}
                  <input
                    type="email"
                    placeholder="Typing"
                    className="bg-[#00ADA6] lg:text-[22px] font-thin py-2 placeholder:text-white w-full outline-none"
                  />
                </div>
              </div>
              <div className="mt-10">
                <div>
                  {" "}
                  <label
                    htmlFor=""
                    className="lg:text-[32px] font-[200] md:text-[5vmin] sm:text-[4vmin]"
                  >
                    What’s your role towards the project ?
                  </label>
                </div>
                <div className="border-b border-white w-10/12">
                  {" "}
                  <input
                    type="text"
                    placeholder="Typing"
                    className="bg-[#00ADA6] lg:text-[22px] font-[200] py-2 placeholder:text-white outline-none "
                  />
                </div>
              </div>
              <div className="mt-10">
                <div>
                  {" "}
                  <label
                    htmlFor=""
                    className="lg:text-[32px] font-[200] md:text-[5vmin] sm:text-[4vmin]"
                  >
                    What’s your is the issue are you currently facing ?
                  </label>
                </div>
                <div className="border-b border-white w-10/12">
                  {" "}
                  <input
                    type="text"
                    placeholder="Typing"
                    className="bg-[#00ADA6] lg:text-[22px] font-[200] py-2 placeholder:text-white outline-none "
                  />
                </div>
              </div>
              <div className="mt-10">
                <div className="lg:text-[32px] font-[200] md:text-[20px] ">
                  What&#39;s is the good time to connect with you?
                </div>
                <div className="lg:text-[32px] font-[200] md:text-[20px] ">
                  Select timing
                  <div>
                    <p className="mt-10 lg:text-[24px] ">
                      Please note we will only take these live calls between
                      3:00 PM to 6:00 PM Indian standard time, in order to serve
                      you better, we need your patience and assistance to fix
                      the issue at the earliest. Once you fix the time, your
                      meeting will be fixed in 24 hours.
                    </p>
                  </div>
                </div>
                <div className="mt-5 lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                  <div className="py-5">
                    {" "}
                    {/* first row */}
                    <div className="pb-5 flex flex-wrap gap-2">
                      {" "}
                      <div>
                        <input
                          type="radio"
                          id="3:00pm-ist"
                          name="find-us"
                          value="3:00pm-ist"
                        />
                        <label htmlFor="3:00pm-ist">
                          {" "}
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[148px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-sm w-28 h-8 p-1">
                            {" "}
                            03:00 PM - IST
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="3:30pm-ist"
                          name="find-us"
                          value="3:30pm-ist"
                        />
                        <label htmlFor="3:30pm-ist">
                          {" "}
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[148px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-sm w-28 h-8 p-1">
                            {" "}
                            03:30 PM - IST
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="4:00pm-ist"
                          name="find-us"
                          value="4:00pm-ist"
                        />
                        <label htmlFor="4:00pm-ist">
                          {" "}
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[154px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-sm w-28 h-8 p-1">
                            {" "}
                            04:00 PM - IST
                          </button>
                        </label>
                      </div>
                    </div>
                    {/* Second Row */}
                    <div className="pb-5 flex flex-wrap gap-2">
                      {" "}
                      <div>
                        <input
                          type="radio"
                          id="4:30pm-ist"
                          name="find-us"
                          value="4:30pm-ist"
                        />
                        <label htmlFor="4:30pm-ist">
                          {" "}
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[148px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-sm w-28 h-8 p-1">
                            {" "}
                            04:30 PM - IST
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="5:00pm-ist"
                          name="find-us"
                          value="5:00pm-ist"
                        />
                        <label htmlFor="5:00pm-ist">
                          {" "}
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[138px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-sm w-28 h-8 p-1">
                            {" "}
                            5:00 PM - IST
                          </button>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="5:30pm-ist"
                          name="find-us"
                          value="5:30pm-ist"
                        />
                        <label htmlFor="5:30pm-ist">
                          {" "}
                          <button className="btn-animate-white  border border-white  rounded-full lg:text-[20px] font-[200] lg:w-[138px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-sm w-28 h-8 p-1">
                            {" "}
                            5:30 PM - IST
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
                    className="lg:text-[32px] font-[200] md:text-[20px] "
                  >
                    What&#39;s your message for us?
                  </label>
                </div>
                <div className="lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                  <div className="mt-5 flex space-x-10">
                    <span className="lg:text-[20px] font-[400]">
                      {" "}
                      Attached a file or screenshot
                    </span>
                    <input type="file" id="fileInput" />
                    <label htmlFor="fileInput" className="custom-file-input ">
                      <i className="fa-solid fa-paperclip text-black w-7 text-center text-xl"></i>
                    </label>
                  </div>
                </div>
              </div>
              {/* Submit btn */}
              <div className="mt-10 flex items-center gap-3">
                <button className="btn-animate-white border border-white  rounded-full text-sm px-1 py-2 w-24 md:text-lg">
                  {" "}
                  submit
                </button>

                <button className="btn-animate-white border border-white  rounded-full text-sm px-1 py-2 w-36 md:text-lg">
                  Chat with Ella
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* Moving Img */}
      <div
        id="moving-img"
        className="pt-10 h-[200px] overflow-hidden md:h-[400px] lg:h-[600px] bg-[#00ADA6]"
      >
        <img
          src="/OtherPages/ClientSupportimg/kelsy-gagnebin-rHSxG0ghO2w-unsplash 1.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="pt-[100px] bg-[#00ADA6]">
        <Footer bginput="bg-[#00ADA6]" />
      </div>
    </div>
  );
}

export default ClientSupport;
