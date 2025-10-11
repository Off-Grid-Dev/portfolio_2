import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const urlArray: string[] = [
    "https://api.github.com/repos/off-grid-dev/css_frameworks",
  ];

  return (
    <div>
      {urlArray.map((url) => {
        return <ProjectCard key={url} url={url} />;
      })}
    </div>
  );
};

export default ProjectGrid;
