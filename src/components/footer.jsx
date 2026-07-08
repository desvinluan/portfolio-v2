import FooterBg from "../assets/images/footer.png";
import CustomItem from "./cards/textBox";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Background */}
      <img src={FooterBg} alt="footer" className="w-full object-cover pointer-events-none" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col py-48 gap-12 text-background px-4">
        {/* Heading */}
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="text-5xl font-bold max-w-xl">
            Ready to create experiences that matter?
          </h1>
          <p className="text-lg">
            Feel free to reach out — I'd love to hear about it.
          </p>
        </div>

        {/* Contact Items */}
        <div className="flex flex-col gap-36 w-full items-center">
          <div className="flex flex-col gap-4 w-full max-w-3xl">
            <CustomItem
              title="Email"
              description={
                <a
                  href="mailto:dvinluan.it@gmail.com"
                  className="underline hover:text-accent"
                >
                  dvinluan.it@gmail.com
                </a>
              }
            />

            <CustomItem
              title="Resume"
              description={
                <a
                  href="https://drive.google.com/file/d/1mlXAHPnQN3A76VN7XLjcvNZtIqSliUKE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  View Resume
                </a>
              }
            />

            <CustomItem
              title="LinkedIn"
              description={
                <a
                  href="https://linkedin.com/in/deserrevinluan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  linkedin.com/in/deserrevinluan
                </a>
              }
            />

            <CustomItem
              title="Behance"
              description={
                <a
                  href="https://behance.net/deserrevinluan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  behance.net/deserrevinluan
                </a>
              }
            />
          </div>

          {/* Footer note */}
          <div className="flex items-center gap-2 text-lg opacity-80 mt-6">
            <p>Built with purpose and clarity</p>

            <img src={Logo} alt="logo" className="h-6 w-auto pointer-events-none" />

            <p>2026 Deserre Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
