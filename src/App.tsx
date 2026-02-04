import { useState } from "react";
import "./App.css";
import LoaderScreen from "@pages/LoaderScreen/LoaderScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoaderScreen />
    </>
  );
}

export default App;
