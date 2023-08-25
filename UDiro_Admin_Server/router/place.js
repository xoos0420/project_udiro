import express from 'express';
import * as placeController from '../controller/place.js';

const router = express.Router();

router.post('/', placeController.Createplace);
router.delete('/:place_NUM', placeController.deletePlace);

export default router;
