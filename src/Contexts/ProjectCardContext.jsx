import { ProjectDataContext } from "./ProjectDataContext";
import eduWebImage from "../assets/projects-img/edu-web.png";
import demoImage from "../assets/projects-img/demo.png";

const ProjectCardContext = (props) => {
  const projectData = [
    {
      name: "Eduvora - Smart Academic Portal",
      description:"EduVora is a smart academic portal that centralizes essential student and faculty services, including attendance tracking, study materials, announcements, and event updates. It features role-based access for students and administrators, making academic management more efficient and organized.",
      img: eduWebImage,
      tech: ["react native", "expo cli", 'react js', 'vite', 'node js', 'Appwrite as Backend'],
      link: "https://eduvora-website.vercel.app/",
    },
    {
      name: "PixShow - Personal Image Showcase",
      description:"PicShow is a modern photo gallery web application designed to showcase and organize images through a clean and responsive interface. It provides a seamless browsing experience with dynamic image rendering, intuitive navigation, and optimized performance across devices.",
      img: demoImage,
      tech: ["react js", "vite", 'Axios', 'Lorem Photo Api' ],
      link: "https://github.com/Sakuna-Ryomen/photo-gallery",
    },
    {
      name: "SmartBlackbook - AI Blackbook Content Generator",
      description: "AI Blackbook Content Generator is an intelligent documentation tool that assists students in generating comprehensive project reports with minimal effort. By leveraging AI, it creates structured and detailed blackbook content, ensuring consistency, accuracy, and adherence to academic report formats.",
      img: demoImage,
      tech: ['python', 'flask', ],
      link: "https://smart-blackbook.streamlit.app/",
    },
    {
      name: "RouteNest - A Cafe Finder",
      description:
        "RouteNest is a location-based web application that helps users discover nearby cafés, restaurants, hotels, and popular places using real-time geolocation. It provides a responsive and user-friendly interface for seamless local exploration.",
      img: demoImage,
      tech: ["html", "Css", "javascript", "OpenStreetMap API"],
      link: "https://github.com/Sakuna-Ryomen/myProject-Cafe",
    },
    {
      name: 'NoteMaster - Note-Taking App',
      description: 'NoteMaster is a simple and efficient note-taking application designed to help users capture and organize their thoughts, ideas, and important information in a clutter-free environment.',
      img: demoImage,
      tech: ['react js', 'vite'],
      link: "https://github.com/Sakuna-Ryomen/notes-app",
    }
  ];

  return (
    <div>
      <ProjectDataContext.Provider value={[projectData]}>
        {props.children}
      </ProjectDataContext.Provider>
    </div>
  );
};

export default ProjectCardContext;
