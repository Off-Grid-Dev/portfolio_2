import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const baseUrl = "https://api.github.com/repos/off-grid-dev/";

  const urlArray: string[] = [
    `${baseUrl}css_frameworks`,
    `${baseUrl}SemesterProject2`,
    `${baseUrl}javascript_frameworks`,
    `${baseUrl}project_exam2`,
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 pb-16">
      {urlArray.map((url) => {
        return <ProjectCard key={url} url={url} />;
      })}
    </div>
  );
};

export default ProjectGrid;
