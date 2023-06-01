import { fetchUsers } from "./User.js";
import { populateGithubUsers } from "./Userinfo.js";

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

  window.removeEventListener("scroll", () => {});

  const username = document.getElementById("username-input").value.trim();

  if (username === "") {
    alert("Please enter a username.");
    return;
  }

  window.location.href =
    "response.html?username=" + encodeURIComponent(username);
});

const backToTopLink = document.querySelector(".back-to-top-link");

backToTopLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  location.reload();
});
