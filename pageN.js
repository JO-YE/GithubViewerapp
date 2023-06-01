import { fetchUser } from "./User.js";
import { fetchRepositories } from "./Repo.js";
import { displayRepositories, displayUserInfo } from "./Userinfo.js";

document.addEventListener("DOMContentLoaded", async function () {
  var urlParams = new URLSearchParams(window.location.search);
  var username = urlParams.get("username");
  const user = await fetchUser(username);
  const repositories = await fetchRepositories(username);

  displayUserInfo(user);
  displayRepositories(repositories);
});
