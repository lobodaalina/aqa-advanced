const axios = require('axios');

async function fetchData() {
	const res = await axios.get('https://httpbin.org/get22');
	return res.data;
}

test('Wrong url with error 404', () => {
	expect(() => fetchData()).rejects.toThrow();
});
