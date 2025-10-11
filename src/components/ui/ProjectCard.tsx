import { Suspense, use, type FC } from "react";
import { fetchRepoData, type Project } from "../../fetch/fetchProjectInfo";
import { ErrorBoundary } from "react-error-boundary";

type ProjectCardProp = {
  url: string;
};

const Project: FC<ProjectCardProp> = ({ url }) => {
  const res = use(fetchRepoData(url));
  const { data } = res;

  return (
    <div id={data.id}>
      <img src={data.img.url} alt={data.img.alt} />
      <h2>{data.name}</h2>
    </div>
  );
};

const ProjectCard: FC<ProjectCardProp> = ({ url }) => {
  return (
    <ErrorBoundary fallback={<p>WHOOPSIE</p>}>
      <Suspense fallback={<p>...loading</p>}>
        <Project url={url} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProjectCard;
