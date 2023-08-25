import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render("./culture/culture_place.ejs");
});


router.get('/:place_NUM', (req, res) => {
    res.render("./culture/place.ejs");
});

export default router;