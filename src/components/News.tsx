import AliceCarousel from "react-alice-carousel";
import { newsInfo } from "../constants/index";
import NewsCard from "./NewsCard";

const News = () => {
  let items: any[] = [];

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };

  newsInfo.map((item, i) => {
    items.push(
      <NewsCard key={i} title={item.title} desc={item.desc} imgurl={item.img} />
    );
  });

  return (
    <section className="px-10 py-20 bg-[#fef3e1] text-[#000]">
      <h1 className="w-full text-center font-obitron text-[200px] font-black">
        EVMOS NEWS
      </h1>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </section>
  );
};

export default News;
