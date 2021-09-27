const express = require("express");
const router = express.Router();

// ------------------- List of all Route paths --------------------
router.use("/admin", require("./adminRoutes"));

router.use("/deliveryboy", require("./deliveryBoyRoute"));

router.use("/samplecollector", require("./sampleCollectorRoute"));

router.use("/user", require("./userRoute"));

router.use("/vendor", require("./vendorRoute"));

router.use("/disease", require("./diseaseRoute"));

router.use("/testlist", require("./testListRoute"));

// ------------------- Exporting --------------------
module.exports = router;
