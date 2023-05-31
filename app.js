import fetchUser from ./User.js;
import fetchRepo from ./Fetch.js;

const form = document.getElementById('github-form');
const userInfoContainer = document.getElementId('user-info');
const repositoriesContainer = document.getElementById('repositories');

form.addEventListener('submit', async (event) => {
	event.preventDefault();
	const username = document.getElementById('username-input').value.trim();
	
	if (username === '') {
		alert('Please enter a username.')
		return;
	}
	
	try {
		const user = await fetchUser(username);
		const repositories = await fetchRepo(username);
		
		displayUserInfo(user);
        displayRepositories(repositories);
	} catch (error) {
		console.error('Error:', error);
		alert('Error fetching User information and Repositories.');
	}