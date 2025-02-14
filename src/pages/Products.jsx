import Navbar from "../components/navbar/Navbar";
import MainMenu from "../components/MenuMainpage/MainMenu";

function Products() {
  const images = [
    {
      src: "/Works/01.svg",
      alt: "Image 1",
      content: "Our services",
      routepath: "/ourservices",
    },
    {
      src: "/Works/02.svg",
      alt: "Image 1",
      content: "UI/UX Design",
      routepath: "/uiuxdesign",
    },
    {
      src: "/Works/03.svg",
      alt: "Image 1",
      content: "UI/UX Design",
      routepath: "/uiuxdesign",
    },
    {
      src: "/Works/03.svg",
      alt: "Image 1",
      content: "Development",
      routepath: "/development",
    },
    {
      src: "/Works/01.svg",
      alt: "Image 1",
      content: "Our Brands",
      routepath: "/#",
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
  return (
    <div className="bg-custom-grey">
      <Navbar
        navbgcolor="bg-sky-400"
        logohudbil="logo/logo2.svg"
        logohudbilleaf="/Navbarimg/hudbilleaflogo.svg"
        bgColor="bg-red-500"
        textColor="text-red-500"
        contentNav="Content & design focuses on creating engaging and coherent narratives, suits by visually pleasing elements to enhance user experience."
        textColorLiHover="text-black"
      />
      <MainMenu
        route="/ourproducts"
        title="Our Products"
        description="As global leaders in UX UI, technology. We create brands and craft their identities, we deep dive into the building business needs and progress to position your brand and program it’s communication agenda. Our overall service aims at applying strategic led design to create resonating experiences and campaigns across mediums.Over the past six years, our team has created countless memories and achieved significant milestones."
        images={images}
        button="Request demo"
      />
    </div>
  );
}

export default Products;
