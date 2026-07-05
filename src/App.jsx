import { useState } from "react";
import Header from "./components/Header";
import BannerImage from "./assets/images/banner.png";
import Me from "./assets/images/me.png";
import Rab from "./assets/images/rab.png";
import BgImage from "./assets/images/bg-section.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <div>
        <Header />
      </div>
      <main>
        <section className="flex flex-col items-center justify-center py-14">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold text-center max-w-2xl text-primary">
              Product designer with a love for clean UI and low tolerance for
              bad UX.
            </h1>
            <img src={BannerImage} alt="Banner" className="h-auto w-204" />
            <p className="text-lg text-center text-muted-foreground max-w-xl font-body font-semibold">
              I blend logic, aesthetics, and user empathy to create intuitive
              experiences that feel effortless and intentional.
            </p>
          </div>
        </section>
        <section className="flex justify-center bg-secondary h-228 pt-16">
          <div className="flex flex-col items-center justify-center gap-14">
            <img src={Me} alt="Me" className="h-auto w-120" />
            <div className="flex flex-col items-center justify-center gap-38">
              <p className="text-lg text-center text-muted-foreground max-w-2xl font-body font-semibold">
                I’ve always been drawn to design, noticing how some apps feel
                effortless while others make simple tasks harder than they need
                to be. That curiosity grew into an interest in how design shapes
                behavior and experience, leading me into product design where I
                focus on creating clean, intuitive interfaces. Alongside this,
                I’ve developed frontend skills in React.js, Node.js, Tailwind
                CSS, CSS, and HTML, helping me bridge design and real-world
                implementation.
              </p>
              <img src={Rab} alt="Me" className="h-auto w-64" />
            </div>
          </div>
        </section>
        <section className="bg-size-[1580px] bg-center w-full h-680"
        style={{ backgroundImage: `url(${BgImage})` }}>
          <div className="px-12 py-20">
        <h1 className="text-primary text-4xl">see what i’ve been working on :)</h1>
        </div>
        </section>
      </main>
    </div>
  );
}

export default App;
