import Navbar from "../components/navbar/Navbar";
import MainMenu from "../components/MenuMainpage/MainMenu";

function Services() {
  const images = [
    {
      src: "/Services/01.svg",
      alt: "Image 1",
      content: "Research",
      routepath: "/research",
    },
    {
      src: "/Services/02.svg",
      alt: "Image 1",
      content: "Strategy",
      routepath: "/strategy",
    },
    {
      src: "/Services/03.svg",
      alt: "Image 1",
      content: "Design",
      routepath: "/uiuxdesign",
    },
    {
      src: "/Services/04.svg",
      alt: "Image 1",
      content: "Development",
      routepath: "/development",
    },
    {
      src: "/Services/01.svg",
      alt: "Image 1",
      content: "Research",
      routepath: "/research",
    },
    {
      src: "/Services/02.svg",
      alt: "Image 1",
      content: "Strategy",
      routepath: "/strategy",
    },
    {
      src: "/Services/03.svg",
      alt: "Image 1",
      content: "Design",
      routepath: "/uiuxdesign",
    },
  ];
  return (
    <div className="bg-custom-service-page">
      <Navbar
        navbgcolor="bg-custom-service-nav"
        logohudbil="logo/logo2.svg"
        logohudbilleaf="/Navbarimg/hudbilleaflogo.svg"
        bgColor="bg-red-500"
        textColor="text-red-500"
        contentNav="Content & design focuses on creating engaging and coherent narratives, suits by visually pleasing elements to enhance user experience."
        textColorLiHover="text-[#353534]"
      />
      <MainMenu
        route="/ourservices"
        title="Our Services"
        description="As global leaders in UX UI, technology. We create brands and craft their identities, we deep dive into the building business needs and progress to position your brand and program it’s communication agenda. Our overall service aims at applying strategic led design to create resonating experiences and campaigns across mediums.Over the past six years, our team has created countless memories and achieved significant milestones."
        button="What we did"
        images={images}
      />
    </div>
  );
}

export default Services;
