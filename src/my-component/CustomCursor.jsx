import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateVisibility = () => {
      setIsVisible(!mediaQuery.matches);
    };

    const moveCursor = (e) => {
      if (mediaQuery.matches) return;

      const cursor = document.querySelector(".cursor-custom");
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    updateVisibility();
    window.addEventListener("mousemove", moveCursor);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateVisibility);
    } else {
      mediaQuery.addListener(updateVisibility);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateVisibility);
      } else {
        mediaQuery.removeListener(updateVisibility);
      }
    };
  }, []);

  return (
    <div
      className={`cursor-custom fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 ${
        isVisible ? "block" : "hidden"
      } md:block`}
    >
      <img src="/cursor.cur" alt="cursor" className="w-full h-full" />
    </div>
  );
}