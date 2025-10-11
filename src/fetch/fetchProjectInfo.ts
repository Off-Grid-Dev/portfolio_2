export type Project = {
  data: {
    id: string;
    name: string;
    img: {
      url: string;
      alt: string;
    };
  };
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
    return data.data;
  } catch (err) {
    console.error("Couldn't fetch the repo data!\n", err);
    throw new Error(`Oh no!!! ${err}`);
  }
};
