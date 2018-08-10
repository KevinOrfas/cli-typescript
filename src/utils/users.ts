import axios from 'axios';

export default async (): Promise<any> => {
	const results = await axios({
		method: 'get',
		url: 'https://driftrock-dev-test.herokuapp.com/users',
		params: {
			format: 'json'
		}
	});

	return results.data;
};
