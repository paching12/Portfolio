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
      <img
        className="image-content"
        src={thumbnails || image}
        alt="reactquizz"
      />
      <div>
        <h4 className="pl-5 text-xl">{title}</h4>
      </div>
      <span className="text-text-muted pl-5">{description}</span>
      <div className="pl-5">
        <Button onClick={openLink} variant={BUTTON_STYLES.TERTIARY}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default Card;
