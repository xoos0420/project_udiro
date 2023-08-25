import express from "express";
// import * as authController from "../controller/auth.js";
import * as mapController from '../controller/map.js'

const router = express.Router();

// 메인페이지
router.get('/restroom', mapController.restroomgetAll);
router.get('/parking', mapController.parkinggetAll);



export default router;