import { Route } from "react-router";
import { Routes } from "react-router";
import Landing from "./pages/landingPage/landing";
import About from "./pages/About";
import Podcast from "./pages/pojects/Podcast";
import MotionGraphic from "./pages/pojects/MotionGraphic";
import TrailerTeaser from "./pages/pojects/TrailerTeaser";
import ExplainerVideo from "./pages/pojects/ExplainerVideo";
import Shortvideo from "./pages/pojects/Shortvideo";
import { useEffect, useState } from "react";


const App = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true); // Set the loading state to false when assets are loaded
    };

    // Listen for the window load event
    window.addEventListener("load", handleLoad);

    return () => {
      // Cleanup the event listener
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoaded) {
    // Show the loader while loading
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <img className="w-full h-full object-cover" src="https://i.pinimg.com/originals/4a/8b/34/4a8b34a01d5eb5a134ebe661cb1d1cff.gif" alt="" />
      </div>
    );
  }
  return (
    <div className="bg-mainColor">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="podcast" element={<Podcast />}></Route>
        <Route path="motion_graphic" element={<MotionGraphic />}></Route>
        <Route path="trailer_teaser" element={<TrailerTeaser />}></Route>
        <Route path="explainer_video" element={<ExplainerVideo />}></Route>
        <Route path="short_video" element={<Shortvideo />}></Route>
      </Routes>
    </div>
  );
};

export default App;
// <div className="bg-mainColor">
    // </div>