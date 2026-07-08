import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = document.querySelector(".cursor-custom");
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="cursor-custom fixed top-0 left-0 w-8 h-8 pointer-events-none z-50">
      <img src="/cursor.cur" alt="cursor" className="w-full h-full" />
    </div>
  );
}