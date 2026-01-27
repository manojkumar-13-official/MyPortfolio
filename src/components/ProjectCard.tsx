import { useState } from "react";
import Modal from "./Modal";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github_link: string;
    website_link: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const { image, title, description, technologies, github_link, website_link } = project;

  return (
    <div className='h-auto w-auto border-2 border-purple-500 p-4 m-4 rounded-lg shadow-lg text-white mb-auto bg-gray-950'>
      <img src={image} alt={title} className='w-full h-60 object-cover rounded-lg' />
      <h2 className='lg:text-2xl sm:text-xl font-bold p-2 text-lg text-purple-500'>{title}</h2>
      <p className="p-2">{description}</p>
      <button 
        className="m-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 cursor-pointer rounded" 
        onClick={handleOpen}
      >
        View Details
      </button>
      {isOpen && (
        <Modal 
          props={{ 
            name: title, 
            technology: technologies, 
            github_link, 
            website_link 
          }} 
          onClose={handleClose} 
         />
      )}
    </div>
  );
};

export default ProjectCard;