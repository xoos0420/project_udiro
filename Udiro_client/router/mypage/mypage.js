import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render("./mypage/mypage.ejs");
});

export default router;