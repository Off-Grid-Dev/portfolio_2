import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const urlArray: string[] = [];

  return (
    <div>
      {urlArray.map((url) => {
        return <ProjectCard url={url} />;
      })}
    </div>
  );
};

export default ProjectGrid;
