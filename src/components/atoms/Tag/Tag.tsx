import type { FC } from "react";
import "./Tag.css";

interface TagProps {
  label: string;
}

const Tag: FC<TagProps> = ({ label }) => {
  return (
    <span className="tag-chip">
      {label}
    </span>
  );
};

export default Tag;
