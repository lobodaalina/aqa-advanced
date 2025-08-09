const axios = require('axios');

test('User can make a post', async () => {
	var response = await axios.post(
		`https://jsonplaceholder.typicode.com/posts`,
		{
			userId: 1,
			id: 1,
			title: 'a test post',
			body: 'a test post for a test',
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);
	console.log(response.data);
	expect(response.status).toEqual(201);
});
