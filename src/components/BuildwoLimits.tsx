import { ChangeColor } from "../animations/ChangeColor";
import pointingArrow from "/pointingArrow.png";

const BuildwoLimits = () => {
  return (
    <section className="px-10 py-20">
      <h1 className="text-[125px] font-black space-y-[-80px]">
        <p className="font-obitron">BUILD </p>
        <p className="font-obitron"> WITHOUT LIMITS</p>
      </h1>
      <div className="grid grid-cols-3 mt-10">
        <img src={pointingArrow} alt="" className="w-16 h-16" />
        <p className="col-span-2 font-semibold text-6xl text-[#4e4b45]">
          <ChangeColor delayed={0.75}>
            <p>Developers use Evmos as the Ethereum </p>
          </ChangeColor>
          <ChangeColor delayed={1}>
            <p> Canary Chain to deploy applications of </p>
          </ChangeColor>
          <ChangeColor delayed={1.5}>
            <p> the future. Get all the functionalities of </p>
          </ChangeColor>
          <ChangeColor delayed={1.75}>
            <p>Ethereum with the power of IBC and Interchain composability.</p>
          </ChangeColor>
        </p>
      </div>
    </section>
  );
};

export default BuildwoLimits;
