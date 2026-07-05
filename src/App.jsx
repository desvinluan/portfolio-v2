import { useState } from "react";
import Header from "./components/Header";
import BannerImage from "./assets/images/banner.png";

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
      </main>
    </div>
  );
}

export default App;
