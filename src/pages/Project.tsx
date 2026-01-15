import projectData from '../Data/project.json'
import ProjectCard from '@/components/ProjectCard'
const Project = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-20 text-gray-400 mb-5'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative'>
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Project