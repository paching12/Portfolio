import { useState } from "react";
import "./App.css";
// import LoaderScreen from "@pages/LoaderScreen/LoaderScreen";
import AppLayout from "./layouts/AppLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppLayout />
      {/* <LoaderScreen /> */}
    </>
  );
}

export default App;
