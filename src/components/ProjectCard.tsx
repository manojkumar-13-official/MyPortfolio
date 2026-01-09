import Dialog from "./Dialog";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
  };
}
const ProjectCard = ({ project: cardDetails }: ProjectCardProps) => {
    const{title,description,technologies,link,image} = cardDetails
  return (
    <div className='h-auto w-auto border-2 border-purple-500 p-4 m-4 rounded-lg shadow-lg text-white mb-auto'>
        <img src={image} alt="Weather_Image" className='w-full h-auto'/>
      <h2 className='lg:text-2xl sm:text-xl font-semibold p-2 text-purple-500'>{title}</h2>
      <p>{description}</p>
      <ul>
        {technologies.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  )
}

export default ProjectCard