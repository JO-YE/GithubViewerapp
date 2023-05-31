const API = 'https://api.github.com/users';

export const fetchUser = async (username) => {
	try {
		const response = await fetch('${API}/${username}');
		// the await keyword is used to pause the execute until the fetch request resolves and returns a response.
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const data = await response.json();
		return data;
	}   catch (error) {
		console.error('Error:' error);
		throw new Error('Failed to fetch user information.');
	}
};