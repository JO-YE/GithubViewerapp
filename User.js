const API = "https://api.github.com/users";
let page = 1;
let perPage = 30;
let users = [];

export const fetchUsers = async () => {
  try {
    const response = await fetch(
      `${API}?since=${(page - 1) * perPage}&per_page=${perPage}`
    );
    // the await keyword is used to pause the execute until the fetch request resolves and returns a response.
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    users = [...users, ...data];
    page++;
    return users;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch user information.");
  }
};

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
