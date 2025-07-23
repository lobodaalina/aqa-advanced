const axios = require('axios');

test("First post contains word 'sunt'", async () => {
    var response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.data.title).toContain('sunt');
})