import React from "react";
import "./Projects.css"; // Import CSS file
import t1 from "./Screenshot1.png";
import t2 from "./Screenshot2.png";
import t3 from "./Screenshot3.png";
const projects = [
  {
    title: "Stock Analysis Dashboard",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQEf957yQU2rSg/profile-treasury-image-shrink_800_800/B4DZX9LdWHG8AY-/0/1743709395085?e=1744315200&v=beta&t=tX8OGkvn5qPOW4NpY4teBH2RlZEKlWYl-xNgkqSdUk0",
      "https://media.licdn.com/dms/image/v2/D4D2DAQGWDZ9kTFPH7g/profile-treasury-image-shrink_800_800/B4DZX9LlMAHwAc-/0/1743709427121?e=1744315200&v=beta&t=t39GFNYixZBfziV57mHTCmjwTqNoCR_suI1ctyRXdEc",
      "https://media.licdn.com/dms/image/v2/D4D2DAQFV1dgZc6rjFw/profile-treasury-image-shrink_800_800/B4DZX9LrkOH4Ac-/0/1743709453378?e=1744315200&v=beta&t=bM73igS24iub2CwCpQWPHmHpd4hIKz50YGo5yP1AaGk",
      "https://media.licdn.com/dms/image/v2/D4D2DAQHwGmMVKlkQ0w/profile-treasury-image-shrink_800_800/B4DZX9Lyi.GwAc-/0/1743709481731?e=1744344000&v=beta&t=1W_rAo55pujbVoXBU7odro0kM4EEVYrmy_XypK1ggN4",
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
      "https://media.licdn.com/dms/image/v2/D4D2DAQH3vsBBcJHa1w/profile-treasury-image-shrink_800_800/B4DZX9HRuNHwAY-/0/1743708299425?e=1744344000&v=beta&t=6DcApF7Ju8SORXGKbpDqDzNfWZ5vW1Ml1ScCW7N6djY",
      "https://media.licdn.com/dms/image/v2/D4D2DAQHKUkHuIgG18w/profile-treasury-image-shrink_800_800/B4DZX9HBz6GkAY-/0/1743708233940?e=1744344000&v=beta&t=5hYUWkyibOb_u79qxEkhTc0B0PwXdOBP0AZVpNlKhSM",
      "https://media.licdn.com/dms/image/v2/D4D2DAQHFxcTF2oiU9w/profile-treasury-image-shrink_800_800/B4DZX9Hi16GwAY-/0/1743708369102?e=1744344000&v=beta&t=1FZ-9ZTGzHUq1tloafzfSYcljxaxWn93ZBeHnS8Mr0o",
    ],
    description:
      "A complete e-commerce platform with product filtering, cart, and payments.",
    liveDemo: "https://mauryagallaxyofwishes.vercel.app/",
    github: "https://github.com/ashwinm-oo7/tyrecentre",
  },
  {
    title: "Task Management Tool",

    images: [t1, t2, t3],
    description:
      "Features include real-time chat, task assignment, and priority management.",
    liveDemo: "https://jackus-user-management-frontend.vercel.app/",
    github: "https://github.com/ashwinm-oo7/jackus-user-management-frontend/",
  },
];

const Projects = () => {
  return (
    <section id="Projects">
      <h2>
        My Projects{" "}
        <svg viewBox="0 0 64 64" width="64" height="64">
          <path
            d="M5 16h22l5 5h27a5 5 0 0 1 5 5v24a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V21a5 5 0 0 1 5-5z"
            fill="#fabb3d"
            stroke="black"
            stroke-width="2"
          />
          <rect
            x="12"
            y="25"
            width="40"
            height="30"
            rx="2"
            fill="white"
            stroke="black"
            stroke-width="2"
          />
          <line
            x1="16"
            y1="30"
            x2="44"
            y2="30"
            stroke="black"
            stroke-width="2"
          />
          <line
            x1="16"
            y1="35"
            x2="44"
            y2="35"
            stroke="black"
            stroke-width="2"
          />
          <line
            x1="16"
            y1="40"
            x2="36"
            y2="40"
            stroke="black"
            stroke-width="2"
          />
          <circle cx="48" cy="44" r="6" fill="black" />
          <path
            d="M48 37l1 4h4l1 2-3 2 2 3-2 2-3-2-3 2-2-2 2-3-3-2 1-2h4z"
            fill="white"
          />
        </svg>
      </h2>
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
