var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const sampleCollectorSignup = require("../controllers/sampleCollector/sampleCollectorSignup");
const sampleCollectorLogin = require("../controllers/sampleCollector/sampleCollectorLogin");

const sampleCollectorFindAll = require("../controllers/sampleCollector/sampleCollectorFindAll");
const sampleCollectorFindOne = require("../controllers/sampleCollector/sampleCollectorFindOne");
const sampleCollectorUpdate = require("../controllers/sampleCollector/sampleCollectorUpdate");
const sampleCollectorDelete = require("../controllers/sampleCollector/sampleCollectorDelete");

//  Routes
router.get("/find", sampleCollectorFindAll);
router.get("/find/:id", sampleCollectorFindOne);
router.put("/update/:id", sampleCollectorUpdate);
router.delete("/delete/:id", sampleCollectorDelete);

//  User Logins
router.post("/login", sampleCollectorLogin);
router.post("/signup", sampleCollectorSignup);

module.exports = router;
