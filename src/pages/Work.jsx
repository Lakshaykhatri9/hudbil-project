import Navbar from "../components/navbar/Navbar";
import MainMenu from "../components/MenuMainpage/MainMenu";

function Work() {
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
  return (
    <div className="bg-red-950">
      <Navbar
        navbgcolor="bg-custom-service-nav"
        logohudbil="logo/logo2.svg"
        logohudbilleaf="/Navbarimg/hudbilleaflogo.svg"
        bgColor="bg-red-500"
        textColor="text-red-500"
        contentNav="Wire-framing & prototyping allow us to visualise, test the concepts early, ensuring a practical and user-friendly design before development."
        textColorLiHover="text-red-950"
      />
      <MainMenu
        route="/ourwork"
        title="Our Work"
        description="From turning spreadsheets into custom solutions, integrating multiple platforms or automating manual processes, we can tackle any challenge. Everything we do stems from a brand’s agenda. In our 6+ year existence, we have worked with brands from over 15 sectors, crafting creative solutions that give your brand the drama it requires to engage, compete, and thrive."
        images={images}
        button="Let's talk"
      />
    </div>
  );
}

export default Work;
