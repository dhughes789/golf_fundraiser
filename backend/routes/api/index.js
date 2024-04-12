const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { User } = require("../../db/models");
const {
  restoreUser,
  requireAuth,
  setTokenCookie,
} = require("../../utils/auth.js");
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const sponsorRouter = require("./sponsor.js");
const teamRouter = require("./team.js");

// // GET /api/set-token-cookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'DemoUser'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // GET /api/restore-user
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // GET /api/require-auth
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/sponsor", sponsorRouter);

router.use("/team", teamRouter);

module.exports = router;
