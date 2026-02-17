import { useRef } from "react";
import "./TagsCarousel.css";
import Tag from "@components/atoms/Tag/Tag";

interface TagsCarouselProps {
  tags: string[];
}

const TagsCarousel: React.FC<TagsCarouselProps> = ({ tags }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  if (!tags || tags.length === 0) return null;

  return (
    <div className="tags-carousel-container group">
      {tags.length > 3 && (
        <button
          onClick={scrollLeft}
          className="tags-nav-btn left-0 bg-gradient-to-r from-black/80 to-transparent"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}

      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-1 py-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`} label={tag} />
        ))}
      </div>

      {tags.length > 3 && (
        <button
          onClick={scrollRight}
          className="tags-nav-btn right-0 bg-gradient-to-l from-black/80 to-transparent"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TagsCarousel;
