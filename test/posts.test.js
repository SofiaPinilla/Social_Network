const request = require("supertest");
const app = require("../index ");
const Post = require("../models/post");

describe("testing/users", () => {
  const post = {
    title: "Testing",
    body: "this is a test",
  };

  afterAll(async () => {
    return await Post.deleteOne({ title: "Testing" });
  });

  let token;

  test("Login a user", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({ email: "testing2@test.com", password: "test1234" })
      .expect(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  test("Create a post", async () => {
    const res = await request(app)
      .post("/posts/create")
      .send(post)
      .set({ Authorization: token })
      .expect(201);

    expect(res.body.post._id).toBeDefined();
    expect(res.body.post.userId).toBeDefined();
  });
});
