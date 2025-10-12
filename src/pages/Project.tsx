import { type FC, Suspense, use } from "react";
import { useParams, useLocation } from "react-router";
import ReactMarkdown from "react-markdown";
import type { Project } from "../fetch/fetchProjectInfo";
import { fetchRepoData } from "../fetch/fetchProjectInfo";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../pages/ErrorPage";
import ProjectCardSuspense from "../components/ui/ProjectCard-Suspense";

// screenshots (bundled assets)
import cfScreenshot from "../assets/Screenshot-css-frameworks.png";
import spScreenshot from "../assets/Screenshot-semester-project.png";
import jsScreenshot from "../assets/Screenshot-js-frameworks.png";
import peScreenshot from "../assets/Screenshot-project-exam.png";

// import markdown articles as raw strings from src/assets
import cssArticle from "../assets/article-text-css.md?raw";
import jsArticle from "../assets/article-text-js.md?raw";
import peArticle from "../assets/article-text-pe.md?raw";
import spArticle from "../assets/article-text-sp.md?raw";

// live site links for each project
const liveLinkMap: Record<string, string> = {
  css_frameworks: "https://fakebookcss.netlify.app/",
  SemesterProject2: "https://semester2-project.netlify.app/",
  javascript_frameworks: "https://golden-griffin-ad4714.netlify.app/",
  project_exam2: "https://off-grid-dev.github.io/project_exam2/",
};

type ProjectPageProps = {
  data?: Project;
};

const articleMap: Record<string, string> = {
  css_frameworks: cssArticle,
  javascript_frameworks: jsArticle,
  project_exam2: peArticle,
  SemesterProject2: spArticle,
};

const imageMap: Record<string, string> = {
  css_frameworks: cfScreenshot,
  javascript_frameworks: jsScreenshot,
  project_exam2: peScreenshot,
  SemesterProject2: spScreenshot,
};

// Suspense-compatible repo promise cache (same pattern used in ProjectCard)
const repoPromises = new Map<string, Promise<Project>>();
function getRepoPromise(url: string) {
  if (!repoPromises.has(url)) {
    repoPromises.set(url, fetchRepoData(url));
  }
  return repoPromises.get(url)!;
}

const ProjectPage: FC<ProjectPageProps> = () => {
  const { name } = useParams();
  const location = useLocation();
  const state = (location.state as any) ?? {};

  // Consume repo data passed from ProjectCard via Link state when available.
  const repo: Project | null = (state.repo as Project) ?? null;
  const bgImage: string | null =
    (state.bgImage as string) ??
    (name ? imageMap[name as string] ?? null : null);
  const liveLink: string | null =
    state.liveLink ?? (name ? liveLinkMap[name] ?? null : null);

  // choose article text based on repo name
  const article = name ? articleMap[name] ?? "" : "";

  // If repo data is provided via location.state, render immediately.
  if (repo) {
    return (
      <main className="max-w-5xl mx-auto p-6">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <div className="md:col-span-2">
            <header className="mb-8 pb-4 border-b border-[var(--color-primary-200)]">
              <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-[var(--color-primary-900)]">
                {repo.name}
              </h1>
              <p className="text-sm text-[var(--color-primary-700)]">{`Owned by ${repo.owner.login}`}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={`https://github.com/${repo.owner.login}/${repo.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-3 bg-[var(--color-primary-600)] text-[var(--color-text-light)] rounded-md shadow hover:bg-[var(--color-primary-700)] transition"
                >
                  README
                </a>
                {liveLink ? (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-3 border border-[var(--color-primary-600)] text-[var(--color-primary-700)] rounded-md hover:bg-[var(--color-primary-100)] transition"
                  >
                    Live site
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 py-2 px-3 border border-[var(--color-primary-200)] text-[var(--color-primary-400)] rounded-md opacity-60 cursor-not-allowed">
                    Live site unavailable
                  </span>
                )}
              </div>
            </header>

            <article className="prose max-w-none bg-[var(--color-primary-100)] p-6 rounded-xl shadow-lg text-[var(--color-primary-900)]">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold my-4" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-semibold my-3" {...props} />
                  ),
                  p: (props: any) => (
                    <p
                      className="text-base leading-7 mb-4 text-[var(--color-primary-900)]"
                      {...props}
                    />
                  ),
                  a: (props: any) => (
                    <a
                      className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  img: (props: any) => (
                    <img
                      className="rounded-lg w-full mb-4 object-cover border border-[var(--color-primary-200)] shadow"
                      {...props}
                    />
                  ),
                  ul: (props: any) => (
                    <ul
                      className="list-disc ml-6 mb-4 text-[var(--color-primary-900)]"
                      {...props}
                    />
                  ),
                  code: (props: any) => {
                    const { inline, children } = props;
                    if (inline) {
                      return (
                        <code className="bg-[var(--color-primary-200)] text-[var(--color-primary-900)] px-1 rounded">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <pre className="bg-[var(--color-primary-200)] text-[var(--color-primary-900)] text-sm rounded p-4 overflow-auto">
                        <code>{children}</code>
                      </pre>
                    );
                  },
                }}
              >
                {article ? article : ""}
              </ReactMarkdown>
            </article>
          </div>

          <aside className="md:col-span-1">
            <div className="mb-4">
              {bgImage ? (
                <img
                  src={bgImage}
                  alt={`${name} screenshot`}
                  className="w-full rounded-xl shadow-lg object-cover border border-[var(--color-primary-200)]"
                />
              ) : (
                <div className="rounded-xl bg-[var(--color-primary-100)] p-6 text-center italic border border-[var(--color-primary-200)]">
                  No screenshot available
                </div>
              )}
            </div>

            <div className="bg-[var(--color-primary-100)] p-4 rounded-xl text-sm border border-[var(--color-primary-200)] shadow">
              <div className="flex items-center gap-3 mb-3">
                {repo.owner.avatar_url && (
                  <img
                    src={repo.owner.avatar_url}
                    alt="owner avatar"
                    className="w-12 h-12 rounded-full border border-[var(--color-primary-200)]"
                  />
                )}
                <div>
                  <div className="font-semibold text-[var(--color-primary-900)]">
                    {repo.owner.login}
                  </div>
                  <div className="text-xs text-[var(--color-primary-700)]">
                    Repository owner
                  </div>
                </div>
              </div>

              <h3 className="font-semibold mb-2 text-[var(--color-primary-900)]">
                Repo info
              </h3>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <dt className="text-[var(--color-primary-700)]">Created</dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {new Date(repo.created_at).toDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-primary-700)]">Updated</dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {new Date(repo.updated_at).toDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-primary-700)]">Language</dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {repo.language ?? "-"}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-primary-700)]">
                    Visibility
                  </dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {repo.visibility ?? "-"}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </main>
    );
  }

  // Suspended fallback rendering: fetch repo via promise and suspend using use().
  const SuspendedContent: FC<{
    repoName: string | undefined;
    initialBg?: string | null;
  }> = ({ repoName }) => {
    const url = `https://api.github.com/repos/off-grid-dev/${repoName}`;
    const repoResult: Project = use(getRepoPromise(url));
    const usedBg = state.bgImage ?? imageMap[repoName as string] ?? null;

    return (
      <main className="max-w-5xl mx-auto p-6">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <div className="md:col-span-2">
            <header className="mb-8 pb-4 border-b border-[var(--color-primary-200)]">
              <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-[var(--color-primary-900)]">
                {repoResult.name}
              </h1>
              <p className="text-sm text-[var(--color-primary-700)]">{`Owned by ${repoResult.owner.login}`}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={`https://github.com/${repoResult.owner.login}/${repoResult.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-3 bg-[var(--color-primary-600)] text-[var(--color-text-light)] rounded-md shadow hover:bg-[var(--color-primary-700)] transition"
                >
                  README
                </a>
                <a
                  href={`https://github.com/${repoResult.owner.login}/${repoResult.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-3 border border-[var(--color-primary-600)] text-[var(--color-primary-700)] rounded-md hover:bg-[var(--color-primary-100)] transition"
                >
                  Live site
                </a>
              </div>
            </header>

            <article className="prose max-w-none bg-[var(--color-primary-100)] p-6 rounded-xl shadow-lg text-[var(--color-primary-900)]">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold my-4" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-semibold my-3" {...props} />
                  ),
                  p: (props: any) => (
                    <p
                      className="text-base leading-7 mb-4 text-[var(--color-primary-900)]"
                      {...props}
                    />
                  ),
                  a: (props: any) => (
                    <a
                      className="text-[var(--color-primary-700)] underline hover:text-[var(--color-primary-900)] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  img: (props: any) => (
                    <img
                      className="rounded-lg w-full mb-4 object-cover border border-[var(--color-primary-200)] shadow"
                      {...props}
                    />
                  ),
                  ul: (props: any) => (
                    <ul
                      className="list-disc ml-6 mb-4 text-[var(--color-primary-900)]"
                      {...props}
                    />
                  ),
                  code: (props: any) => {
                    const { inline, children } = props;
                    if (inline) {
                      return (
                        <code className="bg-[var(--color-primary-200)] text-[var(--color-primary-900)] px-1 rounded">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <pre className="bg-[var(--color-primary-200)] text-[var(--color-primary-900)] text-sm rounded p-4 overflow-auto">
                        <code>{children}</code>
                      </pre>
                    );
                  },
                }}
              >
                {article ? article : ""}
              </ReactMarkdown>
            </article>
          </div>

          <aside className="md:col-span-1">
            <div className="mb-4">
              {usedBg ? (
                <img
                  src={usedBg}
                  alt={`${repoResult.name} screenshot`}
                  className="w-full rounded-xl shadow-lg object-cover border border-[var(--color-primary-200)]"
                />
              ) : (
                <div className="rounded-xl bg-[var(--color-primary-100)] p-6 text-center italic border border-[var(--color-primary-200)]">
                  No screenshot available
                </div>
              )}
            </div>

            <div className="bg-[var(--color-primary-100)] p-4 rounded-xl text-sm border border-[var(--color-primary-200)] shadow">
              <div className="flex items-center gap-3 mb-3">
                {repoResult.owner.avatar_url && (
                  <img
                    src={repoResult.owner.avatar_url}
                    alt="owner avatar"
                    className="w-12 h-12 rounded-full border border-[var(--color-primary-200)]"
                  />
                )}
                <div>
                  <div className="font-semibold text-[var(--color-primary-900)]">
                    {repoResult.owner.login}
                  </div>
                  <div className="text-xs text-[var(--color-primary-700)]">
                    Repository owner
                  </div>
                </div>
              </div>

              <h3 className="font-semibold mb-2 text-[var(--color-primary-900)]">
                Repo info
              </h3>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <dt className="text-[var(--color-primary-700)]">Created</dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {new Date(repoResult.created_at).toDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-primary-700)]">Updated</dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {new Date(repoResult.updated_at).toDateString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-primary-700)]">Language</dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {repoResult.language ?? "-"}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-primary-700)]">
                    Visibility
                  </dt>
                  <dd className="text-[var(--color-primary-900)]">
                    {repoResult.visibility ?? "-"}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </main>
    );
  };

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<ProjectCardSuspense />}>
        <SuspendedContent repoName={name} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default ProjectPage;
