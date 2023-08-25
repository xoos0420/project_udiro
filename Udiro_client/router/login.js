import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    res.render("./auth/login.ejs");
});
router.get('/signUp', (req, res) => {
    res.render("./auth/signUp.ejs");
});
router.get('/newPW', (req, res) => {
    res.render("./auth/newPW.ejs");
});
router.get('/terms', (req, res) => {
    res.render("./auth/terms.ejs");
});
router.get('/findId', (req, res) => {
    res.render("./auth/findId.ejs");
});
router.get('/findPw', (req, res) => {
    res.render("./auth/findPw.ejs");
});

export default router;