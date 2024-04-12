const express = require("express");
const asyncHandler = require("express-async-handler");
const { Team, Tee_time, Standing } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res) {
    const teams = await Team.findAll({ include: [Tee_time, Standing] });
    return res.json(teams);
  })
);

module.exports = router;
