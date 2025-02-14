import MainImg from "../components/mainImg/MainImg";
import Footer from "../components/Footer/footer";
import { Link } from "react-router-dom";

function OurCulture() {
  return (
    <>
      <MainImg
        imgurl="/OtherPages/OurCultureimg/main.svg"
        navbgcolor="bg-[#d9b490]"
        title="Our Culture"
        description="Through strategy and creativity, it can embed sustainability into your identity, into your personality and proposition – deepening the emotional connection between your brand and your consumers. "
        logohudbilleaf="/Navbarimg/hudbilleaflogo-white.svg"
        contentNav="Transform your online presence with our professional web development services, tailored to elevate your brand's digital footprint."
      />

      <div className="bg-[#d9b490] p-3 lg:p-10">
        <div>
          <div className="flex justify-between flex-wrap gap-5">
            <div className="mt-10">
              {" "}
              <p className="lg:text-[40px] md:text-[5vmin] text-[4vmin]">
                Attitude To Work.
              </p>
              <p className="sm:mt-8 mt-5 lg:text-[32px] md:text-[4vmin] text-[3vmin] lg:w-[45vw]">
                We take pride in providing high-quality software development
                solutions. We use proven development techniques in pair with
                personal responsibility to achieve top notch results. This makes
                us proud of our work and allows us sleeping well at night.{" "}
              </p>
            </div>
            <div className="flex justify-center items-center w-1/2">
              {" "}
              <button className="btn-animate-white md:w-[178px] md:h-[53px] md:text-[24px] border border-white rounded-full w-[22vmin] h-[7vmin] text-[3vmin]">
                <Link to="/aboutus"> About us</Link>
              </button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap mt-2 lg:mt-10 gap-5">
            <div className="flex justify-center items-center w-1/2">
              {" "}
              <button className="btn-animate-white lg:block hidden md:w-[178px] md:h-[53px] md:text-[24px] border border-white rounded-full w-[22vmin] h-[7vmin] text-[3vmin]">
                <Link to="/ourservices"> Our Services</Link>
              </button>
            </div>

            <div className="">
              {" "}
              <p className="lg:text-[40px] md:text-[5vmin] text-[4vmin] mt-8">
                {" "}
                Attitude To Client.
              </p>
              <p className="sm:mt-8 mt-5 lg:text-[32px] md:text-[4vmin] text-[3vmin] lg:w-[42vw]">
                Our clients become our partners and we treat your product as if
                it’s ours. The main principle of our cooperation is trust which
                is based on personal commitment. We do our best to lift the
                burden of side tasks and let you focus on the key parts of your
                business.{" "}
              </p>
              <div className="flex justify-center items-center w-1/2">
                <button className="btn-animate-white lg:hidden mt-5 sm:mt-10 md:w-[178px] md:h-[53px] md:text-[24px] border border-white rounded-full w-[22vmin] h-[7vmin] text-[3vmin]">
                  <Link to="/ourservices"> Our Services</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-5 mt-2 lg:mt-10">
            <div className="">
              {" "}
              <p className="lg:text-[40px] md:text-[5vmin] text-[4vmin] mt-8">
                {" "}
                Attitude To Employee.
              </p>
              <p className="mt-10 lg:text-[32px] md:text-[4vmin] text-[3vmin] lg:w-[45vw]">
                Each software engineer at Hudbil is welcome to discuss any
                thoughts, ideas, preferences and dislikes. Information is freely
                transferred between levels of the company - from junior
                developer to CEO and backward. We appreciate transparency and
                honesty.
              </p>
            </div>
            <div className="flex justify-center items-center w-1/2">
              <button className="btn-animate-white md:w-[178px] md:h-[53px] md:text-[24px] border border-white rounded-full w-[22vmin] h-[7vmin] text-[3vmin]">
                <Link to="/ourwork">Our Work</Link>
              </button>
            </div>
          </div>
        </div>
        {/* Our Values */}
        <div>
          <div className="flex justify-between gap-5 text-2xl  mt-20">
            <div className="">
              <h1 className="lg:text-[40px] text-[7vmin] font-[500]">
                OUR VALUES
              </h1>
            </div>
            <div className="w-1/2">
              <div>
                <p className="lg:text-[40px] md:text-[5vmin] sm:text-[4vmin] font-[500]">
                  Be inclusive
                </p>
                <p className="lg:mt-10 lg:text-3xl md:text-2xl text-sm font-[500]">
                  {" "}
                  Foster an open environment built on trust, where everyone
                  feels empowered to be themselves and make contributions.
                </p>
              </div>
              <div className="-mt-3">
                <p className="lg:text-[40px] md:text-[5vmin] sm:text-[4vmin] font-[500] mt-14">
                  Be inclusive
                </p>
                <p className="lg:mt-10 lg:text-3xl md:text-2xl text-sm font-[500]">
                  {" "}
                  Foster an open environment built on trust, where everyone
                  feels empowered to be themselves and make contributions.
                </p>
              </div>
              <div className="-mt-3">
                <p className="lg:text-[40px] md:text-[5vmin] sm:text-[4vmin] font-[500] mt-14">
                  Be inclusive
                </p>
                <p className="lg:mt-10 lg:text-3xl md:text-2xl text-sm font-[500]">
                  {" "}
                  Foster an open environment built on trust, where everyone
                  feels empowered to be themselves and make contributions.
                </p>
              </div>
              <div className="-mt-3">
                <p className="lg:text-[40px] md:text-[5vmin] sm:text-[4vmin] font-[500] mt-14">
                  Be inclusive
                </p>
                <p className="lg:mt-5 lg:text-3xl md:text-2xl text-sm font-[500]">
                  {" "}
                  Foster an open environment built on trust, where everyone
                  feels empowered to be themselves and make contributions.
                </p>
              </div>
              <div className="-mt-3">
                <p className="lg:text-[40px] md:text-[5vmin] sm:text-[4vmin] font-[500] mt-14">
                  Be inclusive
                </p>
                <p className="lg:mt-5 lg:text-3xl md:text-2xl text-sm font-[500]">
                  {" "}
                  Foster an open environment built on trust, where everyone
                  feels empowered to be themselves and make contributions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:my-36 my-20">
          <p className="lg:w-[70vw] lg:text-[40px] sm:text-[5vmin] text-[4vmin]">
            {" "}
            Out of the box — Our international team represents a mix of
            experiences, talents, and skills that enrich our collective
            creativity.{" "}
          </p>

          <div className="flex gap-5 mt-16">
            <div>
              {" "}
              <img src="/OtherPages/OurCultureimg/01.svg" alt="" />
              <p className="lg:text-[24px] sm:text-[3.5vmin] text-[3vmin] my-5">
                We&#39;re kind to one another.
              </p>
            </div>
            <div>
              {" "}
              <img src="/OtherPages/OurCultureimg/02.svg" alt="" />
              <p className="lg:text-[24px] sm:text-[3.5vmin] text-[3vmin] my-5">
                We celebrate our differences.
              </p>
            </div>
            <div>
              {" "}
              <img src="/OtherPages/OurCultureimg/03.svg" alt="" />
              <p className="lg:text-[24px] sm:text-[3.5vmin] text-[3vmin] my-5">
                We celebrate our differences.
              </p>
            </div>
          </div>

          <p className="lg:text-[48px] md:text-[5vmin] sm:text-[4vmin] text-[3vmin] mt-3">
            {" "}
            Love to explore — Hack Days are time to work on passion projects,
            experiment, and learn. Our team enjoys tinkering.Most importantly,{" "}
          </p>
        </div>

        <div className="md:mt-20 -mt-10">
          <div className="div-1 grid lg:grid-cols-4 grid-cols-2 lg:space-x-7">
            <div>
              <p className="font-[400] text-white text-[10px] sm:text-lg lg:text-2xl">
                Users on marketplaces we&#39;ve created in 2023.
              </p>
              <p className="font-[700] text-white mt-4 text-sm sm:text-xl lg:text-5xl">
                8500+
              </p>
            </div>
            <div>
              <p className="font-[400] text-white text-[10px] sm:text-lg lg:text-2xl">
                Successfully finished projects with creativity.
              </p>
              <p className="font-[700] text-white mt-4 text-sm sm:text-xl lg:text-5xl">
                660+
              </p>
            </div>
            <div>
              <p className="font-[400] text-white text-[10px] sm:text-lg lg:text-2xl">
                Monthly visitors on our e-Commerce platform.
              </p>
              <p className="font-[700] text-white mt-4 text-sm sm:text-xl lg:text-5xl">
                6834+
              </p>
            </div>
            <div>
              <p className="font-[400] text-white text-[10px] sm:text-lg lg:text-2xl">
                Onboarding conversions growth increased.
              </p>
              <p className="font-[700] text-white mt-4 text-sm sm:text-xl lg:text-5xl">
                38%
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-28 flex justify-between flex-wrap md:flex-nowrap gap-5">
          <div className="">
            <p className="text-white font-[500] lg:text-4xl md:text-xl sm:text-xl text-sm">
              We work with brands and businesses to ensure they shine
            </p>
          </div>
          <div>
            <div className="flex justify-between gap-2 py-4">
              <p className="text-white lg:text-2xl sm:text-lg text-xs">
                Successfully finished projects with creativity.
              </p>
              <p className="text-white lg:text-2xl sm:text-lg text-xs">
                We value each and every human life placed our hands constantly
                work towards meeting the expectations of our customers.
              </p>
            </div>
            <hr className="bg-white h-1 opacity-10" />
            <div className="flex justify-between gap-2 py-4">
              <p className="text-white lg:text-2xl sm:text-lg text-xs">
                Work together for better branding solutions.
              </p>
              <p className="text-white lg:text-2xl sm:text-lg text-xs">
                We value each and every human life placed our hands constantly
                work towards meeting the expectations of our customers.
              </p>
            </div>
            <hr className="bg-white h-1 opacity-10" />
            <div className="flex justify-between gap-2 py-4">
              <p className="text-white lg:text-2xl sm:text-lg text-xs">
                Committed to deliver unique digital media.
              </p>
              <p className="text-white lg:text-2xl sm:text-lg text-xs">
                We value each and every human life placed our hands constantly
                work towards meeting the expectations of our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 flex justify-between items-center flex-wrap sm:space-x-4">
          <p className="text-white lg:text-[24px] font-[500] sm:text-[4vmin] text-[3vmin]">
            OPEN POSITION
          </p>
          <p className="text-white lg:text-[32px] font-[300] lg:leading-[48px] text-[3vmin]">
            Do you think you have what it takes to join us?
            <br />
            Reach out to hr@hudbil.com
          </p>
        </div>
      </div>

      <div className="bg-[#d9b490]">
        <Footer bginput="bg-[#d9b490]" />
      </div>
    </>
  );
}

export default OurCulture;
