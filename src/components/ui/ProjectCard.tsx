import { Suspense, use, type FC } from "react";
import { fetchRepoData, type Project } from "../../fetch/fetchProjectInfo";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../pages/ErrorPage";

type ProjectCardProp = {
  url: string;
};

const repoPromises = new Map<string, Promise<Project>>();

function getRepoPromise(url: string) {
  if (!repoPromises.has(url)) {
    repoPromises.set(url, fetchRepoData(url));
  }
  return repoPromises.get(url)!;
}

const Project: FC<ProjectCardProp> = ({ url }) => {
  const repoResult: Project = use(getRepoPromise(url));

  // const { data } = repoResult;

  console.log(repoResult);

  return (
    <div>
      <h2>project card!</h2>
    </div>
  );
};

const ProjectCard: FC<ProjectCardProp> = ({ url }) => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<p>...loading</p>}>
        <Project url={url} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProjectCard;
