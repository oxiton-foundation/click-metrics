const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const shortID = shortid.generate();

  await URL.create({
    shortId: shortID,
    redirectURL: url,
    visitHistory: [],
  });

  return res.json({ shortId: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

async function redirectURL(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    redirectedURL: result.redirectURL,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  redirectURL,
};
