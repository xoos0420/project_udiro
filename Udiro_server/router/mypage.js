import express from "express";
import * as authController from "../controller/auth.js"
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get('/me', isAuth, authController.me);

router.post('/account', isAuth, authController.myaccount);


router.put('/update', authController.C_updateMypage)
router.delete('/delete', authController.deleteById)




export default router;