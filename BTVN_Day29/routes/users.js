var express = require("express");
var router = express.Router();
const model = require("../models/index");
const User = model.User;
const Phone = model.Phone;
const Post = model.Post;
const Author = model.Author;
const Book = model.Book;
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/lay-user", async (req, res) => {
  // const user = await User.findOne({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(user);
  // const phone = await user.getPhone();
  // console.log(phone);
  //Cách thông thường
  // const users = await User.findAll();
  // users.forEach(async (user) => {
  //   const phone = await user.getPhone();
  //   console.log(`name = ${user.name} - phone = ${phone.phone_number}`);
  // });
  //=> Query N + 1
  //Eager loading
  // const users = await User.findAll({
  //   include: {
  //     model: Phone,
  //     required: true,
  //   },
  // });
  // users.forEach((user) => {
  //   console.log(`Name = ${user.name} - Phone = ${user?.Phone?.phone_number}`);
  // });
  // const user = await User.findByPk(1, {
  //   include: Post,
  // });
  // const posts = await user.getPosts();
  // const { Posts: posts } = user;
  // console.log(posts);
  // const author = await Author.findOne({
  //   where: {
  //     id: 1,
  //   },
  //   include: Book,
  // });
  // console.log(author.Books);
  const author = await Author.create({
    name: "Hoang An",
  });
  const book = await Book.create({
    code: "03",
    name: "Lam sao de hack Nasa",
  });
  await author.addBook(book);
  // const authors = await book.getAuthors();
  // console.log(authors);

  res.send("<h1>Lấy User</h1>");
});
module.exports = router;
