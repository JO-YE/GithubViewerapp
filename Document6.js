const displayUserInfo = (user) => {
			const userInfo = `
				<div>
				  <img src="${user.avatar_url}" alt="${user.login}">
				// the alt attribute is used with the img tag as an alternative text for an image
				  <h3>${user.name}</h3>
                  <p>${user.bio}</p>
                  <p>Followers: ${user.followers}</p>
                  <p>Following: ${user.following}</p>
               </div>
              `;
		     userInfoContainer.innerHTML = userInfo;
				  
		const displayRepositories = (repositories) => {
  const repositoriesHTML = repositories
    .map((repo) => {
      return `
        <div class="repository">
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <p>Stars: ${repo.stargazers_count}</p>
          <p>Forks: ${repo.forks_count}</p>
        </div>
      `;
    })
    .join('');

  repositoriesContainer.innerHTML = repositoriesHTML;
};