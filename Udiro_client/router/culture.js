import express from 'express';
import placeRouter from './culture/place.js';
// 문화페이지 mainRouter 아직 안열어서 잠시 주석
import mainRouter from './culture/main.js';
import festaRouter from './culture/festa.js';

const router = express.Router();


router.use('/main', mainRouter);

router.use('/festa', festaRouter);

router.use('/place', placeRouter);

export default router;