type Props = {
  title: string;
  number: string;
};

const StatsCards = (props: Props) => (
  <div className="border-customGray p-10 min-w-[500px] min-h-[320px] relative">
    <div className="absolute border-b border-l border-r rounded-b-xl w-full h-1/6 bottom-0 left-0 border-customGray" />
    <div className="absolute border-t border-l border-r rounded-t-xl w-full h-1/6 top-0 left-0 border-customGray" />
    <p className="text-sm font-obitron">{props.title}</p>
    <div className="flex text-white text-6xl font-semibold justify-center items-center h-3/4">
      <p>{props.number}</p>
    </div>
    <div className="w-2 h-2 bg-customGray absolute bottom-10 left-10" />
    <div className="w-2 h-2 bg-customGray absolute top-10 right-10" />
    <div className="w-2 h-2 bg-customGray absolute bottom-10 right-10" />
    <div className="bg-[#cb4912] rounded-full w-5 h-5 absolute left-9 top-36" />
    <div className="bg-[#cb4912] rounded-full w-5 h-5 absolute left-9 top-36 animate-ping-slow blur-sm" />
  </div>
);

export default StatsCards;
