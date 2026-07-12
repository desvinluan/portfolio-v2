import { useState } from "react";
import Header from "./components/Header";
import BannerImage from "./assets/images/banner.png";
import Me from "./assets/images/me.png";
import Rab from "./assets/images/rab.png";
import BgImage from "./assets/images/bg-section.png";
import ProjectCard from "./components/cards/cardOne";
import { ChartPie, Code, Palette } from "lucide-react";
import PaperClip from "./assets/images/paperclip.png";
import Pin from "./assets/images/pin.png";
import BgImageOne from "./assets/images/bg-section-1.png";
import PlateFork from "./assets/images/plateandfork.png";
import Footer from "./components/Footer";
import CustomCursor from "./my-component/CustomCursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomCursor />

      <div className="container mx-auto">
        <div>
          <Header />
        </div>
        <main>
          <section
            className="flex flex-col items-center justify-center py-40 bg-background"
            id="home"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-4xl font-bold text-center max-w-2xl text-primary">
                Product designer with a love for clean UI and low tolerance for
                bad UX.
              </h1>
              <img
                src={BannerImage}
                alt="Banner"
                className="h-auto w-204 pointer-events-none"
              />
              <p className="text-lg text-center text-muted-foreground max-w-xl font-body font-medium">
                I blend logic, aesthetics, and user empathy to create intuitive
                experiences that feel effortless and intentional.
              </p>
            </div>
          </section>
          <section
            className="flex justify-center bg-secondary h-228 pt-16"
            id="about"
          >
            <div className="flex flex-col items-center justify-center gap-14">
              <img
                src={Me}
                alt="Me"
                className="h-auto w-120 pointer-events-none"
              />
              <div className="flex flex-col items-center justify-center gap-38">
                <p className="text-lg text-center text-muted-foreground max-w-2xl font-body font-semibold">
                  I’ve always been drawn to design, noticing how some apps feel
                  effortless while others make simple tasks harder than they
                  need to be. That curiosity grew into an interest in how design
                  shapes behavior and experience, leading me into product design
                  where I focus on creating clean, intuitive interfaces.
                  Alongside this, I’ve developed frontend skills in React.js,
                  Node.js, Tailwind CSS, CSS, and HTML, helping me bridge design
                  and real-world implementation.
                </p>
                <img
                  src={Rab}
                  alt="rab"
                  className="h-auto w-64 pointer-events-none"
                />
              </div>
            </div>
          </section>
          <section
            className="bg-cover bg-no-repeat bg-center w-full h-630 pointer-events-none"
            style={{ backgroundImage: `url(${BgImage})` }}
            id="projects"
          >
            <div className="relative">
              <img
                src={PaperClip}
                alt="paperclip"
                className="absolute -top-32 right-32 w-48 pointer-events-none"
              />
              <img
                src={Pin}
                alt="pin"
                className="absolute top-560 right-36 w-36 pointer-events-none"
              />
            </div>
            <div className="px-12 py-20">
              <h1 className="text-primary text-4xl">
                see what i’ve been working on :)
              </h1>
            </div>
            <div className="py-72">
              <div className="flex flex-col items-center justify-center gap-20">
                <div className="flex flex-row items-center justify-center gap-16">
                  <ProjectCard
                    title="FEATURED WORK"
                    description="MTG Meal Ordering Platform – UI/UX Design"
                    icon={ChartPie}
                    className="bg-card"
                    titleClassName="text-primary-foreground"
                    descClassName="font-medium text-background"
                    link="https://www.behance.net/gallery/251639537/MTG-Meal"
                  />
                  <ProjectCard
                    title="FEATURED WORK"
                    description="SaEco: AI Waste Segregation Application – UI/UX Design"
                    icon={ChartPie}
                    className="bg-card-foreground"
                    titleClassName="text-primary-foreground"
                    descClassName="font-medium text-primary-foreground"
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-16">
                  <ProjectCard
                    title="FEATURED WORK"
                    description="Kinaiya: Top Philippine Destinations App – UI/UX Design"
                    icon={ChartPie}
                    className="bg-card-secondary"
                    titleClassName="text-primary-foreground"
                    descClassName="font-medium text-primary-foreground"
                  />
                  <ProjectCard
                    title="FEATURED WORK"
                    description="Yummy Tea Shop: Automated Ordering System – UI/UX Design"
                    icon={ChartPie}
                    className="bg-card-muted"
                    titleClassName="text-primary-foreground"
                    descClassName="font-medium text-primary-foreground"
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-16">
                  <ProjectCard
                    title="FEATURED WORK"
                    description="SmartLife: AI Financial Application – UI/UX Design"
                    icon={ChartPie}
                    className="bg-card-secondary-foreground"
                    titleClassName="text-primary-foreground"
                    descClassName="font-medium text-primary"
                  />
                </div>
              </div>
            </div>
          </section>
          <section
            className="bg-cover bg-no-repeat bg-center w-full h-210 flex items-center"
            style={{ backgroundImage: `url(${BgImageOne})` }}
          >
            <div className="flex flex-row items-center mx-12 max-w-9xl justify-between w-full">
              <div className="flex flex-col text-accent gap-15">
                <div className="flex flex-row gap-4 justify-start items-center px-36 pt-12">
                  <h1 className="text-6xl ">my</h1>
                  <h1 className="font-cursive font-bold text-[250px] leading-0">
                    Girl
                  </h1>
                </div>

                <div className="flex flex-row mt-14">
                  <h1 className="font-cursive font-bold text-[250px] leading-0">
                    Dinner
                  </h1>
                  <div className="flex mt-8 -ml-4">
                    <h1 className="text-6xl ">lately</h1>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={PlateFork}
                  alt="platefork"
                  className="pointer-events-none"
                />
              </div>
            </div>
          </section>
        </main>
        <div id="contacts">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
