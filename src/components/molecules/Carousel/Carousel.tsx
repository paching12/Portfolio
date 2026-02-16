import { useRef, useEffect } from "react";
import { Card } from "../Card";

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = Array.from({ length: 12 });
  // Create 3 sets to generate infinite scroll
  const infiniteItems = [...items, ...items, ...items];

  useEffect(() => {
    // Position the scroll in the middle set at the start
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const oneSetWidth = scrollWidth / 3;
      containerRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth } = containerRef.current;
      const oneSetWidth = scrollWidth / 3;

      // If we reach the start (Set 1), jump to the start of Set 2
      if (scrollLeft <= 10) {
        containerRef.current.scrollLeft = oneSetWidth + scrollLeft;
      }
      // If we reach the end of Set 2 (entering Set 3), jump to the start of Set 2
      else if (scrollLeft >= 2 * oneSetWidth - 10) {
        containerRef.current.scrollLeft = scrollLeft - oneSetWidth;
      }
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="group relative w-full">
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 group-hover:opacity-100"
        aria-label="Scroll left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex w-full gap-6 overflow-x-auto px-4 pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {infiniteItems.map((_, index) => (
          <div
            key={index}
            className="w-full md:w-auto shrink-0 snap-center transition-transform hover:scale-[1.02]"
          >
            <Card title={index.toString()}/>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 group-hover:opacity-100"
        aria-label="Scroll right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
