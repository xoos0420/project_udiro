import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render("./culture/culture_festa.ejs");
});


router.get('/:festa_NUM', (req, res) => {
    res.render("./culture/festa.ejs");
});

export default router;