const API = "https://api.github.com/users";

export const fetchRepositories = async (_username) => {
  try {
    const response = await fetch(`${API}/${_username}/repos`);
    // the await keyword is used to pause the execute until the fetch request resolves and returns a response.
    if (!response.ok) {
      throw new Error("Unable to fetch Repositories.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch repositories.");
  }
};
