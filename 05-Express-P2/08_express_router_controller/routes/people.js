const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
  createPersonPostman,
} = require("../controllers/people");

// ! Cách 1:
// router.get("/", getPeople);

// router.post("/", createPerson);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

// router.post("/postman", createPersonPostman);

// ! Cách 2:
// router.route("/").get(getPeople);
// router.route("/").post(createPerson);
// router.route("/:id").put(updatePerson);
// router.route("/:id").delete(deletePerson);
// router.route("/postman").post(createPersonPostman);

// ! cách 3: sử dụng cách 2 nhưng thêm chaining >>> những thằng chung route có thể gộp lại bằng cách sử dụng chaining
router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);
router.route("/postman").post(createPersonPostman);

module.exports = router;
