import React from "react";
import style from "./LoaderScreen.module.css";
import { Loader } from "@components/atoms/Loader";

const LoaderScreen = () => {
  return (
    <div className={style.mainScreen}>
      <Loader />
      <div className={style.techPattern}></div>
    </div>
  );
};

export default LoaderScreen;
