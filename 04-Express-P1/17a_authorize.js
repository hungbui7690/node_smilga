// ! 2)
const authorize = (req, res, next) => {
  // * test: http://localhost:5000/?user=spy
  const { user } = req.query; // ! bỏ vào req object
  if (user === "spy") {
    req.user = { name: "spy", id: 3 }; // * lúc này chúng ta có thể add vào req >> bên 17b chúng ta có thể lấy ra
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
