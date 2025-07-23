const axios = require('axios')

test("All comments for post 1 is for this post", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    for (const comment of response.data) {
        expect(comment.postId).toEqual(1);
    }
})