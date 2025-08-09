const axios = require('axios');

async function fetchData() {
	const res = await axios.get('https://httpbin.org/get', {
		params: { answer: 42 },
		headers: { 'Content-Type': 'application/json' },
	});
	return res;
}

fetchData();

test('Header is right', async () => {
	const response = await fetchData();
	expect(response.data.headers).toHaveProperty('Content-Type', 'application/json');
});

test('Param is right', async () => {
	const response = await fetchData();
	expect(response.data.args).toHaveProperty('answer', '42');
});
