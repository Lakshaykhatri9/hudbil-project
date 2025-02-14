import Navbar from "../components/navbar/Navbar";
import MainMenu from "../components/MenuMainpage/MainMenu";

function AboutUs() {
  const images = [
    {
      src: "/Aboutus/alvan-nee-DD3v7ie7seg-unsplash 4.png",
      alt: "Our Story img",
      content: "Our story",
      routepath: "/ourstory",
    },
    {
      src: "/Aboutus/creatopy-ZVAKWvq8J98-unsplash 1.png",
      alt: "Our Culture img",
      content: "Our culture",
      routepath: "/ourculture",
    },
    {
      src: "/Aboutus/jean-philippe-delberghe-YwSf1o8s79c-unsplash 2.png",
      alt: "Our Awards img",
      content: "Our awards",
      routepath: "/ourawards",
    },
    {
      src: "/Aboutus/image 294.png",
      alt: "Our Industries img",
      content: "Our industries",
      routepath: "/ourindustries",
    },
    {
      src: "/Aboutus/our-team 1.png",
      alt: "Our Team img",
      content: "Our team",
      routepath: "/ourteam",
    },
    {
      src: "/Aboutus/alvan-nee-DD3v7ie7seg-unsplash 4.png",
      alt: "Faq img",
      content: "FAQ'S",
      routepath: "/faq",
    },
    {
      src: "/Aboutus/image 293.png",
      alt: "Our Courses img",
      content: "Our Courses",
      routepath: "/ourcourses",
    },
    {
      src: "/Aboutus/image 294.png",
      alt: "Job Opening img",
      content: "Job Opening",
      routepath: "#",
    },
  ];
  return (
    <>
      <div className="bg-[#67765D] lg:overflow-auto lg:h-screen lg:w-screen">
        <Navbar
          navbgcolor="bg-custom-about-nav"
          logohudbil="logo/logo2.svg"
          logohudbilleaf="/Navbarimg/hudbilleaflogo.svg"
          bgColor="bg-red-500"
          textColor="text-red-500"
          contentNav="Transform your online presence with our professional web development services, tailored to elevate your brand's digital footprint."
          textColorLiHover="text-[#67765D]"
        />
        <MainMenu
          route="/aboutus"
          title="About Us"
          button="What We do"
          description="Innovation at your fingertips is the spark Igniting between audience
            and brand is what we do. Creative ideas that turn heads, draw eyes,
            distract, disrupt and engage &ndash; in short, strategic
            communication solutions that get attention. It&#8216;s an inimitable
            approach that has become hudbil&#8216;s trademark and competitive
            advantage, capturing the imaginations of more than 200+ unique
            brands in six years. we love solving thorny problems with smart,
            custom software."
          images={images}
        />
      </div>
    </>
  );
}

export default AboutUs;
