import style from "./LoaderScreen.module.css";
import { Loader } from "@components/atoms/Loader";

const LoaderScreen = () => {
  return (
    <div className={style.mainScreen}>
      <div className={style.techPattern}></div>
      <Loader />
    </div>
  );
};

export default LoaderScreen;
