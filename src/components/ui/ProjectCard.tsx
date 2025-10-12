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
      className="relative shadow-lg rounded-xl p-6 bg-primary-100 text-color-primary-900 isolate border border-primary-200"
    >
      <img
        src={bgImage}
        alt="screenshot of project"
        className="-z-10 mb-3 rounded-lg border border-primary-200 object-cover w-full h-32 md:h-40"
      />
      <h2 className="text-2xl font-bold mb-1 text-primary-900">{name}</h2>
      {teaser && (
        <div className="mb-4">
          <blockquote className="text-base italic px-4 py-2 rounded-lg bg-secondary-100 border-l-4 border-primary-300 text-primary-700 shadow-sm">
            {teaser}
          </blockquote>
        </div>
      )}
      <img
        className="rounded-full block absolute top-3 right-3 w-12 h-12 border-2 border-primary-200 shadow"
        src={owner.avatar_url}
        alt="picture of me"
        title="repo author"
      />
      <div className="md:flex md:justify-between mt-4">
        <ul className="text-sm space-y-1">
          <li>
            <h3 className="text-lg font-semibold text-primary-700 mb-1">
              Stats
            </h3>
          </li>
          <li>
            <span className="font-medium text-primary-700">Created: </span>
            <span className="text-primary-900">{createdDate}</span>
          </li>
          <li>
            <span className="font-medium text-primary-700">Last updated: </span>
            <span className="text-primary-900">{updateDate}</span>
          </li>
          <li>
            <span className="font-medium text-primary-700">
              Primary language:{" "}
            </span>
            <span className="text-primary-900">{language}</span>
          </li>
          <li>
            <span className="font-medium text-primary-700">Visibility: </span>
            <span className="text-primary-900">{visibility}</span>
          </li>
        </ul>
        <Link
          to={`/projects/${name}`}
          state={{ repo: repoResult, bgImage }}
          className="inline-block py-2 px-4 bg-primary-600 text-text-light font-semibold cursor-pointer hover:bg-primary-700 rounded-md shadow mt-auto transition"
        >
          View article
        </Link>
      </div>
    </div>
  );
};

const ProjectCard: FC<ProjectCardProp> = ({ url, bgImage, teaser }) => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<ProjectCardSuspense />}>
        <Project url={url} bgImage={bgImage} teaser={teaser} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProjectCard;
