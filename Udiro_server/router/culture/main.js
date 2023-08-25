import express from 'express';
import * as mainController from '../../controller/culture/main.js'; //
const router = express.Router();

// GET
router.get('/', mainController.getFestasandPlace);

// // GET
// // num
// router.get('/num/:festa_NUM', festaController.getFesta);

// // title
// router.get('/title/:title', festaController.getFestaTitle);

// // guname
// router.get('/guname/:guname', festaController.getFestaGuname);

// // POST
// router.post('/', festaController.CreateFesta);
// router.post('/search', controller.search);

// // PUT
// router.put('/:festa_NUM', festaController.updateFesta);

// // DELETE
// router.delete('/:festa_NUM', festaController.deleteFesta);

export default router;
