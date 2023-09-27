import StatsCards from "./StatsCards";
const Services = () => {
  return (
    <section className="px-10 py-40 text-slate-300 flex justify-center items-center">
      <div className="flex gap-5">
        <StatsCards title="MONTHLY ACTIVE USERS" number="212K+" />
        <StatsCards title="MONTHLY TRANSACTIONS" number="900K+" />
        <StatsCards title="APP AND SERVICES" number="250+" />
      </div>
    </section>
  );
};

export default Services;
