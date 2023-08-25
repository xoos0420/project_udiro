import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{
    res.render("./culture/culture_main.ejs");
});

export default router;