import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import LayoutWrapper from "../layout-wrapper/LayoutWrapper";
import Guide from "../../pages/guide/Guide";
import About from "../../pages/about/About";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
