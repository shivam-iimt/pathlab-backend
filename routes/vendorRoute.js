var express = require("express");
const router = express.Router();

//---------------- middleware----------------
const auth = require("../middleware/auth");

//  Add Controllers
const vendorSignup = require("../controllers/vendor/vendorSignup");
const vendorLogin = require("../controllers/vendor/vendorLogin");

const vendorFindAll = require("../controllers/vendor/vendorFindAll");
const vendorFindOne = require("../controllers/vendor/vendorFindOne");
const vendorUpdate = require("../controllers/vendor/vendorUpdate");
const vendorDelete = require("../controllers/vendor/vendorDelete");

//  Routes
router.get("/find", vendorFindAll);
router.get("/find/:id", vendorFindOne);
router.put("/update/:id", vendorUpdate);
router.delete("/delete/:id", vendorDelete);

//  vendor Logins
router.post("/login", vendorLogin);
router.post("/signup", vendorSignup);

module.exports = router;
