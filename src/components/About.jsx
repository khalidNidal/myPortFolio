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
        className="w-full About-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className=" bg-[#22384d] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"

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
         Hello! I'm a passionate Frontend Web Developer specializing in React and Next.js. With a knack for creating interactive and dynamic user interfaces, I leverage the power of React's reusable components for efficient development. I also utilize Next.js for server-side rendering and generating static websites, optimizing my applications for both performance and SEO.

My journey in web development has been driven by my desire to create seamless and user-friendly web experiences. I'm always eager to learn and adapt to new technologies and trends in the ever-evolving world of web development. I look forward to bringing my skills and dedication to new and exciting projects.

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

