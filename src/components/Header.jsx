import Logo from "../assets/images/logo.svg";
import BGButton from "../assets/images/bg-button.png";

const Header = () => {
  return (
    <header className="container fixed z-10 items-center justify-between px-12 py-2 bg-background w-full shadow-xs">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="size-12 pointer-events-none" />
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center justify-center gap-8">
            <nav className="flex items-center justify-center font-header text-primary text-lg gap-8">
              <div className="flex flex-row gap-8 items-center">
                <a
                  href="#home"
                  className="hover:text-pink-500 transition-colors"
                >
                  Home
                </a>

                <div className="flex items-center gap-8">
                  <span className="text-primary font-script-alt text-6xl leading-none relative top-4">
                    *
                  </span>
                  <a
                    href="#about"
                    className="hover:text-pink-500 transition-colors"
                  >
                    About
                  </a>
                </div>

                <div className="flex items-center gap-8">
                  <span className="text-primary font-script-alt text-6xl leading-none relative top-4">
                    *
                  </span>
                  <a
                    href="#projects"
                    className="hover:text-pink-500 transition-colors"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </nav>

          <a href="#contacts">
            <button className="relative top-2" >
              <div className="relative inline-block">
                <img
                  src={BGButton}
                  alt="Background Button"
                  className="object-cover w-48"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  <div
                    className="font-script text-4xl animate-spin"
                    style={{ animationDuration: "3s" }}
                  >
                    *
                  </div>
                  <h1 className="font-script text-xl">Available for Hire</h1>
                </div>
              </div>
            </button>
          </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
