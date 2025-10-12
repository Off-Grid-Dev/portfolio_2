import ProjectCard from "./ProjectCard";
import cfScreenshot from "../../assets/Screenshot-css-frameworks.png";
import spScreenshot from "../../assets/Screenshot-semester-project.png";
import jsScreenshot from "../../assets/Screenshot-js-frameworks.png";
import peScreenshot from "../../assets/Screenshot-project-exam.png";

const ProjectGrid = () => {
  const baseUrl = "https://api.github.com/repos/off-grid-dev/";

  const urlArray: string[][] = [
    [`${baseUrl}css_frameworks`, cfScreenshot],
    [`${baseUrl}SemesterProject2`, spScreenshot],
    [`${baseUrl}javascript_frameworks`, jsScreenshot],
    [`${baseUrl}project_exam2`, peScreenshot],
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 pb-16">
      {urlArray.map((item, idx) => {
        return <ProjectCard key={idx} url={item[0]} bgImage={item[1]} />;
      })}
    </div>
  );
};

export default ProjectGrid;
