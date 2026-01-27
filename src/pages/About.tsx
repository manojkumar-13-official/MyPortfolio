import React from 'react'
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate } from 'react-icons/fa'

const About = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "R.M.D Engineering College",
      year: "2023 - Present",
      description: "Specialized in Full Stack Development and Web Technologies"
    }
  ]

  const experienceData = [
    {
      id: 1,
      position: "Full Stack Developer Intern",
      company: "8Queens Software Technologies Pvt. Ltd.",
      duration: "June 2025 - July 2025",
      description: "Developing responsive web applications using React, SpringBoot and MySQL"
    },
    {
      id: 2,
      position: "Web Development Intern",
      company: "Bharat Intern",
      duration: "Jun 2024 - Aug 2024",
      description: "Built UI components and implemented responsive designs with HTML, CSS and TailwindCSS"
    }
  ]

  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["SpringBoot", "PostgreSQL", "MySQL", "REST APIs", "Firebase"]
    },
    {
      category: "Tools & Others",
      skills: ["Git","GitHub","Postman","n8n"]
    }
  ]

  // const certificationsData = [
  //   {
  //     id: 1,
  //     title: "Full Stack Web Development",
  //     issuer: "Online Platform Name",
  //     date: "2023",
  //     link: "#"
  //   },
  //   {
  //     id: 2,
  //     title: "React.js Advanced Concepts",
  //     issuer: "Online Platform Name",
  //     date: "2023",
  //     link: "#"
  //   },
  //   {
  //     id: 3,
  //     title: "JavaScript Fundamentals",
  //     issuer: "Online Platform Name",
  //     date: "2022",
  //     link: "#"
  //   }
  // ]

  return (
    <div className="w-full min-h-screenmx-auto pb-10">
      {/* About Header */}
      <div className='flex flex-col justify-center items-center relative'>
      <div className="mt-20 mb-16 p-2 m-2 md:px-12 bg-gray-950 flex flex-col justify-center items-center relative rounded-4xl">
        
        <h1 className="text-4xl font-bold text-gray-400 mb-4">About Me</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I'm a passionate Full Stack Developer with a strong foundation in web technologies. 
          I love building scalable applications and learning new technologies.
        </p>
      </div>
      </div>

      {/* Experience Section */}
      <div className="mb-16 px-4 md:px-12 lg:px-20 ">
        <h2 className="text-3xl font-bold text-purple-600 flex items-center bg-gray-950 gap-3 mb-8">
          <FaBriefcase className="text-purple-600" />
          Experience
        </h2>
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div 
              key={exp.id}
              className="border-2 border-purple-600 pl-6 py-2 rounded-xl md:w-[70%] lg:w-[60%] bg-gray-950 relative hover:bg-gray-950 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-1">{exp.position}</h3>
              <p className="text-white font-semibold mb-1">{exp.company}</p>
              <p className="text-sm text-purple-300 font-semibold mb-3">{exp.duration}</p>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16 px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-purple-600 flex items-center gap-3 mb-8">
          <FaCode className="text-purple-600" />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <div 
              key={index}
              className="border-2 border-purple-600 p-6 rounded-lg hover:scale-105 hover:bg-gray-950 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50 bg-gray-950 relative"
            >
              <h3 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 ">
                {skillGroup.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section
      <div className="mb-16 px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-purple-600 flex items-center gap-3 mb-8">
          <FaCertificate className="text-purple-600" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <a 
              key={cert.id}
              href={cert.link}
              className="border-2 border-purple-600 p-6 rounded-lg hover:bg-purple-900/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50 cursor-pointer group"
            >
              <div className="flex items-start gap-2 mb-3">
                <FaCertificate className="text-purple-400 mt-1 group-hover:text-purple-300" />
                <h3 className="text-lg font-bold text-purple-400 group-hover:text-purple-300 transition-colors">{cert.title}</h3>
              </div>
              <p className="text-white font-semibold mb-1">{cert.issuer}</p>
              <p className="text-sm text-purple-300">{cert.date}</p>
            </a>
          ))}
        </div>
      </div> */}

      {/* Education Section */}
      <div className="mb-16 px-4 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-purple-600 flex items-center gap-3 mb-8">
          <FaGraduationCap className="text-purple-600" />
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div 
              key={edu.id} 
              className="border-2 border-purple-600 bg-gray-950 relative p-6 rounded-lg hover:scale-105 hover:bg-gray-950 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
              <p className="text-lg font-semibold text-white mb-1">{edu.field}</p>
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-sm text-purple-300 font-semibold mb-3">{edu.year}</p>
              <p className="text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About