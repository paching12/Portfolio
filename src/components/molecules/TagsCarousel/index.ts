import type Tag from "@components/atoms/Tag/Tag";
import TagsCarousel from "./TagsCarousel";

interface TagProps {
  label: string;
}

interface TagsCarouselProps {
  tags: string[];
}

export { TagsCarousel };
export type { Tag, TagProps, TagsCarouselProps };
