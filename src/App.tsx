import "./App.css";
import Loader from "./components/atoms/Loader/Loader";
import AppLayout from "./layouts/AppLayout";
import { projects } from "@data/Projects";
import Logo from "@assets/JJPD_optimized.svg";
import { usePreloader } from "@hooks/usePreloader";

const imageUrls = [Logo, ...projects.map((p) => p.image).filter(Boolean)];

function App() {
  const isLoading = usePreloader(imageUrls);

  return (
    <>
      {isLoading && <Loader />}
      <AppLayout />
    </>
  );
}

export default App;
