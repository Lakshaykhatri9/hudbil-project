import { useState } from "react";
import MainImg from "../components/mainImg/MainImg";
import Footer from "../components/Footer/footer";
import { Link } from "react-router-dom";

function OurStory() {
  const images = [
    {
      src: "/OtherPages/OurStoryimg/01.svg",
      alt: "Image 1",
      content: "HUDBIL",
    },
    {
      src: "/OtherPages/OurStoryimg/02.svg",
      alt: "Image 1",
      content: "COLTFOX",
    },
    {
      src: "/OtherPages/OurStoryimg/03.svg",
      alt: "Image 1",
      content: "KALACODE",
    },
    {
      src: "/OtherPages/OurStoryimg/04.svg",
      alt: "Image 1",
      content: "MANUCODE",
    },
    {
      src: "/OtherPages/OurStoryimg/05.svg",
      alt: "Image 1",
      content: "INFOTIK",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 4));

  const handleImageClick = (index) => {
    let newIndex = currentIndex + index - 2;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > images.length - visibleImages.length) {
      newIndex = images.length - visibleImages.length;
    }
    setCurrentIndex(newIndex);
    setVisibleImages(images.slice(newIndex, newIndex + visibleImages.length));
  };

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
        imgurl="/OtherPages/OurStoryimg/main.svg"
        navbgcolor="bg-[#FE823D]"
        title="Our story"
        description="We believe change is the biggest opportunity for brands to move forward. By going deeper, pushing boundaries and imagining what could be, we make"
        logohudbilleaf="/Navbarimg/hudbilleaflogo-white.svg"
        contentNav="Transform your online presence with our professional web development services, tailored to elevate your brand's digital footprint."
      />

      {/* Description Section */}
      <div className="bg-[#FE823D] p-3 lg:p-[100px]">
        <div className="md:pt-7 md:flex md:justify-center">
          {" "}
          <div className="md:text-2xl">
            {" "}
            <h1 className="font-[800] lg:text-[38px] md:text-3xl text-2xl">
              The Hudbil – “King Solomon &#39;s Messenger Bird”
            </h1>
            <p className="font-[400] lg:mt-14  sm:mt-10 mt-7 lg:text-2xl sm:text-2xl text-sm">
              Hud-Hud a king Solomon’s messenger bird from the ‘Holy Torah’ –
              Combine the its bill which define its beauty and elegance. HUDBIL
              stands for beauty and clarity in which is related to the hornbill.
              It gets its unusual name from its shrill call of &#34;hoops&#34;,
              which rings clear and far and is repeated two or three times.
              Often the cry is cut off very short. This may be caused by the
              bird &#39;s bill sharply striking the ground at the end of the
              note. It is one of the Old World &#39;s non-passerine birds.
            </p>
            <p className="font-[400] lg:mt-10  sm:mt-10 mt-7 lg:text-2xl sm:text-2xl text-sm">
              Hudbil as a brand stands for its innovation in technology and
              creative to fly high and give freedom to business owners by
              automating the repetitive and mundane so they can build an empire
              in their industry.
            </p>
          </div>
          {/* Desktopo img view */}
          <img
            src="/OtherPages/OurStoryimg/bird.svg"
            alt=""
            className="hidden lg:block lg:w-[78vmin]"
          />
        </div>
        <div>
          <p className="font-[400] sm:mt-10 mt-7 lg:text-2xl sm:text-2xl text-sm">
            We are a group of professional automation developers. Automation is
            our passion, and we have helped countless businesses in India and
            across the world transform their productivity and systems into
            automation powerhouses.
          </p>
          <p className="font-[400] sm:mt-10 mt-7 lg:text-2xl sm:text-2xl text-sm">
            We have a team of amazing ‘Automation Hackers’, each with their own
            superpowers, ready to automate your company. We are recognised
            experts in business automation, and have presented at events in
            Bangalore and the many states in India.
          </p>
          <p className="font-[400] sm:mt-10 mt-7 lg:text-2xl sm:text-2xl text-sm">
            We’re not your typical agency guys — and we don’t want to be. We’re
            here to get the job done: no politics, no suits, no ego. Just
            results. That said, we’re not robots — we’re a close knit team of
            friends and family that love what we do.
          </p>
          <p className="font-[400] sm:mt-10 mt-7  lg:text-2xl sm:text-2xl text-sm">
            We work hard, but we value balance. We’re out the door (or the home
            office!) at 5.30.We use knowledge sharing, coaching and
            work-shopping to drive collective value across our business; meaning
            every client succeeds from the testing, ideas and developments of
            our total client pool.
          </p>
        </div>

        {/* Our Brands */}
        <div className="mt-10 md:mt-20 ">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-[700] ">
              Our <br /> brands
            </h1>
          </div>

          <div className="sm:space-x-3 mt-10 grid grid-cols-1 sm:flex">
            <span className="sm:border-r-2 border-white sm:pr-3 lg:pr-10 font-[600] lg:text-[20px]">
              HUDBIL.COM
            </span>
            <span className="sm:border-r-2 border-white sm:pr-3 lg:pr-10 font-[600] lg:text-[20px]">
              COLTFOX.COM
            </span>
            <span className="sm:border-r-2 border-white sm:pr-3 lg:pr-10 font-[600] lg:text-[20px]">
              KALACODE.COM
            </span>
            <span className="sm:border-r-2 border-white sm:pr-3 lg:pr-10 font-[600] lg:text-[20px]">
              MAUSAPP.COM
            </span>
            <span className="font-[600] lg:text-[20px]">INFOTIK.CO</span>
          </div>

          <div>
            <div className="carousel flex flex-wrap mt-10">
              <div className="space-x-5 mt-auto mr-5 pb-10 flex">
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
                      clipPath="url(#clip0_4298_508)"
                      className="left-arrow-animation"
                    >
                      <g clipPath="url(#clip1_4298_508)">
                        <path
                          d="M23.2002 8L19.2002 12M19.2002 12L23.2002 16M19.2002 12H28.8001"
                          stroke="white"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4298_508">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(16 4)"
                        />
                      </clipPath>
                      <clipPath id="clip1_4298_508">
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
                      clipPath="url(#clip0_4298_514)"
                      className="right-arrow-animation"
                    >
                      <g clipPath="url(#clip1_4298_514)">
                        <path
                          d="M24.8002 8L28.8001 12M28.8001 12L24.8002 16M28.8001 12H19.2002"
                          stroke="white"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4298_514">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(16 4)"
                        />
                      </clipPath>
                      <clipPath id="clip1_4298_514">
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
              <div className="md:flex md:justify-around md:flex-wrap md:gap-10 ">
                {visibleImages.map((image, index) => (
                  <div key={index} className="my-4">
                    <div className="bg-white h-72 lg:w-[250px] lg:h-[367px] p-4 border border-gray-200 rounded flex justify-center items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-fit h-fit"
                        onClick={() => handleImageClick(index)}
                        // className="w-1"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      {" "}
                      <hr className="w-36 md:w-12 lg:w-16" />
                      {image.content && (
                        <h6 className="my-1 text-normal md:text-xs lg:text-xl">
                          {image.content}
                        </h6>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-10"></div>
          {/* <div className="my-10">
            <div>
              {" "}
              <button type="button" title="left-arrow" id="left-arrow-customer">
                <i className="fa-solid fa-arrow-left border border-white px-2 py-1 md:px-3 md:py-1  rounded-full hover:bg-white hover:text-black"></i>
              </button>
              <button
                type="button"
                title="right-arrow"
                id="right-arrow-customer"
              >
                <i className="fa-solid fa-arrow-right border border-white px-2 py-1 md:px-3 md:py-1 rounded-full hover:bg-white hover:text-black"></i>
              </button>
            </div>
            <div>
              <div className="bg-white h-72 w-56 p-4 border border-gray-200 rounded flex justify-center items-center ">
                <div>
                  <img
                    src="/OtherPages/OurStoryimg/01.svg"
                    alt="logo"
                    className="w-36 h-36"
                  />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                {" "}
                <hr className="w-36 md:w-12 lg:w-16" />
                <h6 className="my-1 text-normal md:text-xs lg:text-xl">
                  HUDBIL
                </h6>
              </div>
            </div>
          </div> */}

          <div>
            <div className="md:flex md:justify-between font-normal mt-20">
              <h3 className="lg:text-[40px] font-[500] text-[6vmin]">
                Our partnerships
              </h3>
              <div className="mt-5 text-2xl md:w-6/12">
                {" "}
                <h3 className="lg:text-[40px] mb-8">Be inclusive</h3>{" "}
                <p className="text-sm sm:text-lg md:text-2xl">
                  We pride ourselves on our approach. We call it The hud’s. A
                  fast-paced yet detailed immersion into our client &#39;s
                  business allows our team to understand objectives and customer
                  requirements.Equipped with this knowledge, we can provide
                  quality, scalable solutions to help meet objectives.
                </p>
              </div>
            </div>
            <div className="md:flex md:justify-between font-normal mt-10">
              <h3 className="lg:text-[40px] font-[500] text-[6vmin]">
                Our big results
              </h3>
              <div className="mt-5 text-2xl md:w-6/12">
                {" "}
                <h3 className="lg:text-[40px] mb-8"> Be expert</h3>{" "}
                <p className="text-sm sm:text-lg md:text-2xl">
                  We don’t do campaigns. We don’t simply ‘redesign’ a website
                  with a new set of features.Everything we do moves our client
                  one step closer to being an industry leader.We only take on
                  projects that can create a positive, measurable, everlasting
                  change.
                </p>
              </div>
            </div>
            <div className="md:flex md:justify-between mt-10">
              <h3 className="lg:text-[40px] font-[500] text-[6vmin]">
                Let’s collaborate
              </h3>
              <div className="mt-5 text-2xl md:w-6/12">
                {" "}
                <h3 className="lg:text-[40px] mb-8"> Be attentive</h3>{" "}
                <p className="text-sm sm:text-lg md:text-2xl">
                  Our investigative process alongside our creativity and
                  technical expertise make us a valuable partner, not just
                  another digital supplier. We are solely dedicated to creating
                  a long term positive impact for our clients. We are here to
                  take your business to the next level & believe strongly in
                  fantastic client relations along with quantifiable results.
                </p>
                <button className="btn-animate-white w-36 h-10 text-[15px] sm:w-32 sm:h-10 sm:text-[16px] md:w-36 md:h-10 md:text-lg lg:w-[159px] lg:h-[49px] border border-white rounded-full lg:text-[20px] my-10 lg:my-20">
                  <Link to="/ourservices">Our services</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="md:mt-10">
            <div className="flex justify-between flex-wrap">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl my-2 lg:text-[40px] lg:leading-[52px]">
                  Want to stand out from the crowd <br /> with a brillant
                  website ?
                </h3>
                <h5 className="lg:text-[24px] font-[200] mt-10">
                  Get in touch with us for a chat! <br /> We respond to all
                  enquiries within two business days.
                </h5>
              </div>

              <div className="mt-20 lg:mt-1">
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        className="lg:text-[32px] font-[200] md:text-[20px]"
                      >
                        What &#39;s your full name
                      </label>
                    </div>
                    <div className="border-b lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                      {" "}
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        className="bg-[#FE823D] lg:text-[22px] font-[200] py-2 placeholder:text-white w-full outline-none"
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
                        What &#39;s your email address ?
                      </label>
                    </div>
                    <div className="border-b lg:w-[42rem] sm:w-[26rem] md:w-[42rem] w-[15rem]">
                      {" "}
                      <input
                        type="email"
                        placeholder="Your Email "
                        className="bg-[#FE823D] lg:text-[22px] font-thin py-2 placeholder:text-white w-full outline-none"
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
                      <div className="pb-5 flex justify-between items-center gap-3 sm:gap-0">
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
                              className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-24 h-7 ${
                                findUsValue === "word-of-mouth"
                                  ? "text-black bg-orange-950"
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
                              className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-[11px] w-20 h-7 ${
                                findUsValue === "google-search"
                                  ? "text-black bg-orange-950"
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
                              className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-24 h-8 ${
                                findUsValue === "google-adwords"
                                  ? "bg-orange-950"
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
                              className={`btn-animate-white  border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-20 h-6 ${
                                findUsValue === "social-media"
                                  ? "text-black bg-orange-950"
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
                              className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[177px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-24 h-6 ${
                                findUsValue === "client-reference"
                                  ? "text-black bg-orange-950"
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
                              className={`btn-animate-white border rounded-full lg:text-[20px] font-[200] lg:w-[119px] lg:h-[49px] md:w-[138px] md:h-[35px] md:text-[15px] sm:w-[120px] sm:h-[30px] sm:text-sm text-xs w-16 h-8 ${
                                findUsValue === "website"
                                  ? "text-black bg-orange-950"
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
                        className="bg-[#FE823D] w-full text-[22px] font-[200] placeholder:text-white outline-none"
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
      </div>

      <div className="bg-[#FE823D]">
        <Footer bginput="bg-[#FE823D]" />
      </div>
    </>
  );
}

export default OurStory;
