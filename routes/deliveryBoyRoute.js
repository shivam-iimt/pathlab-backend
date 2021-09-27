var express = require("express");
const router = express.Router();

//middleware
const auth = require("../middleware/auth");

//  Add Controllers
const deliveryBoySignup = require("../controllers/deliveryBoy/deliveryBoySignup");
const deliveryBoyLogin = require("../controllers/deliveryBoy/deliveryBoyLogin");

const deliveryBoyFindAll = require("../controllers/deliveryBoy/deliveryBoyFindAll");
const deliveryBoyFindOne = require("../controllers/deliveryBoy/deliveryBoyFindOne");
const deliveryBoyUpdate = require("../controllers/deliveryBoy/deliveryBoyUpdate");
const deliveryBoyDelete = require("../controllers/deliveryBoy/deliveryBoyDelete");

//  Routes
router.get("/find", deliveryBoyFindAll);
router.get("/find/:id", deliveryBoyFindOne);
router.put("/update/:id", deliveryBoyUpdate);
router.delete("/delete/:id", deliveryBoyDelete);

//  User Logins
router.post("/login", deliveryBoyLogin);
router.post("/signup", deliveryBoySignup);

module.exports = router;
