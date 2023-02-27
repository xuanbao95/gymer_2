import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Pages/Carousel/Carousel";
import HeaderPage from "./Pages/HeaderPages/HeaderPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SliderPage from "./Pages/SliderPage/SliderPage";

function App() {
  return (
    <div>
      <HeaderPage />
      <SliderPage />
      <Carousel />
      <AboutUs />
    </div>
  );
}

export default App;
