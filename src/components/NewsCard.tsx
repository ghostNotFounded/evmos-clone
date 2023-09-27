type Prop = {
  title: string;
  desc: string;
  imgurl: string;
};

const NewsCard = (props: Prop) => {
  return (
    <div className="space-y-5 group h-min cursor-pointer mx-5">
      <div className="w-full flex items-center justify-center p-4 relative group">
        <img src={props.imgurl} alt="" className="w-full" />
        <div className="rounded-t-xl absolute border-l border-r border-t w-full h-1/6 top-0 border-gray-800 group-hover:h-1/2 duration-300" />
        <div className="rounded-b-xl absolute border-l border-r border-b w-full h-1/6 bottom-0 border-gray-800 group-hover:h-1/2 duration-300" />
      </div>
      <h2 className="space-y-2 text-2xl">
        <p className="flex items-center font-semibold space-x-2">
          <span className="group-hover:text-[#f4620f] duration-300">
            {props.title}
          </span>{" "}
        </p>
        <p className="text-[#867f6c] text-xl">{props.desc}</p>
      </h2>
    </div>
  );
};

export default NewsCard;
