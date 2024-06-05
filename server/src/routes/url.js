const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  redirectURL,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);
router.get("/shorten/:shortId", redirectURL);

module.exports = router;
