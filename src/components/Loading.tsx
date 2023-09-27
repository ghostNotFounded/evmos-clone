import logo from "/logo-white.png";

type CounterProp = {
  counter: number;
};

const Loading = (props: CounterProp) => {
  return (
    <>
      <section className="grid grid-rows-5 text-[#f8eedc] h-screen px-16">
        <div className="row-span-2 grid grid-cols-5">
          <div className="col-span-3" />
          <div className="flex items-center">
            <p className="text-sm">
              GO EVERYWHERE <br /> REACH EVERYWHERE
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-8xl font-black">LAUNCHING</h1>
          <img src={logo} alt="evmos-logo" className="h-5/6" />
          <h1 className="text-8xl font-black w-[200px]">{props.counter}</h1>
        </div>
        <div className="flex items-center">
          <p className="text-sm">
            GO EVERYWHERE <br /> REACH EVERYWHERE
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div />
          <div>
            <p className="text-sm">
              GO EVERYWHERE <br /> REACH EVERYWHERE
            </p>
          </div>
          <div />
        </div>
      </section>
    </>
  );
};

export default Loading;
