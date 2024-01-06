import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto container">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  container  flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5eb1ff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#5eb1ff]">Khalid</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, <br className="sm:block hidden" /> using
            React.js and Next.js
          </p>
        </div>
      </div>
      <ComputersCanvas />

        <div className="absolute flex w-full justify-center items-center sm:bottom-7 bottom-4 "> 
      <a href="#about">
      <div className="    w-8 h-14 border-4 rounded-full  flex  justify-center items-center ">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        
        className="animate-pulse w-3 h-3 rounded-full bg-white mb-5 "></motion.div>
      </div>
      </a>
      </div>

    </section>
  );
};

export default Hero;
