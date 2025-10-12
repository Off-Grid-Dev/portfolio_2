import ProjectCard from "./ProjectCard";
import cfScreenshot from "../../assets/Screenshot-css-frameworks.png";
import spScreenshot from "../../assets/Screenshot-semester-project.png";
import jsScreenshot from "../../assets/Screenshot-js-frameworks.png";
import peScreenshot from "../../assets/Screenshot-project-exam.png";

const ProjectGrid = () => {
  const baseUrl = "https://api.github.com/repos/off-grid-dev/";

  const urlArray: string[][] = [
    [
      `${baseUrl}css_frameworks/tree/tree/improvements-for-portfolio`,
      cfScreenshot,
      "Reusable component-driven layouts and a polished footer redesign.",
      "https://fakebookcss.netlify.app/",
    ],
    [
      `${baseUrl}SemesterProject2/tree/improvements-for-portfolio`,
      spScreenshot,
      "A social platform for dog lovers — profiles, details and responsive UI.",
      "https://semester2-project.netlify.app/",
    ],
    [
      `${baseUrl}javascript_frameworks/tree/improvements-for-portfolio`,
      jsScreenshot,
      "E-commerce demo with search, cart persistence and modern UI patterns.",
      "https://golden-griffin-ad4714.netlify.app/",
    ],
    [
      `${baseUrl}project_exam2`,
      peScreenshot,
      "A TypeScript-heavy project showcasing architecture and performance.",
      "https://off-grid-dev.github.io/project_exam2/",
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
            liveLink={item[3]}
          />
        );
      })}
    </div>
  );
};

export default ProjectGrid;
