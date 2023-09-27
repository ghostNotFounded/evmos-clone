import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

import communityImg from "/communityImg.jpg";
import academyImg from "/academyImg.jpg";
import grantsImg from "/grantsImg.jpg";
import ecoSystem from "/ecoSystem.jpg";

const JoinMission = () => {
  return (
    <section className="px-10 py-20">
      <div className="flex justify-between items-center">
        <h1 className="text-[125px] font-black space-y-[-80px]">
          <p className="font-obitron">JOIN </p>
          <p className="font-obitron"> THE MISSION</p>
        </h1>
        <ArrowDownIcon className="w-24" />
      </div>
      <div className="grid grid-cols-4 gap-10">
        <div className="space-y-5 group h-min cursor-pointer">
          <div className="w-full flex items-center justify-center p-4 relative group">
            <img src={communityImg} alt="" className="w-full" />
            <div className="rounded-t-xl absolute border-l border-r border-t w-full h-1/6 top-0 border-gray-400 group-hover:h-1/2 duration-300" />
            <div className="rounded-b-xl absolute border-l border-r border-b w-full h-1/6 bottom-0 border-gray-400 group-hover:h-1/2 duration-300" />
          </div>
          <h2 className="space-y-2 text-2xl">
            <p className="flex items-center font-semibold space-x-2">
              <span className="group-hover:text-[#f4620f] duration-300">
                Community
              </span>{" "}
              <ArrowRightIcon className="w-5" />
            </p>
            <p className="font-thin text-gray-400">Build. Get Ready.</p>
          </h2>
        </div>

        <div className="space-y-5 group h-min cursor-pointer">
          <div className="w-full flex items-center justify-center p-4 relative group">
            <img src={academyImg} alt="" className="w-full" />
            <div className="rounded-t-xl absolute border-l border-r border-t w-full h-1/6 top-0 border-gray-400 group-hover:h-1/2 duration-300" />
            <div className="rounded-b-xl absolute border-l border-r border-b w-full h-1/6 bottom-0 border-gray-400 group-hover:h-1/2 duration-300" />
          </div>
          <h2 className="space-y-2 text-2xl">
            <p className="flex items-center font-semibold space-x-2">
              <span className="group-hover:text-[#f4620f] duration-300">
                Academy
              </span>{" "}
              <ArrowRightIcon className="w-5" />
            </p>
            <p className="font-thin text-gray-400">Discover. Get Smart.</p>
          </h2>
        </div>

        <div className="space-y-5 group h-min cursor-pointer">
          <div className="w-full flex items-center justify-center p-4 relative group">
            <img src={grantsImg} alt="" className="w-full" />
            <div className="rounded-t-xl absolute border-l border-r border-t w-full h-1/6 top-0 border-gray-400 group-hover:h-1/2 duration-300" />
            <div className="rounded-b-xl absolute border-l border-r border-b w-full h-1/6 bottom-0 border-gray-400 group-hover:h-1/2 duration-300" />
          </div>
          <h2 className="space-y-2 text-2xl">
            <p className="flex items-center font-semibold space-x-2">
              <span className="group-hover:text-[#f4620f] duration-300">
                Grants
              </span>{" "}
              <ArrowRightIcon className="w-5" />
            </p>
            <p className="font-thin text-gray-400">Create. Get paid.</p>
          </h2>
        </div>

        <div className="space-y-5 group h-min cursor-pointer">
          <div className="w-full flex items-center justify-center p-4 relative group">
            <img src={ecoSystem} alt="" className="w-full" />
            <div className="rounded-t-xl absolute border-l border-r border-t w-full h-1/6 top-0 border-gray-400 group-hover:h-1/2 duration-300" />
            <div className="rounded-b-xl absolute border-l border-r border-b w-full h-1/6 bottom-0 border-gray-400 group-hover:h-1/2 duration-300" />
          </div>
          <h2 className="space-y-2 text-2xl">
            <p className="flex items-center font-semibold space-x-2">
              <span className="group-hover:text-[#f4620f] duration-300">
                Ecosystem
              </span>{" "}
              <ArrowRightIcon className="w-5" />
            </p>
            <p className="font-thin text-gray-400">Explore. Get inspired.</p>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;
