import { useState, useEffect } from "react";

export const usePreloader = (images: string[]) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          if (!src) return resolve(true);
          const img = new Image();
          img.src = src;
          // resolve when loaded or failed (to not block app)
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      });

      const onWindowLoad = new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve(true);
        } else {
          window.addEventListener("load", () => resolve(true));
        }
      });

      // Wait for both window load and image preloading
      await Promise.all([Promise.all(promises), onWindowLoad]);
      setIsLoading(false);
    };

    preloadImages();
  }, [images]); // Depend on images array

  return isLoading;
};
