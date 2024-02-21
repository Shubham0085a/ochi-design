import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-.2" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[4.9vw] bg-green-500 relative"
                  ></motion.div>
                )}
                <h1 className="pt-[1vw] -mb-[0.1vw] text-[6.3vw] leading-[.75] tracking-[0.020em] font-semibold uppercase font-bebas-neue">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 hover:bg-slate-900 hover:text-orange-300 cursor-pointer uppercase py-2 border-[1px] border-zinc-400 font-light text-sm rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-slate-900 border-[1px] flex items-center justify-center border-zinc-400">
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
