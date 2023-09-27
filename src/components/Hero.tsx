import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="bg-hero-banner w-full h-screen bg-cover bg-center bg-no-repeat">
        <section className="grid grid-rows-5 text-[#f8eedc] h-screen px-16">
          <div className="row-span-2 grid grid-cols-5">
            <div className="col-span-3" />
            <div className="flex items-center">
              <p className="text-sm font-obitron">
                GO EVERYWHERE <br /> REACH EVERYWHERE
              </p>
            </div>
          </div>
          <div className="max-w-[600px] text-[75px] leading-[4rem] font-black font-obitron">
            <Typewriter
              words={["DEPLOY ONCE -", "ACCESS ALL ECOSYSTEMS"]}
              loop={true}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="grid grid-cols-3">
            <p className="text-sm col-span-2">
              GO EVERYWHERE <br /> REACH EVERYWHERE
            </p>
            <div className="max-w-[500px] space-y-5 font-semibold">
              <p className=" text-3xl">
                Evmos is the operating system for applications of the future.
              </p>
              <div className="flex space-x-4  text-xl">
                <button className="rounded-lg px-8 py-3 bg-white text-black">
                  Start Building
                </button>
                <button className="rounded-lg px-8 py-3 border">
                  Read Manifesto
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div />
            <div>
              <p className="text-sm font-obitron">
                GO EVERYWHERE <br /> REACH EVERYWHERE
              </p>
            </div>
            <div />
          </div>
        </section>
      </div>
      <div className="absolute bottom-0 -left-20 bg-[#000000] w-[650px] rounded-t-lg h-[100px] skew-x-[45deg] z-0" />
    </>
  );
};

export default Hero;
