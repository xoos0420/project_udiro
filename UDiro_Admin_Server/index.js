import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./router/auth.js";
import loginRouter from "./router/login.js";
import festaRouter from './router/festa.js';
import placeRouter from './router/place.js';
import {config} from "./config.js";
import {sequelize} from "./db/database.js"

const app = express();
const corsOption = {
    origin: config.cors.allowedOrigin,
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOption));
app.use(morgan("tiny"));

app.use("/auth", authRouter);
app.use("/login", loginRouter);
app.use('/festa', festaRouter);
app.use('/place', placeRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

sequelize.sync().then(() => {
    app.listen(config.host.port);
});
