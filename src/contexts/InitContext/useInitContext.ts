import { useContext } from "react";
import { InitContext } from "./InitContext";

export const useInitContext = () => {
  const context = useContext(InitContext);
  if (!context) {
    throw new Error("useInitContext must be used within InitContextProvider");
  }
  return context;
};
