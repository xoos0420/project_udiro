import express from 'express';
import * as placeController from '../../controller/culture/place.js';

const router = express.Router();

// GET
router.get('/', placeController.getPlaces);

// GET
router.get('/:place_NUM', placeController.getPlace);

// POST
router.post('/', placeController.CreatePlace);

// PUT
router.put('/:place_NUM', placeController.UpdatePlace);

// DELETE
router.delete('/:place_NUM', placeController.deletePlace);

export default router;
