var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const testListCreate = require("../controllers/testList/testListCreate");
const testListFindAll = require("../controllers/testList/testListFindAll");
const testListFindOne = require("../controllers/testList/testListFindOne");
const testListUpdate = require("../controllers/testList/testListUpdate");
const testListDelete = require("../controllers/testList/testListDelete");

//  Routes
router.post("/create", testListCreate);
router.get("/find", testListFindAll);
router.get("/find/:id", testListFindOne);
router.put("/update/:id", testListUpdate);
router.delete("/delete/:id", testListDelete);

module.exports = router;
