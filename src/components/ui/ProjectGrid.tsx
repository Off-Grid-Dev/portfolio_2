import ProjectCard from "./ProjectCard";
import cfScreenshot from "../../assets/Screenshot-css-frameworks.png";
import spScreenshot from "../../assets/Screenshot-semester-project.png";
import jsScreenshot from "../../assets/Screenshot-js-frameworks.png";
import peScreenshot from "../../assets/Screenshot-project-exam.png";

const ProjectGrid = () => {
  const baseUrl = "https://api.github.com/repos/off-grid-dev/";

  const urlArray: string[][] = [
    [
      `${baseUrl}css_frameworks`,
      cfScreenshot,
      "Reusable component-driven layouts and a polished footer redesign.",
    ],
    [
      `${baseUrl}SemesterProject2`,
      spScreenshot,
      "A social platform for dog lovers — profiles, details and responsive UI.",
    ],
    [
      `${baseUrl}javascript_frameworks`,
      jsScreenshot,
      "E-commerce demo with search, cart persistence and modern UI patterns.",
    ],
    [
      `${baseUrl}project_exam2`,
      peScreenshot,
      "A TypeScript-heavy project showcasing architecture and performance.",
    ],
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 pb-16">
      {urlArray.map((item, idx) => {
        return (
          <ProjectCard
            key={idx}
            url={item[0]}
            bgImage={item[1]}
            teaser={item[2]}
          />
        );
      })}
    </div>
  );
};

export default ProjectGrid;
