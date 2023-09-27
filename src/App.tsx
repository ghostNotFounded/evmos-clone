import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import BuildwoLimits from "./components/BuildwoLimits";
import JoinMission from "./components/JoinMission";
import purplePlanet from "/purplePlanet.png";
import News from "./components/News";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
    if (counter < 100 && isLoading) {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 30);
    }
  }, [isLoading, counter]);

  return (
    <body className="bg-[#000000] w-full min-h-screen text-white">
      {isLoading ? (
        <div className="absolute top-0 left-0 z-[100] w-full h-full bg-[#0d0d0d]">
          <Loading counter={counter} />
        </div>
      ) : (
        <>
          <Navbar />
          <div>
            <Hero />
            <Stats />
            <BuildwoLimits />
            <JoinMission />
            <img src={purplePlanet} alt="" className="w-full" />
            <News />
            <GetStarted />
            <Footer />
          </div>
        </>
      )}
    </body>
  );
};

export default App;
