import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/Footer/footer.jsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollDownButton from "../components/ScrollDown/scrolldown.jsx";
import HomeAnimation from "../components/HomePageAnimation/homepageanimation.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const sentenceRef = useRef(null);

  useEffect(() => {

    const words = document.querySelectorAll(".main-title");
    const words2 = document.querySelectorAll(".sub-title");
    const words3 = document.querySelectorAll(".heading1");
    const words4 = document.querySelectorAll(".heading2");
    const words5 = document.querySelectorAll(".heading3");
    const words6 = document.querySelectorAll(".heading4");

    gsap.fromTo(
      words,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      words2,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".box1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 1,
      }
    );
    gsap.fromTo(
      ".box2",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 1.2,
      }
    );
    gsap.fromTo(
      ".box3",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 1.4,
      }
    );
    gsap.fromTo(
      ".box4",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 1.6,
      }
    );
    gsap.fromTo(
      ".box5",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 1.8,
      }
    );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-section",
        start: "top 60%",
      },
    });

    tl1.fromTo(
      words3,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 2 }
    );

    tl1.fromTo(
      ".heading1-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 2 },
      0.5
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-section2",
        start: "top 60%",
      },
    });

    tl2.fromTo(
      words4,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 2 }
    );

    tl2.fromTo(
      ".heading2-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 2 },
      0.5
    );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-section3",
        start: "top 60%",
      },
    });

    tl3.fromTo(
      words5,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 2 }
    );

    tl3.fromTo(
      ".heading3-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 2 },
      0.5
    );

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-section4",
        start: "top 60%",
      },
    });

    tl4.fromTo(
      words6,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, ease: "power2.out", duration: 2 }
    );

    tl4.fromTo(
      ".heading4-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 2 },
      0.5
    );

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-grid",
        start: "top center",
      },
    });

    tl5.fromTo(
      ".logo1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      0
    );

    tl5.fromTo(
      ".logo2",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      0.2
    );
    tl5.fromTo(
      ".logo3",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      0.4
    );
    tl5.fromTo(
      ".logo4",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      0.6
    );

    tl5.fromTo(
      ".logo5",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      0.8
    );

    tl5.fromTo(
      ".logo6",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      1
    );
    tl5.fromTo(
      ".logo7",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      1.2
    );
    tl5.fromTo(
      ".logo8",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      1.4
    );

    tl5.fromTo(
      ".logo9",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      1.6
    );

    tl5.fromTo(
      ".logo10",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      1.8
    );
    tl5.fromTo(
      ".logo11",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      2
    );
    tl5.fromTo(
      ".logo12",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      2.2
    );

    tl5.fromTo(
      ".logo13",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      2.4
    );

    tl5.fromTo(
      ".logo14",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      2.6
    );
    tl5.fromTo(
      ".logo15",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      2.8
    );
    tl5.fromTo(
      ".logo16",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power2.out", duration: 1 },
      3
    );

    const chars = document.querySelectorAll('.char');

    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-section5",
        start: "top 70%",
        end: "bottom 40%",
        scrub: 0.75,

      },
    });

    tl6.fromTo(
      chars,
      { color: "#71797E",},
      { color: "#ffffff", stagger: 0.4, ease:"power2.out" },
      0
    );

    const chars2 = document.querySelectorAll('.char2');

    const tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-section6",
        start: "top 70%",
        end: "bottom 40%",
        scrub: 0.75,

      },
    });

    tl7.fromTo(
      chars2,
      { color: "#71797E",},
      { color: "#ffffff", stagger: 0.4, ease:"power2.out" },
      0
    );

    const tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: "#moving-img",
        start: "top 80%",
        end: "bottom center",
        scrub: 0.5,
      },
    });

    tl8.fromTo(".scale-anm", { scale: 0.8 }, { scale: 1, ease: "linear" });
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char">
        {char}
      </span>
    ));
  };

  const splitText2 = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char2">
        {char}
      </span>
    ));
  };

  const splitSentenceIntoWords = (sentence) => {
    return sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className="inline-block main-title">{word}</span>
        {index < sentence.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  const splitSentenceIntoWords2 = (sentence) => {
    return sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className="inline-block sub-title">{word}</span>
        {index < sentence.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  const splitSentenceIntoWords3 = (sentence) => {
    return sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className="inline-block heading1">{word}</span>
        {index < sentence.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  const splitSentenceIntoWords4 = (sentence) => {
    return sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className="inline-block heading2">{word}</span>
        {index < sentence.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  const splitSentenceIntoWords5 = (sentence) => {
    return sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className="inline-block heading3">{word}</span>
        {index < sentence.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  const splitSentenceIntoWords6 = (sentence) => {
    return sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className="inline-block heading4">{word}</span>
        {index < sentence.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  //Customers Love Section

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // slidesToScroll: 1,
    // ref: sliderRef,
    // beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
    {
      breakpoint: 768, // When the screen width is 768px or less
      settings: {
        slidesToShow: 2, // Show 2 slide
        slidesToScroll: 2, // Scroll 2 slide
      },
    },
    {
      breakpoint: 425, // When the screen width is 425px or less
      settings: {
        slidesToShow: 1, // Show 1 slide
        slidesToScroll: 1, // Scroll 1 slide
      },
    },
  ],
  };

  // Our Section
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      websiteURL: "https://www.hudbil.com/",
      brandLogo: "/Brands logo/Group 1000005984.png",
      brandPhoto: "/Brand img/Hudbil-Office 2.png",
      listItems: [
        "COMMUNICATION DESIGN",
        "WEBSITE DESIGN",
        "WIREFRAME DESIGN",
        "UI/UX DESIGN",
        "WIBESITE DEVELOPMENT",
        "APP DEVELOPMENT",
        "WEB DEVELOPMENT",
        "CHAT-BOT DEVLOPMENT",
      ],
      heading:
        "A Creative Design Development Agency. We have vast experience in developing both large projects and small start-ups. Thanks to a large team of experienced professionals, we are ready to solve the most complex tasks, especially in design and web development. Let’s work together to watch your business benefit.",
    },
    {
      websiteURL: "https://coltfox.com/",
      brandLogo: "/Brands logo/Group 1000006052.png",
      brandPhoto: "/Brand img/Coltfox-Office 1.png",
      listItems: [
        "CONTENT STRATEGY",
        "CONTENT DEVELOPMENT & MANAGEMENT",
        "TECHNICALSEO",
        "UI DISIGN",
        "MOBILE SEARCH",
        "SITE MIGGRATRION",
        " SEO AUDIT",
      ],
      heading:
        "A Creative Content + Digital Marketing Agency. We drive your business success value through tailor-made digital marketing solutions, we deliver innovative campaigns through an integration of SEO, content creation and social media, with the latest trends in digital marketing and analytics. Let’s work together to watch your business benefit.",
    },
    {
      websiteURL: "https://kalacode.com/",
      brandLogo: "/Brands logo/Group 1000006433.png",
      brandPhoto: "/Brand img/Kalacode-Office 1.png",
      listItems: [
        "AI CONSULTING",
        "AI IMPLEMENTATION",
        "WEB AR DEVELOPMENT",
        "APP AR. DEVELOPMENT",
        "VR DEVELOPMENT",
        "QR CODE GENERATOR",
        " 3D DESIGN",
      ],
      heading:
        "A Creative AI Consulting + AR + VR + QR Development Agency. we strive to shape a future where Al, AR /VR, and Blockchain seamlessly integrate into everyday life, enriching human interactions and unlocking new realms of possibilities. Let’s work together to watch your business benefit.",
    },
    {
      websiteURL: "https://mausapp.com/",
      brandLogo: "/Brands logo/Group 1000006011.png",
      brandPhoto: "/Brand img/Mausapp-Office 1.png",
      listItems: [
        "POWER OPTIONS",
        "APPLICATIONS REMOTE",
        "GYROSCOPE MOUSE",
        "VOICE TYPING",
        "CUSTOM INTERFACE",
        "BUTTON REMOTE",
      ],
      heading:
        "We have launched a “Gen-Z” Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A slick device attached to the smartphone can be operated as a mouse with all touch points, a product for the B2C, Market to enhance their productivity at work.",
    },
    {
      websiteURL: "https://www.hudbil.com/",
      brandLogo: "/Brands logo/Group 1000007382.png",
      brandPhoto: "/Brand img/vince-picipo-nv46796DgNM-unsplash 1.png",
      listItems: [
        "POWER OPTIONS",
        "APPLICATIONS REMOTE",
        "CROSS DEVICES",
        "GYROSCOPE MOUSE",
        "VOICE TYPING",
        "CUSTOM INTERFACE",
        "BUTTON REMOTE",
      ],
      heading:
        "We have launched a “Gen-Z” Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A slick device attached to the smartphone can be operated as a mouse with all touch points, a product for the B2C, Market to enhance their productivity at work.",
    },
    // Add more slides as needed
  ]);

  const handleForward = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleBackward = () => {
    setCurrentSlide(currentSlide - 1);
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

  return (
    <div className="bg-black">
      <Helmet>
        <title>Hudbil</title>
      </Helmet>

      <Navbar
        textColorLiHover="text-[#fc5f5f]"
        logohudbil="/logo/logo2.svg"
        logohudbilleaf="/logo/logo.svg"
        textColor="text-[#fc5f5f]"
      />

      <ScrollDownButton />

      <HomeAnimation />

      {/* bg-[url('/bg-fingerprint.png')] */}

      <main className="z-10 relative">
        {/* Landing Page */}
        <section className="lg:px-[100px] px-[10px] md:px-[50px] bg-center">
          {/* <div className="heading-section text-center text-[27px] sm:text-3xl my-[8rem] md:text-4xl lg:text-6xl">

          </div> */}

          {/* <div className="flex justify-center overflow-hidden items-baseline md:items-flex-end gap-2 md:gap-3 lg:gap-4 md:text-xl pb-1 "> */}
            {/* projects done by hudbil limited */}
            {/* <div className="text-center box1 ">
              <a href="https://www.hudbil.com/">
                <img
                  src="hudbil project image/logo 01.png"
                  alt="logo-1"
                  className="mx-auto lg:h-14"
                />{" "}
              </a>
            </div>
            |
            <div className="text-center box2">
              <a href="https://coltfox.com/">
                <img
                  src="hudbil project image/logo 02.png"
                  alt="logo-1"
                  className="mx-auto lg:h-12"
                />
              </a>
            </div>
            |
            <div className="text-center box3">
              <a href="https://kalacode.com/">
                <img
                  src="hudbil project image/logo 03.png"
                  alt="logo-1"
                  className="mx-auto lg:h-12"
                />
              </a>
            </div>
            |
            <div className="text-center box4">
              <a href="https://mausapp.com/">
                <img
                  src="hudbil project image/logo 04.png"
                  alt="logo-1"
                  className="mx-auto lg:h-12"
                />
              </a>
            </div>
            |
            <div className="text-center box5">
              <a href="#">
                <img
                  src="hudbil project image/logo 05.png"
                  alt="logo-1"
                  className="mx-auto lg:h-12"
                />
              </a>
            </div>
          </div> */}

          {/* 2nd Home Page Silder */}
           {/* <div className="heading-1 mt-10 md:mt-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:w-[40rem]">
              When your product rocks, but your branding sucks.
            </h1>

            <div className="flex my-3 lg:my-6 text-xs lg:text-sm items-center justify-between md:justify-normal lg:justify-around lg:w-[30rem] ">
              <div className="border-r h-fit pr-2 lg:pr-8 border-white">
                <p className="">Websites</p>
              </div>

              <div className="border-r h-fit pr-2 md:pl-2 lg:pr-10 border-white">
                <p className="">UI/UX</p>
              </div>

              <div className="border-r h-fit pr-2 md:pl-2  lg:pr-10 border-white">
                <p className="">BRANDING</p>
              </div>

              <div className=" md:pl-2">
                <p>VISUAL &nbsp; CONTENT</p>
              </div>
            </div>
          </div> */}
          {/* 3rd Home Page Silder */}
          {/* <div className="heading-2 mt-10 md:mt-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:w-[50rem]">
              Count us on robust hard-working and of small quirks.
            </h1>
            <h3 className=" my-3 lg:my-6 text-sm md:text-xl">
              INNOVATION AT YOUR FINGERTIPS
            </h3>
          </div> */}
          {/* Final Page */}
          <div className="heading-1 relative">
           <img className="h-[430px] -mt-6 object-cover mx-auto" src="/LandingPageFing.svg" alt="landing-bg-img" />
           <div className="md:absolute md:inset-y-3/4">
           <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:w-[40rem]">
            {splitSentenceIntoWords("A creative company that")}
            <br />
            {splitSentenceIntoWords("designs to engage & impact.")}
            </h1>

            <div className="flex my-2 lg:my-3 text-xs lg:text-xs items-center justify-between md:justify-normal lg:justify-around lg:w-[30rem] ">
              <div className="border-r h-fit pr-2 lg:pr-8 border-white">
                <p className="">{splitSentenceIntoWords2("RESEARCH")}</p>
              </div>

              <div className="border-r h-fit pr-2 md:pl-2 lg:pr-10 border-white">
              <p className="">{splitSentenceIntoWords2("STRATEGY")}</p>
              </div>

              <div className="border-r h-fit pr-2 md:pl-2  lg:pr-10 border-white">
              <p className="">{splitSentenceIntoWords2("DESIGN")}</p>
              </div>

              <div className=" md:pl-2">
              <p className="">{splitSentenceIntoWords2("DEVELOPMENT")}</p>
              </div>
            </div>
           </div>
          </div>
        </section>
        {/* What we do */}
        <section className=" p-3 md:p-10 lg:px-[100px]">
          <div className="mt-10 md:mt-20 overflow-hidden">
            <h1 className="text-section overflow-hidden lg:text-[70px] font-[600] md:text-[60px] text-[40px]">
              {splitSentenceIntoWords3("What we do")}
            </h1>
            <h3 className="mt-5 heading1-content overflow-hidden lg:text-[28px] font-[400] md:text-[23px] text-[17px]">
              We are a design & development agency with a niche approach that
              creates impact and engages brands with immersive digital
              experiences that bring you a return on creativity. We love solving
              thorny problems with smart, custom software design and development
              in one place.
            </h3>
          </div>
        </section>
        <section>
          <marquee scrollamount="15">
            <h1 className="my-5 md:my-10 font-thin text-[90px]">
              Hudbil is a progressive and insightful design and development
              agency, technically and creatively skilled to translate your brand
              into its best digital self.
            </h1>
          </marquee>
        </section>
        <section>
          <div className="about-us">
            {/* Images section */}
            <div className="mx-3 flex flex-wrap md:justify-center mt-10">
              <div className="w-full md:w-1/2 lg:w-1/2 md:px-20">
                <div className="text-sm lg:text-3xl">
                  <div className="lg:w-[35vw] md:w-[20rem] md:-ml-10 scale-90 hover:scale-95 md:hover:scale-110 transition-all duration-700">
                    <Link to="/research">
                      <img
                        src="images/Hudbil-Research 1.png"
                        alt="img-1"
                        className="w-full h-full"
                      />
                    </Link>

                    <h1 className="my-4 font-bold text-lg lg:text-[28px] flex items-center lg:mt-5">
                      <hr className="w-3 sm:w-6 mx-3" /> RESEARCH <br />
                    </h1>
                    <p className="research-img text-sm sm:text-xl lg:text-3xl lg:leading-10 md:pl-12">
                      Our extensive research service helps us understand exactly
                      what our client’s audiences are looking for, and our
                      process accountability helps us offer UI/UX, development
                      and competitors’ research to scale brands worldwide.
                    </p>
                  </div>

                  <div className="lg:mt-28 mt-16 lg:w-[40vw] md:w-[20rem] md:-ml-10 scale-90 hover:scale-95 md:hover:scale-110 transition-all duration-700">
                    <Link to="/uiuxdesign">
                      {" "}
                      <img
                        src="images/Hudbil-Design 1.png"
                        alt="img-3"
                        className=" w-full h-auto"
                      />
                    </Link>

                    <h1 className="my-4 font-bold text-lg lg:text-[28px] flex items-center lg:mt-5">
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
                <div className="">
                  <div className="mt-5 lg:w-[29vw] md:w-[18.5rem] scale-90 hover:scale-95 md:hover:scale-110 transition-all duration-700">
                    <Link to="/strategy">
                      {" "}
                      <img
                        src="images/Hudbil-Strategy 1.png"
                        alt="img-2"
                        className="w-full h-auto"
                      />
                    </Link>

                    <h1 className="my-4 font-bold text-lg lg:text-[28px] flex items-center lg:mt-5">
                      <hr className="w-3 sm:w-6 mx-3" /> STRATEGY
                    </h1>
                    <p className="research-img text-sm sm:text-xl lg:text-3xl lg:leading-10 md:pl-12">
                      Our extensive strategy service helps our clients
                      understand their pain points and empathise with their
                      audience, strategies user experiences, products and
                      services to scale brands’ success worldwide.
                    </p>
                  </div>

                  <div className="lg:mt-40 mt-16 lg:w-[30vw] md:w-[17rem] scale-90 hover:scale-95 md:hover:scale-110 transition-all duration-700">
                    <Link to="/development">
                      <img
                        src="images/Hudbil-Development 1.png"
                        alt="img-4"
                        className="w-full h-auto"
                      />
                    </Link>

                    <h1 className="my-4 font-bold text-lg lg:text-[28px] lg:leading-9 flex items-center lg:mt-5">
                      <hr className="w-3 sm:w-6 mx-3" /> BE-SPOKEN DEVELOPMENT
                    </h1>
                    <p className="research-img text-sm sm:text-xl lg:text-3xl lg:leading-10 md:pl-12">
                      We spend time understanding your unique business
                      challenge, creating flexible software roadmaps, and
                      developing secure, scalable solutions that deliver ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Brands */}
        <section className="p-3 sm:p-0">
          <div className="my-16 md:my-16 overflow-hidden lg:px-[100px] px-3">
            <div id="textSection">
              <div className="wrapper text-section2">
                <h1 className="lg:text-[70px] overflow-hidden font-[600] md:text-[60px] text-[40px]">
                  {splitSentenceIntoWords4("Our brands")}
                </h1>
              </div>
            </div>

            <h3 className="lg:text-[28px] heading2-content overflow-hidden font-[400] md:text-[23px] text-[17px] mt-10">
              Hudbil Private Limited is a reliable company, with multiple brands
              under the one umbrella. We are here to enable you with top-notch
              digital solutions & products through a proven cost-saving model.
              This allows you to scale, optimise, expand, and enhance your
              business with an individual approach. This is our game style. From
              turning spreadsheets into custom solutions, integrating multiple
              platforms or automating manual processes, we can tackle any
              challenge.
            </h3>
          </div>

          <div className="mt-20 lg:pl-[100px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <div className="md:flex justify-between my-5 ">
                  <div className="md:w-1/2">
                    <div className="p-3 mt-5 flex justify-between items-center h-[60px]">
                      {" "}
                      <img
                        src={slide.brandLogo}
                        alt="Brand Logo"
                        className="w-[8rem] md:w-[12rem]"
                      />
                      <div className="md:hidden">
                        {currentSlide === 0 ? (
                          <button onClick={handleForward}>
                            {" "}
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
                                clipPath="url(#clip0_4965_1810)"
                                className="right-arrow-animation"
                              >
                                <g clipPath="url(#clip1_4965_1810)">
                                  <path
                                    d="M24.8002 8L28.8001 12M28.8001 12L24.8002 16M28.8001 12H19.2002"
                                    stroke="white"
                                    strokeLinecap="square"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_4965_1810">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(16 4)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_4965_1810">
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
                        ) : currentSlide === slides.length - 1 ? (
                          <button onClick={handleBackward}>
                            {" "}
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
                                clipPath="url(#clip0_4965_1804)"
                                className="left-arrow-animation"
                              >
                                <g clipPath="url(#clip1_4965_1804)">
                                  <path
                                    d="M23.2002 8L19.2002 12M19.2002 12L23.2002 16M19.2002 12H28.8001"
                                    stroke="white"
                                    strokeLinecap="square"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_4965_1804">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(16 4)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_4965_1804">
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
                        ) : (
                          <div className="flex justify-around gap-2 ">
                            <button onClick={handleBackward}>
                              {" "}
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
                                  clipPath="url(#clip0_4965_1804)"
                                  className="left-arrow-animation"
                                >
                                  <g clipPath="url(#clip1_4965_1804)">
                                    <path
                                      d="M23.2002 8L19.2002 12M19.2002 12L23.2002 16M19.2002 12H28.8001"
                                      stroke="white"
                                      strokeLinecap="square"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_4965_1804">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(16 4)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_4965_1804">
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
                            <button onClick={handleForward}>
                              {" "}
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
                                  clipPath="url(#clip0_4965_1810)"
                                  className="right-arrow-animation"
                                >
                                  <g clipPath="url(#clip1_4965_1810)">
                                    <path
                                      d="M24.8002 8L28.8001 12M28.8001 12L24.8002 16M28.8001 12H19.2002"
                                      stroke="white"
                                      strokeLinecap="square"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_4965_1810">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(16 4)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_4965_1810">
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
                        )}
                      </div>
                    </div>
                    <div className="mt-10 text-sm md:text-base lg:text-[28px] xl:h-[320px] lg:leading-[38px] font-light ">
                      {" "}
                      <h2 className="p-4 lg:p-0">{slide.heading}</h2>
                    </div>
                    <div className="p-4 lg:p-0 mt-10 md:hidden">
                      {" "}
                      <img
                        src={slide.brandPhoto}
                        alt="Brand Photo"
                        className="w-[full] h-[auto]"
                      />
                    </div>
                    <div className="md:h-[230px] lg:h-[300px] text-sm md:text-base lg:text-2xl font-[300]">
                      <ul>
                        {slide.listItems.map((item, index) => (
                          <li key={index} className="my-2">
                            <div className="flex items-center">
                              <hr className="w-3 sm:w-6 mx-3" />
                              <p className="inline">{item}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:flex md:justify-between md:items-center p-1 md:mt-20 lg:mt-9">
                      {" "}
                      <button
                        type="button"
                        className="btn-animate-white text-xs md:text-lg px-4 py-2 md:px-6 border border-white rounded-full"
                      >
                        <span></span>
                        Know More
                      </button>
                      {/* Desktop Buttons*/}
                      <div className="hidden md:flex md:justify-between lg:mr-2">
                        {currentSlide === 0 ? (
                          <button onClick={handleForward}>
                            {" "}
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
                                clipPath="url(#clip0_5169_1365)"
                                className="right-arrow-animation"
                              >
                                <g clipPath="url(#clip1_5169_1365)">
                                  <path
                                    d="M24.7992 8L28.7992 12M28.7992 12L24.7992 16M28.7992 12H19.1992"
                                    stroke="white"
                                    strokeLinecap="square"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_5169_1365">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(16 4)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_5169_1365">
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
                        ) : currentSlide === slides.length - 1 ? (
                          <button onClick={handleBackward}>
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
                                clipPath="url(#clip0_4604_29827)"
                                className="left-arrow-animation"
                              >
                                <g clipPath="url(#clip1_4604_29827)">
                                  <path
                                    d="M23.1992 8.5L19.1992 12.5M19.1992 12.5L23.1992 16.5M19.1992 12.5H28.7992"
                                    stroke="white"
                                    strokeLinecap="square"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_4604_29827">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(16 4.5)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_4604_29827">
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
                        ) : (
                          <div className="space-x-2">
                            <button onClick={handleBackward}>
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
                                  clipPath="url(#clip0_4604_29827)"
                                  className="left-arrow-animation"
                                >
                                  <g clipPath="url(#clip1_4604_29827)">
                                    <path
                                      d="M23.1992 8.5L19.1992 12.5M19.1992 12.5L23.1992 16.5M19.1992 12.5H28.7992"
                                      stroke="white"
                                      strokeLinecap="square"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_4604_29827">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(16 4.5)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_4604_29827">
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
                            <button onClick={handleForward}>
                              {" "}
                              <svg
                                width="48"
                                height="24"
                                viewBox="0 0 48 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="47"
                                  height="23"
                                  rx="11.5"
                                  stroke="white"
                                />
                                <g clipPath="url(#clip0_5169_1365)">
                                  <g clipPath="url(#clip1_5169_1365)">
                                    <path
                                      d="M24.7992 8L28.7992 12M28.7992 12L24.7992 16M28.7992 12H19.1992"
                                      stroke="white"
                                      strokeLinecap="square"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <clipPath id="clip0_5169_1365">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(16 4)"
                                    />
                                  </clipPath>
                                  <clipPath id="clip1_5169_1365">
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
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Desktop img */}
                  <div className="hidden md:block">
                    {" "}
                    <a href={`${slide.websiteURL}`}>
                      <img
                        src={slide.brandPhoto}
                        alt="Brand Photo"
                        className="min-h-fit lg:h-[620px] lg:min-h-[830px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Project */}
        <section className="p-3 md:p-10 lg:px-[100px]">
          <div className="mt-10 md:mt-20 overflow-hidden">
            <h1 className="lg:text-[70px] overflow-hidden text-section3 font-[600] md:text-[60px] text-[40px]">
              {splitSentenceIntoWords5("Latest Projects")}
            </h1>
            <h3 className="lg:text-[28px] heading3-content overflow-hidden font-[400] md:text-[23px] text-[17px] mt-10">
              We at Hudbil, believe in transforming ideas into the design
              creating the next level of digital products. We&39;ve helped lots
              of Startups, technology SMEs, and Fortune 500 companies to reach
              success, grow and cover business goals. Let&39;s make your project
              the next big thing.
            </h3>
          </div>

          <div className="mt-10 mb-4 sm:mb-0 lg:mb-6 mx-2 md:mt-20 md:mx-4 lg:mt-40 lg:mx-12">
            <div className="relative pt-2 md:pt-6 group cursor-pointer cursor-effect">
              <Link to="">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extralight md:text-2xl lg:text-3xl">
                    BlueMail
                  </div>
                  <div className="text-xs font-extralight md:text-sm lg:text-lg">
                    Website App
                  </div>
                </div>
                <div className="relative h-[1px] w-full mt-2 md:mt-6 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#3a3a3a] w-full transition-transform duration-500 group-hover:translate-x-0 origin-left"></div>
                  <div className="absolute top-0 left-0 h-full bg-[#ffffff] w-full transform -translate-x-full transition-transform duration-500 group-hover:fillAnimation"></div>
                </div>

                <div className="absolute inset-0 items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <img
                    src="/Latest Projects Hovering images/01.svg"
                    alt="Hover Image"
                    className="w-[30%] transform transition-transform scale-75 duration-700 group-hover:scale-100"
                  />
                </div>
              </Link>
            </div>

            <div className="relative pt-2 md:pt-6 group cursor-pointer cursor-effect">
              <Link to="">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extralight md:text-2xl lg:text-3xl">
                    Finosoft
                  </div>
                  <div className="text-xs font-extralight md:text-sm lg:text-lg">
                    eCommerce
                  </div>
                </div>
                <div className="relative h-[1px] w-full mt-2 md:mt-6 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#3a3a3a] w-full transition-transform duration-500 group-hover:translate-x-0 origin-left"></div>
                  <div className="absolute top-0 left-0 h-full bg-[#ffffff] w-full transform -translate-x-full transition-transform duration-500 group-hover:fillAnimation"></div>
                </div>
                <div className="absolute inset-0 items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <img
                    src="/Latest Projects Hovering images/02.svg"
                    alt="Hover Image"
                    className="w-[30%] transform transition-transform scale-75 duration-700 group-hover:scale-100"
                  />
                </div>
              </Link>
            </div>
            <div className="relative pt-2 md:pt-6 group cursor-pointer cursor-effect">
              <Link to="">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extralight md:text-2xl lg:text-3xl">
                    Monstrack
                  </div>
                  <div className="text-xs font-extralight md:text-sm lg:text-lg">
                    App
                  </div>
                </div>
                <div className="relative h-[1px] w-full mt-2 md:mt-6 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#3a3a3a] w-full transition-transform duration-500 group-hover:translate-x-0 origin-left"></div>
                  <div className="absolute top-0 left-0 h-full bg-[#ffffff] w-full transform -translate-x-full transition-transform duration-500 group-hover:fillAnimation"></div>
                </div>
                <div className="absolute inset-0 items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <img
                    src="/Latest Projects Hovering images/03.svg"
                    alt="Hover Image"
                    className="w-[30%] transform transition-transform scale-75 duration-700 group-hover:scale-100"
                  />
                </div>
              </Link>
            </div>
            <div className="relative pt-2 md:pt-6 group cursor-pointer cursor-effect">
              <Link to="">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extralight md:text-2xl lg:text-3xl">
                    Valleycovers
                  </div>
                  <div className="text-xs font-extralight md:text-sm lg:text-lg">
                    Website
                  </div>
                </div>
                <div className="relative h-[1px] w-full mt-2 md:mt-6 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#3a3a3a] w-full transition-transform duration-500 group-hover:translate-x-0 origin-left"></div>
                  <div className="absolute top-0 left-0 h-full bg-[#ffffff] w-full transform -translate-x-full transition-transform duration-500 group-hover:fillAnimation"></div>
                </div>
                <div className="absolute inset-0 items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <img
                    src="/Latest Projects Hovering images/04.svg"
                    alt="Hover Image"
                    className="w-[30%] transform transition-transform scale-75 duration-700 group-hover:scale-100"
                  />
                </div>
              </Link>
            </div>
            <div className="relative pt-2 md:pt-6 group cursor-pointer cursor-effect">
              <Link to="">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extralight md:text-2xl lg:text-3xl">
                    Capixai
                  </div>
                  <div className="text-xs font-extralight md:text-sm lg:text-lg">
                    eCommerce
                  </div>
                </div>
                <div className="relative h-[1px] w-full mt-2 md:mt-6 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#3a3a3a] w-full transition-transform duration-500 group-hover:translate-x-0 origin-left"></div>
                  <div className="absolute top-0 left-0 h-full bg-[#ffffff] w-full transform -translate-x-full transition-transform duration-500 group-hover:fillAnimation"></div>
                </div>
                <div className="absolute inset-0 items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <img
                    src="/Latest Projects Hovering images/05.svg"
                    alt="Hover Image"
                    className="w-[30%] transform transition-transform scale-75 duration-700 group-hover:scale-100"
                  />
                </div>
              </Link>
            </div>
            <div className="relative pt-2 md:pt-6 group cursor-pointer cursor-effect">
              <Link to="">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extralight md:text-2xl lg:text-3xl">
                    Shimmer
                  </div>
                  <div className="text-xs font-extralight md:text-sm lg:text-lg">
                    Website
                  </div>
                </div>
                <div className="relative h-[1px] w-full mt-2 md:mt-6 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#3a3a3a] w-full transition-transform duration-500 group-hover:translate-x-0 origin-left"></div>
                  <div className="absolute top-0 left-0 h-full bg-[#ffffff] w-full transform -translate-x-full transition-transform duration-500 group-hover:fillAnimation"></div>
                </div>
                <div className="absolute inset-0 items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <img
                    src="/Latest Projects Hovering images/06.svg"
                    alt="Hover Image"
                    className="w-[30%] transform transition-transform scale-75 duration-700 group-hover:scale-100"
                  />
                </div>
              </Link>
            </div>
            <div className="relative pt-2 md:pt-6 group cursor-pointer cursor-effect">
              <Link to="">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-extralight md:text-2xl lg:text-3xl">
                    Nettango
                  </div>
                  <div className="text-xs font-extralight md:text-sm lg:text-lg">
                    Website
                  </div>
                </div>
                <div className="relative h-[1px] w-full mt-2 md:mt-6 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#3a3a3a] w-full transition-transform duration-500 group-hover:translate-x-0 origin-left"></div>
                  <div className="absolute top-0 left-0 h-full bg-[#ffffff] w-full transform -translate-x-full transition-transform duration-500 group-hover:fillAnimation"></div>
                </div>
                <div className="absolute inset-0 items-center hidden lg:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <img
                    src="/Latest Projects Hovering images/07.svg"
                    alt="Hover Image"
                    className="w-[30%] transform transition-transform scale-75 duration-700 group-hover:scale-100"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="p-3 md:p-5 lg:px-[100px]">
          <div className="mt-10 md:mt-20 overflow-hidden">
            <h1 className="lg:text-[70px] text-section4 overflow-hidden font-[600] md:text-[60px] text-[40px]">
            {splitSentenceIntoWords6("Our Customers")}
            </h1>
            <h3 className="lg:text-[28px] heading4-content font-[400] md:text-[23px] text-[17px] mt-5">
              We work with ambitious companies and organizations looking for a
              devoted long-term digital partner.
            </h3>
          </div>

          <div className="mt-[97px]">
            {/* Repeat this block for each customer logo */}
            <div className="grid grid-cols-4 logo-grid overflow-hidden">
              <div className="flex justify-center items-center logo1 overflow-hidden">
                <img
                  src="/customer logo/01.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
              <div className="flex justify-center items-center logo2 overflow-hidden">
                <img
                  src="/customer logo/02.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
              <div className="flex justify-center items-center logo3 overflow-hidden">
                <img
                  src="/customer logo/03.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
              <div className="flex justify-center items-center logo4 overflow-hidden">
                <img
                  src="/customer logo/04.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
            </div>
            {/* Repeat this block for each customer logo */}
            <div className="grid grid-cols-4 logo-grid2">
              <div className="flex justify-center items-center logo5">
                <img
                  src="/customer logo/05.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>

              <div className="flex justify-center items-center logo6">
                <img
                  src="/customer logo/06.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>

              <div className="flex justify-center items-center logo7">
                <img
                  src="/customer logo/07.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
              <div className="flex justify-center items-center logo8">
                <img
                  src="/customer logo/08.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
            </div>
            {/* Repeat this block for each customer logo */}

            <div className="grid grid-cols-4 logo-grid3">
              <div className="flex justify-center items-center logo9">
                <img
                  src="/customer logo/16.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>

              {/*changing img*/}
              <div className="flex justify-center items-center logo10">
                <img
                  src="/customer logo/10.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>

              <div className="flex justify-center items-center logo11">
                <img
                  src="/customer logo/17.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
              <div className="flex justify-center items-center logo12">
                <img
                  src="/customer logo/18.svg"
                  alt=""
                  className="customer-companies w-14 md:w-32 lg:w-[12vw]"
                />
              </div>
            </div>

            {/* Repeat this block for each customer logo */}
            <div className="grid grid-cols-4 md:mt-2 lg:mt-4 logo-grid4">
              <div className="flex justify-center items-center logo13">
                <img
                  src="/customer logo/19.svg"
                  alt=""
                  className="w-14 sm:w-28 lg:w-[9vw]"
                />
              </div>

              <div className="flex justify-center items-center logo14">
                <img
                  src="/customer logo/11.svg"
                  alt=""
                  className="w-10 sm:w-20 lg:w-[7vw]"
                />
              </div>

              <div className="flex justify-center items-center logo15">
                <img
                  src="/customer logo/12.svg"
                  alt=""
                  className="w-10 sm:w-20 lg:w-[7vw]"
                />
              </div>
              <div className="flex justify-center items-center logo16">
                <img
                  src="/customer logo/13.svg"
                  alt=""
                  className="w-10 sm:w-20 lg:w-[7vw]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Love  */}

        <section className="p-3 slide-scroll md:p-10 lg:px-[100px]">
          <div className="mt-10 md:mt-28">
            <div className="mt-2 lg:mr-2 flex justify-between items-center h-[60px]">
              <h1 className="lg:text-[70px] text-section5 font-[600] md:text-[60px] text-4xl">
              {splitText('Customers love')}
              </h1>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  title="left-arrow"
                  id="left-arrow-customer"
                  onClick={handlePrevClick}
                >
                  <svg
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="nav-svg cursor-pointer"
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
                      clipPath="url(#clip0_5786_12000)"
                      className="left-arrow-animation"
                    >
                      <g clipPath="url(#clip1_5786_12000)">
                        <path
                          d="M23.1992 8L19.1992 12M19.1992 12L23.1992 16M19.1992 12H28.7992"
                          stroke="white"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_5786_12000">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(16 4)"
                        />
                      </clipPath>
                      <clipPath id="clip1_5786_12000">
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
                <button
                  type="button"
                  title="right-arrow"
                  id="right-arrow-customer"
                  onClick={handleNextClick}
                >
                  <svg
                    width="56"
                    height="24"
                    viewBox="0 0 56 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="nav-svg"
                  >
                    <rect
                      x="8.5"
                      y="0.5"
                      width="47"
                      height="23"
                      rx="11.5"
                      stroke="white"
                      className="background-animation"
                    />
                    <g
                      clipPath="url(#clip0_5786_12005)"
                      className="right-arrow-animation"
                    >
                      <g clipPath="url(#clip1_5786_12005)">
                        <path
                          d="M32.7992 8L36.7992 12M36.7992 12L32.7992 16M36.7992 12H27.1992"
                          stroke="white"
                          strokeLinecap="square"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_5786_12005">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(24 4)"
                        />
                      </clipPath>
                      <clipPath id="clip1_5786_12005">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(24 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="overflow-hidden">
              <Slider {...settings} ref={sliderRef}>
                {customerData.map((item, index) => (
                  <div key={index} className="mt-10 px-4">
                    <img src={item.img} alt="" />
                    <h3 className="mt-4 md:mt-8 lg:mt-16 text-[8px] sm:text-xs md:text-base lg:text-xl md:h-[250px] ">
                      {item.h3}
                    </h3>
                    <h6 className="mt-2 text-[8px] sm:text-xs lg:text-sm">{item.h6_1}</h6>
                    <h6 className="text-[8px] sm:text-xs lg:text-sm">{item.h6_2}</h6>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        <section className="p-3 md:p-10 lg:px-[100px]">
          <div className="mt-10 md:mt-20">
            <h1 className="lg:text-[70px] text-section6 font-[600] md:text-[60px] text-[40px]">
            {splitText2('Resource')}
            <br/>
            {splitText2('for you')}
            </h1>
            <h3 className="mt-5 text-sm font-light md:text-base lg:text-2xl">
              More than just a digital agency, aside from beautiful websites and
              applications, we love solving thorny problems with smart, custom
              software. From turning spreadsheets into custom solutions,
              integrating multiple platforms or automating manual processes, we
              can tackle any challenge.
            </h3>
          </div>

          <div className="mt-20 mx-5">
            <div className="flex flex-col md:gap-8 gap-12 md:flex-row">
              <div className="resources-img mt-3">
                <img
                  src="/Resources for you section/Blog-Drafting-Branding 1.png"
                  alt=""
                />
                <h3 className="font-bold flex items-center mt-3 text-xl">
                  <hr className="w-3 sm:w-6 mx-3 " /> DESIGN YOUR BRAND BEFORE
                  ITS LATE
                </h3>
                <p className="font-thin pl-8 md:pl-12 mt-3 opacity-60">
                  26-02-2024
                </p>
                <p className="font-thin pl-8 md:pl-12 mt-3 text-2xl">
                  Saving the planet through innovative low carbon technologies
                </p>
                <div className="pl-10 mt-3">
                  <button
                    type="button"
                    className="btn-animate-white  w-[147px] h-[49px] text-[20px] md:text-lg border border-white rounded-full"
                  >
                    <span></span>
                    Know More
                  </button>
                </div>
              </div>

              <div className="resources-img mt-3">
                <img src="/Resources for you section/image 294.png" alt="" />
                <h3 className="font-bold flex items-center mt-3 text-xl">
                  <hr className="w-3 sm:w-6 mx-3 " /> DESIGN YOUR BRAND BEFORE
                  ITS LATE
                </h3>
                <p className="font-thin pl-8 md:pl-12 mt-3 opacity-60">
                  26-02-2024
                </p>
                <p className="font-thin pl-8 md:pl-12 mt-3 text-2xl">
                  Saving the planet through innovative low carbon technologies
                </p>
                <div className="pl-10 mt-3">
                  <button
                    type="button"
                    className="btn-animate-white  w-[147px] h-[49px] text-[20px] md:text-lg border border-white rounded-full"
                  >
                    <span></span>
                    Know More
                  </button>
                </div>
              </div>

              <div className="resources-img mt-3">
                <img src="/Resources for you section/image 298.png" alt="" />
                <h3 className="font-bold flex items-center mt-3 text-xl">
                  <hr className="w-3 sm:w-6 mx-3 " /> DESIGN YOUR BRAND BEFORE
                  ITS LATE
                </h3>
                <p className="font-thin pl-8 md:pl-12 mt-3 opacity-60">
                  26-02-2024
                </p>
                <p className="font-thin pl-8 md:pl-12 mt-3 text-2xl">
                  Saving the planet through innovative low carbon technologies
                </p>
                <div className="pl-10 mt-3">
                  <button
                    type="button"
                    className="btn-animate-white w-[147px] h-[49px] text-[20px] md:text-lg border border-white rounded-full"
                  >
                    <span></span>
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Moving Img */}
      <div
        id="moving-img"
        className="mt-10 h-[200px] overflow-hidden md:h-[400px] lg:h-[600px] "
      >
        <img
          src="/images/Worldmap 1.png"
          alt=""
          className="scale-anm w-full h-auto"
        />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
