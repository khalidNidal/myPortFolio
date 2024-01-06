import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {

    let [isMobile, setIsMobile] = useState(false);

    const windowWidth = useRef(window.innerWidth);
    console.log("🚀 ~ file: SectionWrapper.jsx:12 ~ HOC ~ windowWidth:", windowWidth.current)
        if(windowWidth.current < 600){
          isMobile = true
        }
    

    return (

        isMobile?
        <Component id={idName} />
        
        
        :
        
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className={`${styles.padding} max-w-7xl mx-auto  `}
        >
          <span id={idName} className="hash-text">
            &nbsp;
          </span>       
          <Component  />
        </motion.section>
      

        )

    
  };

export default SectionWrapper;

// <motion.section
//         variants={staggerContainer()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.7 }}
//         className={`${styles.padding} max-w-7xl mx-auto  `}
//       >
//         <Component id={idName} />
//       </motion.section>;
