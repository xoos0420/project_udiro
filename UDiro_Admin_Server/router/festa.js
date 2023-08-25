import express from 'express';
import * as festaController from '../controller/festa.js';

const router = express.Router();

router.post('/', festaController.CreateFesta);
router.delete('/:festa_NUM', festaController.deleteFesta);

export default router;
