const GetStarted = () => {
  return (
    <section className="px-10 py-20 bg-[#fef3e1] text-[#000]">
      <div className="w-full p-10 relative cursor-pointer group">
        <div className="rounded-t-xl absolute border-l border-r border-t w-full h-1/6 top-0 left-0 border-gray-800 group-hover:h-1/2 duration-300" />
        <div className="rounded-b-xl absolute border-l border-r border-b w-full h-1/6 bottom-0 left-0 border-gray-800 group-hover:h-1/2 duration-300" />
        <div className="w-full bg-[#e3d9c8] flex items-center justify-center p-10 font-medium text-3xl group-hover:bg-[#cac1b2] duration-300 hover:scale-y-105 hover:scale-x-[102%]">
          Get Started
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
