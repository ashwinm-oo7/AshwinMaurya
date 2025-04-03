/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./App.css";
import logo from "./logo.jpg";
import background from "./bg-image.jpg";
import Projects from "./Projects";
function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".nav-links");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show"); // Ensure menu closes on item click
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".nav-links");
      const menuToggle = document.querySelector(".menu-toggle");

      if (menu && menuToggle) {
        if (
          !menu.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {
          menu.classList.remove("show");
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="container">
      {/* Navigation Bar */}
      <header>
        <nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
          <ul className="nav-links">
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Certifications",
              "Awards",
              "Projects",
              "Contact",
            ].map((tab) => (
              <li
                key={tab}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click from propagating to document event
                  scrollToSection(tab);
                  closeMenu();
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section
          id="Home"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            width: "100vw", // Ensures full width
            minHeight: "100vh", // Full screen height
            margin: "0", // Remove any unwanted margins
            padding: "0", // Remove any unwanted padding
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img src={logo} alt="Ashwini Kumar Maurya" className="profile-img" />
          <h2 style={{ backgroundColor: "" }}>
            <span
              style={{
                display: "inline-block",
                animation: "wave 1.5s infinite ease-in-out",
                transformOrigin: "70% 70%",
              }}
            >
              👋
            </span>{" "}
            <span
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Hello, I'm
            </span>{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              Ashwini Kumar Maurya
            </span>
          </h2>

          <span className="typing">Software Developer</span>

          <div className="button-group">
            <a
              onClick={() => scrollToSection("Contact")}
              className="btn-primary"
              style={{ cursor: "pointer" }}
            >
              Let's Connect
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1jBxwvhBU_WShkSQeE7D6nE-sPWsyD-h0"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              download="Ashwini_Kumar_Maurya_Resume.pdf"
              onClick={(e) => {
                e.preventDefault(); // Prevent default behavior to handle both actions
                window.open(
                  "https://drive.google.com/file/d/1jBxwvhBU_WShkSQeE7D6nE-sPWsyD-h0/view?usp=sharing",
                  "_blank"
                ); // Open in new tab
                window.location.href =
                  "https://drive.google.com/uc?export=download&id=1jBxwvhBU_WShkSQeE7D6nE-sPWsyD-h0"; // Auto-download
              }}
            >
              Download My Resume
            </a>
          </div>
        </section>

        <section id="About">
          <h2>About Me</h2>
          <div className="about-container">
            <img
              // src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" https://github.com/ashwinm-oo7/upgrad/tree/main
              src={logo}
              alt="Ashwin Profile"
              className="about-img"
            />
            <div className="about-content">
              <p>
                👋 Hello! I'm <b>Ashwini Kumar Maurya</b>, a passionate{" "}
                <b>Software Developer</b>
                with expertise in **MERN Stack**, **Databases**, and **Cloud
                Technologies**. I love **problem-solving** and optimizing
                complex algorithms for efficiency.
              </p>
              <p>
                My journey started with a deep curiosity for **technology &
                innovation**, leading me to build multiple{" "}
                <b>
                  eCommerce platforms, stock analysis tools, and real-time
                  messaging applications.
                </b>
              </p>
              <p>
                If you're interested in **collaborating, discussing tech, or
                hiring a dedicated developer**, let's connect! 🚀
              </p>
              <a
                href="https://www.linkedin.com/in/ashwini-kumar-maurya/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
              >
                Connect on LinkedIn 🔗
              </a>
              {"  "}
              <a
                href="https://github.com/ashwinm-oo7/upgrad/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
              >
                Github Profile 🔗
              </a>
            </div>
          </div>
        </section>

        <section id="Skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {[
              {
                name: "Java",
                logo: "https://cdn-icons-png.flaticon.com/128/226/226777.png",
              },
              {
                name: "Python",
                logo: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
              },
              {
                name: "SQL",
                logo: "https://cdn-icons-png.flaticon.com/128/4299/4299956.png",
              },
              {
                name: "ReactJS",
                logo: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
              },
              {
                name: "NodeJS",
                logo: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
              },
              {
                name: "MongoDB",
                logo: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon.png",
              },
              {
                name: "MySQL",
                logo: "https://cdn-icons-png.flaticon.com/128/919/919836.png",
              },
              {
                name: "Power BI",
                logo: "https://cdn-icons-png.flaticon.com/128/3616/3616956.png",
              },
              {
                name: "Tableau",
                logo: "https://cdn-icons-png.flaticon.com/128/732/732220.png",
              },
              {
                name: "MSSQL",
                logo: "https://cdn-icons-png.flaticon.com/128/5968/5968364.png",
              },
            ].map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="Experience">
          <h2>Experience</h2>
          <div className="experience-container">
            <div className="experience-timeline">
              <div className="experience-card">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3>V R Technology Pvt LTD</h3>
                  <h4>Backend Developer (Internship)</h4>
                  <p>
                    Developed an e-commerce web app using Java, Spring Boot, and
                    Web Services.
                  </p>
                </div>
              </div>

              <div className="experience-card">
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <h3>Tyre Center</h3>
                  <h4>Sales Management</h4>
                  <p>
                    Handled sales, customer service, and inventory management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Certifications">
          <h2>Certifications</h2>
          <div className="certifications-container">
            <div className="cert-card">
              <img
                src="https://financialit.net/sites/default/files/444_0.jpg"
                alt="PostgreSQL SQL Developer"
                className="cert-logo"
              />
              <h3>SQL Developer</h3>
              <a
                href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzkwODcyMF84MjM3Njc4MTczOTYwNDE4MjgxNS5wbmciLCJ1c2VybmFtZSI6IkFzaHdpbmkgS3VtYXIgTWF1cnlhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4309%2FIntroduction-to-SQL%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1417102721030487071&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD070cvZKNEw0CEyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAHqv4LtBAAAA"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate
              </a>
            </div>

            <div className="cert-card">
              <img
                src="https://www.ncnonline.net/wp-content/uploads/2022/01/Upgrad-logo.jpg"
                alt="KnowledgeHut Certification"
                className="cert-logo"
              />
              <h3>Full Stack Development</h3>
              <a
                href="https://certificates.knowledgehut.com/a415195d-4d9a-4b81-9ca8-9d3cba11db8d-UG%20GGU%20Course%20completion-KH12-8009000-20240416016.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate
              </a>
            </div>
            <div className="cert-card">
              <img
                src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png"
                alt="Java Developer"
                className="cert-logo"
              />
              <h3>Java Programming</h3>
              <a
                href="https://www.udemy.com/certificate/UC-f51fe7ea-ee2e-4e97-b0e0-ec763bcbd8fa/"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate
              </a>
            </div>
          </div>
        </section>

        <section id="Awards">
          <h2>Awards & Achievements 🏆</h2>
          <div className="awards-container">
            <div className="award-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="Coding Competition"
                className="award-icon"
              />
              <h3>Hackathon Finalist</h3>
              <p>
                Reached the finals in a national-level coding hackathon,
                competing with top developers.
              </p>
            </div>

            <div className="award-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt="Best Developer Award"
                className="award-icon"
              />
              <h3>Best Developer Award</h3>
              <p>
                Recognized as the **Best Software Developer Intern** at VR
                Technology Pvt Ltd.
              </p>
            </div>

            <div className="award-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135729.png"
                alt="Top Performer"
                className="award-icon"
              />
              <h3>Top Performer</h3>
              <p>
                Achieved **Top Performer** status in a Full-Stack Development
                Bootcamp.
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="Contact">
          <h2>Contact Me 📬</h2>
          <div className="contact-container">
            <div className="contact-card">
              <img
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                alt="Email"
                className="contact-icon"
              />
              <h3>Email</h3>
              <p>
                <a href="mailto:ashwinmaurya9211@gmail.com">
                  ashwinmaurya9211@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-card">
              <img
                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                alt="LinkedIn"
                className="contact-icon"
              />
              <h3>LinkedIn</h3>
              <p>
                <a
                  href="https://www.linkedin.com/in/ashwini-kumar-maurya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </p>
            </div>

            <div className="contact-card">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="GitHub"
                className="contact-icon"
              />
              <h3>GitHub</h3>
              <p>
                <a
                  href="https://github.com/ashwinm-oo7?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check My Work
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <span class="footer-text">Created by Ashwini Kumar Maurya © 2025</span>
    </div>
  );
}

export default App;
