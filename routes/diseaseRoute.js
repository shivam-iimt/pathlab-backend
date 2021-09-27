var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const diseaseCreate = require("../controllers/disease/diseaseCreate");
const diseaseFindAll = require("../controllers/disease/diseaseFindAll");
const diseaseFindOne = require("../controllers/disease/diseaseFindOne");
const diseaseUpdate = require("../controllers/disease/diseaseUpdate");
const diseaseDelete = require("../controllers/disease/diseaseDelete");

//  Routes
router.post("/create", diseaseCreate);
router.get("/find", diseaseFindAll);
router.get("/find/:id", diseaseFindOne);
router.put("/update/:id", diseaseUpdate);
router.delete("/delete/:id", diseaseDelete);

module.exports = router;
