import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-darker-grotesque font-semibold tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="w-fill flex flex-col gap-40 mt-10">
          <div className="cards w-full flex gap-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer hover:scale-95 transition ease-in-out duration-700 relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tighter font-bebas-neue">
                {"fyde".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className=" inline-block"
                    key={item}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full hover:scale-110 transition ease-in-out duration-700  bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer hover:scale-95 transition ease-in-out duration-700 relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tighter font-bebas-neue">
                {"vise".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className=" inline-block"
                    key={item}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full hover:scale-95 transition ease-in-out duration-700 bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
          <div className="cards w-full flex gap-10">
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="cardcontainer hover:scale-95 transition ease-in-out duration-700 relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tighter font-bebas-neue">
                {"trawa".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className=" inline-block"
                    key={item}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full hover:scale-95 transition ease-in-out duration-700 bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="cardcontainer hover:scale-95 transition ease-in-out duration-700 relative w-1/2 h-[75vh]"
            >
              <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tighter font-bebas-neue">
                {"premiumblend".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className=" inline-block"
                    key={item}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full hover:scale-95 transition ease-in-out duration-700 bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
