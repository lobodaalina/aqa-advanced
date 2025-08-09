const axios = require('axios')

jest.mock('axios');

const mockedPostsStatus = {
    data: {},
    status: 200
}

test("Get all posts status is 200", async () => {
    await axios.get.mockResolvedValue(mockedPostsStatus);
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200);
})




const mockedError = {
    response: {
        status: 404,
        data: { message: 'Not Found' }
    }
}

test("Get all posts status is 404", async () => {
    await axios.get.mockResolvedValue(mockedError);
    try {
    await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
    catch (error) {
        console.log(error.response.data);
    expect(error.response.status).toEqual(404);
    }
})




const mockedEmailStatus = {
    data: {
        email: "Eliseo@gardner.biz"
    },
    status: 201
}

test("Users email contains @ to comment a post", async () => {
    await axios.post.mockResolvedValue(mockedEmailStatus);
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




const mockedEmailError = {
    response: {
        status: 500,
        data: { message: 'Email does not contain @' }
    }
}

test("Error when email does not contain @ to comment a post", async () => {
    await axios.post.mockResolvedValue(mockedEmailError);
    try {await axios.post(`https://jsonplaceholder.typicode.com/posts/1/comments`,
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
    }
    catch (error) {
    console.log(error.response.data);
    expect(error.response.status).toEqual(500);
    }
})