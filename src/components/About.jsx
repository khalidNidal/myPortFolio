import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../const";
import SectionWrapper  from "../hoc/SectionWrapper"

// const windowWidth = useRef(window.innerWidth);



const ServiceCard = ({ index, title, icon }) => {

 


  
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"

        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center left-auto">{title}</h3>
          
        </div>

      </motion.div>

    </Tilt>

    )
  
}


const About = () => {
  

  return (
    <>
      <motion.div className="container mt-5  " variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <motion.p className="text-secondary text-[17px] max-w-5xl  leading-[30px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eius debitis velit ipsa recusandae fuga a ratione? Assumenda soluta
          ratione eius. At, vel cum! Pariatur corporis in eveniet quasi
          cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eius debitis velit ipsa recusandae fuga a ratione? Assumenda soluta
          ratione eius. At, vel cum! Pariatur corporis in eveniet quasi
          cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eius debitis velit ipsa recusandae fuga a ratione? Assumenda soluta
          ratione eius. At, vel cum! Pariatur corporis in eveniet quasi
          cupiditate.
        </motion.p>
        
        <div className="flex flex-wrap gap-10 mt-10  w-fit ml-auto    ">
          {services.map((service,index)=>{
              return (
                  <ServiceCard  title={service.title} index={index} {...service} />
              )
          })}

        </div>
        
      </motion.div>
    </>
  );
};
export default SectionWrapper(About, "about");

