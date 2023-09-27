import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import purpleLogo from "/purple-logo.png";
import footerBanner from "/footer-banner.png";

const Footer = () => {
  return (
    <>
      <section className="px-10 py-20 bg-[#fef3e1] text-[#000] grid grid-rows-2 space-y-40 relative">
        <div className="grid grid-cols-6">
          <div className="text-xl font-semibold space-y-4">
            <h1>Company</h1>
            <ul className="text-[#76705b] space-y-1">
              <li className="cursor-pointer hover:text-[#000] duration-300">
                Home
              </li>
              <li className="cursor-pointer hover:text-[#000] duration-300">
                Technology
              </li>
              <li className="cursor-pointer hover:text-[#000] duration-300">
                Community
              </li>
              <li className="cursor-pointer hover:text-[#000] duration-300">
                Mission
              </li>
              <li className="flex space-x-1 cursor-pointer hover:text-[#000] duration-300">
                <span>Careers</span> <ArrowUpRightIcon className="w-5" />
              </li>
            </ul>
          </div>
          <div className="text-xl font-semibold space-y-4">
            <h1>Connect</h1>
            <ul className="text-[#76705b] space-y-1">
              <li className="flex space-x-1 cursor-pointer hover:text-[#000] duration-300">
                <span>Discord</span> <ArrowUpRightIcon className="w-5" />
              </li>
              <li className="flex space-x-1 cursor-pointer hover:text-[#000] duration-300">
                <span>Github</span> <ArrowUpRightIcon className="w-5" />
              </li>
              <li className="flex space-x-1 cursor-pointer hover:text-[#000] duration-300">
                <span>Twitter</span> <ArrowUpRightIcon className="w-5" />
              </li>
            </ul>
          </div>
          <div className="text-xl font-semibold space-y-4">
            <h1>Resources</h1>
            <ul className="text-[#76705b] space-y-1">
              <li className="flex space-x-1 cursor-pointer hover:text-[#000] duration-300">
                <span>Evmos Docs</span> <ArrowUpRightIcon className="w-5" />
              </li>
              <li className="flex space-x-1 cursor-pointer hover:text-[#000] duration-300">
                <span>Academy</span> <ArrowUpRightIcon className="w-5" />
              </li>
              <li className="flex space-x-1 cursor-pointer hover:text-[#000] duration-300">
                <span>Press Kit</span> <ArrowUpRightIcon className="w-5" />
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-6">
          <div className="flex  items-center font-obitron text-sm cursor-pointer">
            TERMS OF SERVICE
          </div>
          <div className="flex  items-center font-obitron text-sm cursor-pointer">
            PRIVACY POLICY
          </div>
          <div className="flex  items-center font-obitron text-sm cursor-pointer">
            COOKIE POLICY
          </div>
          <div className="col-span-2 flex  items-center justify-center font-obitron text-sm cursor-pointer">
            © 2023 EVMOS
          </div>
          <div className="flex items-start cursor-pointer hover:scale-95 duration-300">
            <img src={purpleLogo} alt="" className="w-40" />
          </div>
        </div>
      </section>
      <div className="max-h-[400px] overflow-hidden">
        <img src={footerBanner} alt="" />
      </div>
    </>
  );
};

export default Footer;
