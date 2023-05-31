export function populateGithubUsers(users) {
  const usersHtml = `
          <ul>
            ${users
              .map(
                (user) =>
                  `<li>
                      <img src="${user.avatar_url}" alt="${user.login}">
                      <h3>${user.name}</h3>
                  </li>`
              )
              .join("")}
          </ul>
    `;
  usersContainer.innerHTML = usersHtml;
}

export function populateGithubUsers(users) {
  const usersHtml = users
    .map((user) => {
      return `
          <ul>
            <li>
              <img src="${user.avatar_url}" alt="${user.login}">
              <h3>${user.name}</h3>
              <p>${user.bio}</p>
              <p>Followers: ${user.followers}</p>
              <p>Following: ${user.following}</p>
           </li>
         </ul>
        `;
    })
    .join("");
  usersContainer.innerHTML = usersHtml;
}

export function populateGithubUsers(users) {
  let usersHtml = "";
  for (const user of users) {
    usersHtml += `
        <ul>
          <li>
            <img src="${user.avatar_url}" alt="${user.login}">
            <h3>${user.name}</h3>
            <p>${user.bio}</p>
            <p>Followers: ${user.followers}</p>
            <p>Following: ${user.following}</p>
          </li>
        </ul>
      `;
  }
  usersContainer.innerHTML = usersHtml;
}
