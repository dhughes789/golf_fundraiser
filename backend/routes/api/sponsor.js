const express = require("express");
const asyncHandler = require("express-async-handler");
const { Sponsor } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const sponsors = await Sponsor.findAll();
    return res.json(sponsors);
  })
);

module.exports = router;
