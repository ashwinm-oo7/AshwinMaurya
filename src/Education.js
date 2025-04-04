import React from "react";
import "./Education.css"; // Import CSS file

const educationData = [
  {
    degree: "Master of Science in Information Technology",
    university: "D.G. Ruparel College of Science, Mumbai University",
    year: "2019 - 2021",
    logo: "https://dgr.mespune.org/wp-content/uploads/2022/03/customLogo.png", // Example Logo
    description:
      "Advanced studies in software development, data science, and modern IT technologies.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    university: "D.G. Ruparel College of Science, Mumbai University",
    year: "2015 - 2018",
    logo: "https://media.gettyimages.com/id/684210918/photo/special-project-main-building-at-d-g-ruparel-college-in-matunga-west.jpg?s=612x612&w=gi&k=20&c=BiZfCzqfrbHQwfImUPLiwaCJw1YAKJtQQ0q4sZrA2lI=", // Example Logo
    description:
      "Focused on programming, algorithms, and database management systems.",
  },
];

const Education = () => {
  return (
    <section id="Education">
      <h2>
        Education{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="50"
          height="50"
          className="graduation-cap-icon"
        >
          <path
            d="M32 2L2 16l30 14 30-14L32 2zm0 4.8L54.4 16 32 27.2 9.6 16 32 6.8zM12 34v12c0 6.6 9 12 20 12s20-5.4 20-12V34l-20 9-20-9zm4 2.8l16 7.2v10.4c-9.6-.4-16-5-16-9.6V36.8zm32 0v8c0 4.6-6.4 9.2-16 9.6V44l16-7.2z"
            fill="currentColor"
          />
        </svg>
      </h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <img
              src={edu.logo}
              alt={`${edu.university} logo`}
              className="education-logo"
            />
            <div className="education-info">
              <h3>{edu.degree}</h3>
              <h4>{edu.university}</h4>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
