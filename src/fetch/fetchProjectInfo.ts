export type Project = {
  id: string;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
  language: string;
  visibility: string;
};

export const fetchRepoData = async (url: string): Promise<Project> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `There was a problem with the response:
        ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`oh no! couldn't fetch the repo! ${err}`);
  }
};
