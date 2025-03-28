import React from "react";
import { Container } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Teaching Assistant",
    company: "Rochester Institute of Technology",
    duration: "Aug 2023 - Present",
    description: "Guided students in advanced programming, GUI, and game development courses, assisting with Unreal Engine and Unity projects.",
  },
  {
    title: "Game Developer Intern",
    company: "ChennaiGames",
    duration: "Jan 2023 - May 2023",
    description: "Developed and published LudoX, an AI-powered multiplayer game with interactive mechanics and real-time online gameplay.",
  },
  {
    title: "Cloud Computing Intern",
    company: "IIT Kharagpur",
    duration: "June 2022 - Aug 2022",
    description: "Worked with AWS services like Lambda, S3, and CloudWatch to optimize cloud applications and automate workflows.",
  },
];

const ExperienceTimeline = () => {
  return (
    <Container fluid className="timeline-section">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h5>{exp.company}</h5>
              <p className="timeline-duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ExperienceTimeline;
