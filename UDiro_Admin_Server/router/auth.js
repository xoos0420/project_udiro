import express from "express";
import * as userController from "../controller/user.js"

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:user_idx', userController.getUser);
router.put('/:user_idx', userController.updateUser);
router.delete('/:user_idx', userController.deleteUser);
router.post('/', userController.createUser);

export default router;