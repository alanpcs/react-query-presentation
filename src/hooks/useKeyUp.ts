import { useEffect } from "react";

type Key = "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown";

type KeyHandler = (event?: KeyboardEvent) => void;

export function useKeyUp(wantedKey: Key, callback: KeyHandler) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === wantedKey) {
        callback(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback, wantedKey]);
}
