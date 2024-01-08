  import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    GSG,
    AAUP,
    Photoshop,
    MUI,
    Nextjs,
    CRUD,
    instaClone,
    HEXASHOP,
  } from "../assets/index";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];


  
   export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Reactjs Developer",
      icon: mobile,
    },
    {
      title: "Nextjs Developer",
      icon: backend,
    },
   
  ];
  
   export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PhotoShop",
      icon: Photoshop,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MUI",
      icon : MUI,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Nextjs",
      icon: Nextjs,
    },
   
   
  ];
  
   export const experiences = [
    {
      title: "Advane JavaScript",
      company_name: "Gaza Sky Geeks",
      icon: GSG,
      iconBg: "white",
      date: "July 2023 - August 2023",
      points: [
        "learing the basics of JavaScript and its core features such as variables, data types, and control structures.",
        "Using API integration to retrieve and manipulate data from external sources.",
        "Developing and maintaining web applications using JavaScript and other related technologies such as HTML, CSS, and Tailwind.",

      ],
    },
    {
      title: "React JS Developer",
      company_name: "Gaza Sky Geeks",
      icon: GSG,
      iconBg: "white",
      date: "August 2023 - October 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Create Instagram Clone using React.js and other related technologies.",
      ],
    },
    {
      title: "Computer Engineer",
      company_name: "Arab American University",
      icon: AAUP,
      iconBg: "white",
      date: "November 2021 - March 2026",
      points: [
       "Learned basic computer science concepts such as data structures, algorithms, and programming languages.",
       "Created a website using HTML, CSS, and JavaScript.",
       "Learned the basics of computer architecture and operating systems.",
       
       "Graduated with degree in Computer Engineering."
        
      ],
    },
   
  ];
  
  export  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  export const projects = [
    {
      name: "simple JS CRUD system",
      description:
        "Web application that allows users to create, read, update, and delete data in a database using JavaScript and Bootstrap framework . The application is hosted on GitHub. ",  
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: CRUD,
      source_code_link: "https://github.com/khalidNidal/CRUD",
    },
    {
      name: "Instagram Clone",
      description:
        "Web application that clone the Instagram using React.js and other related technologies, the application allows users to create, read, update, and delete data in a database. The application is hosted on GitHub. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MUI",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: instaClone,
      source_code_link: "https://github.com/khalidNidal/instaClone",
    },
    {
      name: "HEXASHOP",
      description:
      "Web application that allows users to shoping from the website, its designed using NEXTjs, css and other related technologies. The application is hosted on GitHub. ",
      tags: [
        {
          name: "Nextjs",
          color: "black"
        },
        
        
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: HEXASHOP,
      source_code_link: "https://github.com/khalidNidal/HEXASHOP",
    },
  ];
  
  // export { services, technologies, experiences, testimonials, projects };
  