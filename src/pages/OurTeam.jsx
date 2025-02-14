import { useState } from "react";
import MainImg from "../components/mainImg/MainImg";
import Footer from "../components/Footer/footer";

function OurTeam() {
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
    <>
      <MainImg
        imgurl="/OtherPages/OurTeamimg/main.svg"
        title="Our Team"
        description="Does expecting the unexpected make the unexpected expected? Come and join us in that lovely place between the unknown and the known."
        logohudbilleaf="/Navbarimg/hudbilleaflogo-white.svg"
        contentNav="Transform your online presence with our professional web development services, tailored to elevate your brand's digital footprint."
      />
      <div className="bg-black p-5 lg:p-[100px]">
        <div>
          <p className="lg:w-[80vw] lg:h-[293px] lg:font-[400] mb-20 md:mb-0 text-sm sm:text-xl md:text-2xl lg:text-[32px] lg:leading-10">
            Working hand in hand with our clients, our project are consistently
            awarded and we are proud of that. This means that we are moving in
            the right directionFounded in 2012, we have quietly scaled from a
            one-man band to a powerhouse of exceptional developers and
            designers, growing solely through the power of word of mouth.
          </p>
        </div>

        <div>
          <div className="flex md:justify-end justify-center lg:gap-10 my-10 space-x-5 ">
            <div>
              <img
                src="/OtherPages/OurTeamimg/01.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/02.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/03.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
          </div>
          <div className="flex md:justify-end justify-center lg:gap-10 my-10 space-x-5 ">
            <div>
              <img
                src="/OtherPages/OurTeamimg/04.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/05.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/01.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
          </div>
          <div className="flex md:justify-end justify-center lg:gap-10 my-10 space-x-5 ">
            <div>
              <img
                src="/OtherPages/OurTeamimg/02.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/06.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/04.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
          </div>
          <div className="flex md:justify-end justify-center lg:gap-10 my-10 space-x-5 ">
            <div>
              <img
                src="/OtherPages/OurTeamimg/01.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/02.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/03.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
          </div>
          <div className="flex md:justify-end justify-center lg:gap-10 my-10 space-x-5 ">
            <div>
              <img
                src="/OtherPages/OurTeamimg/04.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/05.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
            <div>
              <img
                src="/OtherPages/OurTeamimg/01.svg"
                alt=""
                className="lg:w-[346px] lg:h-[433px]"
              />
              <h3 className="lg:font-[600] text-sm sm:text-xl md:text-4xl mt-2">
                Ale Benintende
              </h3>
              <h4 className="lg:font-[400] text-xs sm:text-lg lg:text-[18px] mt-3">
                CEO, CREATIVE DIRECTOR
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-5 lg:flex lg:justify-end">
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
                  className="bg-black lg:text-[22px] font-[200] py-2 placeholder:text-white w-full outline-none"
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
                  What &#39;s your email address ?
                </label>
              </div>
              <div className="border-b lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                {" "}
                <input
                  type="email"
                  placeholder="Your Email "
                  className="bg-black lg:text-[22px] font-thin py-2 placeholder:text-white w-full outline-none"
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
                  className="bg-black w-full text-[22px] font-[200] placeholder:text-white outline-none"
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

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default OurTeam;
