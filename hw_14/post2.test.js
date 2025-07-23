const axios = require('axios');

test("Users email contains @ to comment a post", async () => {
    var response = await axios.post(`https://jsonplaceholder.typicode.com/posts/1/comments`,
        {
            "postId": 1,
            "id": 1,
            "name": "test comment",
            "email": "Eliseo@gardner.biz",
            "body": "this is a test comment"
        },
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
    console.log(response.data)
    expect(response.data.email).toContain("@");
})