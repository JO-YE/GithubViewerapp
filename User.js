const API = "https://api.github.com/users";
let page = 1; // Assuming page and perPage variables are defined elsewhere
let perPage = 1000;
let users = [];

export const fetchUsers = async () => {
  try {
    const randomPage = Math.floor(Math.random() * 10) + 1; // Generate a random page number

    const response = await fetch(
      `${API}?since=${(randomPage - 1) * perPage}&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    users = data; // Assuming users variable is defined elsewhere
    page++; // Increment the page number for the next fetch

    return users;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch user information.");
  }
};

// Using "async" and "await" with "fetch" allows you to write more readable and sequential code
export const fetchUser = async (_username) => {
  try {
    const response = await fetch(`${API}/${_username}`);
    // the await keyword is used to pause the execute until the fetch request resolves and returns a response.
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch user information.");
  }
};
