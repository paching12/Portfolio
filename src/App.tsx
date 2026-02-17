import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/atoms/Loader/Loader";
import AppLayout from "./layouts/AppLayout";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <AppLayout />
    </>
  );
}

export default App;
