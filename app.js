import { fetchUser, fetchUsers } from "./User.js";
import { fetchRepositories } from "./Repo.js";
import {
  displayRepositories,
  populateGithubUsers,
  displayUserInfo,
} from "./Userinfo.js";

const form = document.getElementById("github-form");

document.addEventListener("DOMContentLoaded", async () => {
  const users = await fetchUsers();
  console.log(users);
  populateGithubUsers(users);

  window.addEventListener("scroll", async () => {
    const scrollPosition = window.innerHeight + window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
      try {
        const users = await fetchUsers();
        populateGithubUsers(users);
      } catch (error) {
        console.error(error);
      }
    }
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // TODO: remove scroll event listener

  const username = document.getElementById("username-input").value.trim();

  if (username === "") {
    alert("Please enter a username.");
    return;
  }

  try {
    const user = await fetchUser(username);
    const repositories = await fetchRepositories(username);

    displayUserInfo(user);
    displayRepositories(repositories);
  } catch (error) {
    console.error("Error:", error);
    alert("Error fetching User information and Repositories.");
  }
});
