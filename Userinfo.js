const userInfoContainer = document.getElementById("user-info");
const repositoriesContainer = document.getElementById("repositories");
const usersContainer = document.querySelector(".github-users");

export function populateGithubUsers(users) {
  const usersHtml = users
    .map((user) => {
      return `
        <ul>
          <li style="list-style: circle; margin-bottom: 10px;">
            <img src="${user.avatar_url}" alt="${user.login}">
            <h3>${user.login}</h3>
            <a href="https://github.com/${user.login}" target="_blank"> View Profile</a>
         </li>
       </ul>
      `;
    })
    .join("");
  usersContainer.innerHTML = usersHtml;
}

export const displayUserInfo = (user) => {
  const userInfo = `
				<div>
				  <img src="${user.avatar_url}" alt="${user.login}">
				  <!-- the alt attribute is used with the img tag as an alternative text for an image -->
				  <h3>${user.name}</h3>
          <p>${user.bio}</p>
          <p>Followers: ${user.followers}</p>
          <p>Following: ${user.following}</p>
          <a href="https://github.com/${user.login}" target="_blank"> View Profile</a>
        </div>
       `;
  userInfoContainer.innerHTML = userInfo;
};

export function displayRepositories(repositories) {
  const repositoriesHTML = repositories
    .map((repo) => {
      return `
        <div class="repository">
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <p>Stars: ${repo.stargazers_count}</p>
          <p>Forks: ${repo.forks_count}</p>
          <a href="${repo.html_url}" target="_blank"> View Repository</a>
        </div>
      `;
    })
    .join("");

  repositoriesContainer.innerHTML = repositoriesHTML;
}
