import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import aboutImg from "/aboutImg.png";

type Prop = {
  setActive: any;
};

const AboutDropdown = (props: Prop) => {
  return (
    <div
      className="bg-[#eee4d4] rounded-b-xl px-20 pt-60 pb-20 absolute z-[-1] left-0 right-0 top-0 grid grid-cols-2"
      onMouseLeave={() => props.setActive("")}
    >
      <div>
        <h1 className="text-[#111] text-6xl font-semibold flex items-center w-max space-x-2 hover:text-[#f4620f] duration-300 cursor-pointer">
          <span className="">Our Mission</span>{" "}
          <ArrowRightIcon className="w-10 mt-2" />
        </h1>
        <p className=" text-[#777260] font-medium max-w-[460px] text-xl mt-2">
          Developing a world where the next million Web3 users are simply
          regular users.
        </p>
        <div className="mt-36 text-xl text-[#76705c] grid grid-cols-2">
          <div>
            <p className="flex space-x-2 font-semibold hover:text-gray-800 duration-300 cursor-pointer">
              <span>Career</span> <ArrowUpRightIcon className="w-5" />
            </p>
            <p className="flex space-x-2 font-semibold hover:text-gray-800 duration-300 cursor-pointer">
              <span>Press</span> <ArrowUpRightIcon className="w-5" />
            </p>
          </div>
          <div>
            <p className="flex space-x-2 font-semibold hover:text-gray-800 duration-300 cursor-pointer">
              <span>Enquires</span> <ArrowUpRightIcon className="w-5" />
            </p>
            <p className="flex space-x-2 font-semibold hover:text-gray-800 duration-300 cursor-pointer">
              <span>Manifesto</span> <ArrowUpRightIcon className="w-5" />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  flex items-center justify-center p-4 relative group">
        <img src={aboutImg} alt="" className="w-5/6" />
        <div className="rounded-t-xl absolute border-l border-r border-t w-5/6 h-1/6 top-0 border-gray-800 group-hover:h-1/2 duration-300" />
        <div className="rounded-b-xl absolute border-l border-r border-b w-5/6 h-1/6 bottom-0 border-gray-800 group-hover:h-1/2 duration-300" />
      </div>
    </div>
  );
};

export default AboutDropdown;
