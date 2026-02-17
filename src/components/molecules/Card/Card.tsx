import type { FC } from "react";
import { Button } from "@components/atoms/Button";
import { BUTTON_STYLES } from "@components/atoms/Button/Button.types";
import image from "./../../../assets/reactquizz.png";
import "./Card.css";
import type { CardProps } from "./Card.types";

const Card: FC<CardProps> = ({
  title = "React Quiz",
  description = "Interactive quiz platform to assess knowledge in React and Redux.",
  buttonTitle = "View Project",
  thumbnails,
  link,
}) => {
  const openLink = () =>
    window.open(
      `${link || "https://github.com/paching12/ReactQuiz"}`,
      "_blank",
      "noopener,noreferrer",
    );

  return (
    <div className="Card">
      <div className="flex flex-col gap-4">
        <img
          className="image-content"
          src={thumbnails || image}
          alt="reactquizz"
        />
        <div className="flex flex-col gap-2 px-5">
          <h4 className="text-xl font-semibold">{title}</h4>
          <span className="text-text-muted text-sm">{description}</span>
        </div>
      </div>
      <div className="px-5 pb-2">
        <Button onClick={openLink} variant={BUTTON_STYLES.TERTIARY}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default Card;
