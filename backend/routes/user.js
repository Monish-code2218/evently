
const router = require("express-promise-router")();
const UserController = require("../controllers/user");
const validators = require("../common/validators");

const passport = require("passport");
require("../passport");
const authenticate = (strategy) =>
  passport.authenticate(`${strategy}`, { session: false });

router.route("/signup").post(UserController.signUp);

router.route("/signin").post(authenticate("local"), UserController.signIn);

router
  .route("/google")
  .post(authenticate("googleToken"), UserController.signIn);

router
  .route("/facebook")
  .post(authenticate("facebookToken"), UserController.signIn);

module.exports = router;

router.post("/forgot-password", validators.validate("forgotPassWord"), validators.validationMiddleware, UserController.forgotPassword);
router.post("/reset-password", validators.validate("resetPassWord"), validators.validationMiddleware, UserController.resetPassword);

module.exports = router;