import "./App.css";
import AppLayout from "./layouts/AppLayout";
import { projects } from "@data/Projects";
import Logo from "@assets/JJPD_optimized.svg";
import { usePreloader } from "@hooks/usePreloader";
import LoaderScreen from "@pages/LoaderScreen/LoaderScreen";

const imageUrls = [Logo, ...projects.map((p) => p.image).filter(Boolean)];

function App() {
  const isLoading = usePreloader(imageUrls);

  return (
    <>
      {isLoading && <LoaderScreen />}
      <AppLayout />
    </>
  );
}

export default App;
