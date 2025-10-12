import { Suspense, use, type FC } from "react";
import { fetchRepoData, type Project } from "../../fetch/fetchProjectInfo";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../pages/ErrorPage";
import ProjectCardSuspense from "./ProjectCard-Suspense";
import { Link } from "react-router";

type ProjectCardProp = {
  url: string;
  bgImage: string;
  teaser?: string;
};

const repoPromises = new Map<string, Promise<Project>>();

function getRepoPromise(url: string) {
  if (!repoPromises.has(url)) {
    repoPromises.set(url, fetchRepoData(url));
  }
  return repoPromises.get(url)!;
}

const Project: FC<ProjectCardProp> = ({ url, bgImage, teaser }) => {
  const repoResult: Project = use(getRepoPromise(url));

  const { id, name, owner, created_at, updated_at, language, visibility } =
    repoResult;

  const createdDate = new Date(created_at).toDateString();
  const updateDate = new Date(updated_at).toDateString();

  return (
    <div
      id={id}
      className="relative shadow-box-inset rounded-md p-6 text-text-light isolate"
    >
      <img src={bgImage} alt="screenshot of project" className="-z-10 mb-2" />
      <h2 className="text-2xl">{name}</h2>
      {teaser && <p className="text-sm mt-2 text-text-light/90">{teaser}</p>}
      <img
        className="rounded-full block absolute top-1 right-1 max-w-[120px]"
        src={owner.avatar_url}
        alt="picture of me"
        title="repo author"
      />
      <div className="md:flex md:justify-between">
        <ul>
          <li>
            <h3 className="text-xl">stats</h3>
          </li>
          <li>
            <span>created: </span>
            {createdDate}
          </li>
          <li>
            <span>last updated: </span>
            {updateDate}
          </li>
          <li>
            <span>primary language: </span>
            {language}
          </li>
          <li>
            <span>visibility: </span>
            {visibility}
          </li>
        </ul>
        <Link
          to={`/projects/${name}`}
          state={{ repo: repoResult, bgImage }}
          className="mt-auto inline-block py-2 px-3 bg-secondary-300 text-text-regular cursor-pointer hover:bg-secondary-100 rounded-sm"
        >
          view article
        </Link>
      </div>
    </div>
  );
};

const ProjectCard: FC<ProjectCardProp> = ({ url, bgImage }) => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<ProjectCardSuspense />}>
        <Project url={url} bgImage={bgImage} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProjectCard;
