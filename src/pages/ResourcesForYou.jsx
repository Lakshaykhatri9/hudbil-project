import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

function ReesourcesForYou() {
  const images = [
    {
      src: "/Works/01.svg",
      alt: "Image 1",
      content: "Our Brands",
      routepath: "#",
    },
    {
      src: "/Works/02.svg",
      alt: "Image 1",
      content: "Our Culture",
      routepath: "/ourculture",
    },
    {
      src: "/Works/03.svg",
      alt: "Image 1",
      content: "Our Team",
      routepath: "/ourteam",
    },
    {
      src: "/Works/03.svg",
      alt: "Image 1",
      content: "Our Awards",
      routepath: "/ourawards",
    },
    {
      src: "/Works/01.svg",
      alt: "Image 1",
      content: "Our Industries",
      routepath: "/ourindustries",
    },
    {
      src: "/Works/02.svg",
      alt: "Image 1",
      content: "Our Culture",
      routepath: "/ourculture",
    },
    {
      src: "/Works/03.svg",
      alt: "Image 1",
      content: "Our Team",
      routepath: "/ourteam",
    },
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages] = useState(images.slice(0, 4));
  return (
    <>
      <div className="bg-[#dcdcdc]">
        <Navbar
          navbgcolor="bg-red-950"
          logohudbil="logo/logo2.svg"
          logohudbilleaf="/Navbarimg/hudbilleaflogo.svg"
          bgColor="bg-red-500"
          textColor="text-red-500"
          contentNav="Wire-framing & prototyping allow us to visualise, test the concepts early, ensuring a practical and user-friendly design before development."
          textColorLiHover="text-white"
        />
        <div>
          <div className="p-5 md:p-10 lg:p-[100px]">
            <h3 className="text-2xl md:text-[40px] font-[600] text-black">
              {" "}
              <Link to="/blog">Resources for you</Link>{" "}
            </h3>
            <div className="md:flex md:justify-between md:my-8 mt-2">
              <p className="text-xs md:text-xl lg:text-[28px] lg:leading-[42px] md:w-8/12 font-[400] text-black ">
                Our creative agency &#39;s blog provides the latest insights
                into our innovative design methodologies,News, Tips, Education
                and Few Interesting Reads. Stay tuned....!
              </p>
              <div className="md:w-4/12 md:flex md:justify-end md:items-start mt-2">
                <button className="font-[200] text-[20px] md:text-[15px] border border-black text-black text-xs md:text-xl py-1 px-2 lg:py-2 lg:px-4 bg-transparent rounded-full">
                  <Link to="/blog"> Let&#39;s talk </Link>{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="md:flex md:justify-around md:gap-10">
                {visibleImages.map((image, index) => (
                  <div key={index} className="py-2 md:py-5">
                    <Link to={`${image.routepath}`}>
                      <img src={image.src} alt={image.alt} />
                    </Link>

                    <div className="my-3 md:my-5 flex items-center justify-around px-2 md:px-0">
                      {" "}
                      <hr className="w-36 md:w-8 lg:w-16 border-0 h-1 bg-black" />
                      {image.content && (
                        <h6 className="text-lg md:text-base lg:text-[20px] font-[600] text-black">
                          {image.content}
                        </h6>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-5 lg:p-10  hidden lg:flex lg:justify-center ">
            <div className="lg:flex  lg:gap-10">
              {" "}
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-border-red">
                <div className="dot-red"></div>
              </div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e0e1d2]">
        {" "}
        <div className="p-5 md:p-10 lg:p-[100px]">
          <div className="md:flex md:justify-between md:items-center md:my-8 mt-2">
            <div className="md:w-8/12">
              <button className="font-[200] text-[20px] md:text-[15px] border border-black text-black text-xs md:text-xl py-1  px-2 lg:py-2 lg:px-4 bg-transparent rounded-full">
                <Link to="/blog"> Let &#39;s talk </Link>{" "}
              </button>
            </div>
            <p className="text-xs md:text-xl lg:text-[28px] lg:leading-[42px] font-[400] text-black ">
              {" "}
              “We see through the lens of clients’ business aspirations,
              ensuring our designs not only look exceptional but resonate with
              brand vision. - <b className="text-black">Hudbil Team</b>
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="md:flex md:justify-around md:gap-10">
              {visibleImages.map((image, index) => (
                <div key={index} className="py-2 md:py-5">
                  <Link to={`${image.routepath}`}>
                    <img src={image.src} alt={image.alt} />
                  </Link>

                  <div className="my-3 md:my-5 flex items-center justify-around px-2 md:px-0">
                    {" "}
                    <hr className="w-36 md:w-8 lg:w-16 border-0 h-1 bg-black" />
                    {image.content && (
                      <h6 className="text-lg md:text-base lg:text-[20px] font-[600] text-black">
                        {image.content}
                      </h6>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-5 lg:p-10  hidden lg:flex lg:justify-center ">
          <div className="lg:flex  lg:gap-10">
            {" "}
            <div className="dot-black"></div>
            <div className="dot-black"></div>
            <div className="dot-black"></div>
            <div className="dot-border-red">
              <div className="dot-red"></div>
            </div>
            <div className="dot-black"></div>
            <div className="dot-black"></div>
            <div className="dot-black"></div>
            <div className="dot-black"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#d7cfcf]">
        {" "}
        <div>
          <div className="p-5 md:p-10 lg:p-[100px]">
            <div className="md:flex md:justify-between md:my-8 mt-2">
              <p className="text-xs md:text-xl lg:text-[28px] lg:leading-[42px] md:w-8/12 font-[400] text-black ">
                “Our works are a blend of innovative thinking and practical
                solutions, ensuring they are both unique and effective.-{" "}
                <b className="text-black">Hudbil Team</b>
              </p>
              <div className="md:w-4/12 md:flex md:justify-end md:items-start mt-2">
                <button className="font-[200] text-[20px] md:text-[15px] border border-black text-black text-xs md:text-xl py-1 px-2 lg:py-2 lg:px-4 bg-transparent rounded-full">
                  <Link to="/blog"> Let &#39;s talk </Link>{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="md:flex md:justify-around md:gap-10">
                {visibleImages.map((image, index) => (
                  <div key={index} className="py-2 md:py-5">
                    <Link to={`${image.routepath}`}>
                      <img src={image.src} alt={image.alt} />
                    </Link>

                    <div className="my-3 md:my-5 flex items-center justify-around px-2 md:px-0">
                      {" "}
                      <hr className="w-36 md:w-8 lg:w-16 border-0 h-1 bg-black" />
                      {image.content && (
                        <h6 className="text-lg md:text-base lg:text-[20px] font-[600] text-black">
                          {image.content}
                        </h6>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-5 lg:p-10  hidden lg:flex lg:justify-center ">
            <div className="lg:flex  lg:gap-10">
              {" "}
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-border-red">
                <div className="dot-red"></div>
              </div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
              <div className="dot-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReesourcesForYou;
