import { useRef, useEffect } from "react";
import { ArrowTypes } from "@components/atoms/Arrow/Arrow.types";
import Arrow from "@components/atoms/Arrow/Arrow";
import type { CarouselProps } from "./Carousel.types";

const Carousel = <T,>({items, renderItem}: CarouselProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      <Arrow onClick={scrollLeft} type={ArrowTypes.LEFT}/>

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex w-full gap-6 overflow-x-auto px-4 pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {infiniteItems.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-auto shrink-0 snap-center transition-transform hover:scale-[1.02]"
          >
            {renderItem(item)}
            {/* <Card title={index.toString()}/> */}
          </div>
        ))}
      </div>

     <Arrow onClick={scrollRight} type={ArrowTypes.RIGHT}/>
    </div>
  );
};

export default Carousel;
