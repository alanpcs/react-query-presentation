import { useEffect } from "react";

type MouseButton = "left" | "right";

type MouseHandler = (event?: MouseEvent) => void;

export function useMouseClick(button: MouseButton, callback: MouseHandler) {
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      // 0 is left click, 2 is right click
      const isLeftClick = e.button === 0;
      const isRightClick = e.button === 2;

      if ((button === "left" && isLeftClick) || (button === "right" && isRightClick)) {
        callback(e);
      }
    };

    // Prevent context menu for right click if needed
    const preventContextMenu = (e: Event) => {
      if (button === "right") {
        e.preventDefault();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("contextmenu", preventContextMenu);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("contextmenu", preventContextMenu);
    };
  }, [callback, button]);
}