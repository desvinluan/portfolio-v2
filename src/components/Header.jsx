import Logo from "../assets/images/logo.svg";
import BGButton from "../assets/images/bg-button.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 bg-background w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="size-16" />
        </div>

        <div className="flex items-center gap-10">
          <nav className="flex items-center font-header text-primary text-xl gap-8">
            <a href="#home" className="hover:text-pink-500 transition-colors">
              Home
            </a>

            <span className="text-primary font-script-alt text-7xl text-center pt-10">
              *
            </span>

            <a href="#about" className="hover:text-pink-500 transition-colors">
              About
            </a>

            <span className="text-primary font-script-alt text-7xl text-center pt-10">
              *
            </span>

            <a
              href="#projects"
              className="hover:text-pink-500 transition-colors"
            >
              Projects
            </a>
          </nav>

          <div>
            <button>
              <div className="relative inline-block">
                <img
                  src={BGButton}
                  alt="Background Button"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  <div
                    className="font-script text-5xl animate-spin"
                    style={{ animationDuration: "3s" }}
                  >
                    *
                  </div>
                  <h1 className="font-script text-2xl">Available for Hire</h1>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
