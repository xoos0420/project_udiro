import express from "express";
import * as authController from "../controller/auth.js"
import { isAuth } from "../middleware/auth.js";
import * as likeController from "../controller/like.js"

const router = express.Router();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/findid', authController.findId);

router.post('/findpw', authController.findPw);

router.get('/me', isAuth, authController.me);

router.post('/newPW', authController.updatePW)

router.post('/like', likeController.createLike)
// router.get('/like', isAuth, )





export default router;