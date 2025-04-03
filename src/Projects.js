import React from "react";
import "./Projects.css"; // Import CSS file

const projects = [
  {
    title: "Stock Analysis Dashboard",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQEf957yQU2rSg/profile-treasury-image-shrink_800_800/B4DZX9LdWHG8AY-/0/1743709395085?e=1744315200&v=beta&t=tX8OGkvn5qPOW4NpY4teBH2RlZEKlWYl-xNgkqSdUk0",
      "https://media.licdn.com/dms/image/v2/D4D2DAQGWDZ9kTFPH7g/profile-treasury-image-shrink_800_800/B4DZX9LlMAHwAc-/0/1743709427121?e=1744315200&v=beta&t=t39GFNYixZBfziV57mHTCmjwTqNoCR_suI1ctyRXdEc",
      "https://media.licdn.com/dms/image/v2/D4D2DAQFV1dgZc6rjFw/profile-treasury-image-shrink_800_800/B4DZX9LrkOH4Ac-/0/1743709453378?e=1744315200&v=beta&t=bM73igS24iub2CwCpQWPHmHpd4hIKz50YGo5yP1AaGk",
    ],
    description: "A comprehensive dashboard to analyze stock and crypto data.",
    liveDemo: "https://upstock-in.vercel.app/",
    github: "https://github.com/",
  },
  {
    title: "E-Commerce Platform",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQE-wx5m_BumDw/profile-treasury-image-shrink_800_800/B4DZX9HHMnHwAY-/0/1743708256527?e=1744315200&v=beta&t=GhKxweZGq6lsZEcoxX9N_ZtAEbRWVk1hEthaUD0epfQ",
      "https://media.licdn.com/dms/image/v2/D4D2DAQGNiJA3HzvQkQ/profile-treasury-image-shrink_800_800/B4DZX9G98DHAAg-/0/1743708218419?e=1744315200&v=beta&t=SJyAmrzfuMDpyBcVMuyl5Tks1qU1fRlYIs0J7EKmqvE",
    ],
    description:
      "A complete e-commerce platform with product filtering, cart, and payments.",
    liveDemo: "https://mauryagallaxyofwishes.vercel.app/",
    github: "https://github.com/ashwinm-oo7/tyrecentre",
  },
];

const Projects = () => {
  return (
    <section id="Projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="carousel-container">
              <div className="carousel-track">
                {project.images.concat(project.images).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title} ${idx + 1}`}
                    className="carousel-image"
                  />
                ))}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
