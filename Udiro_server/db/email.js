import nodemailer from "nodemailer";
import { config } from "../config.js";
export const transport = nodemailer.createTransport({
    service: "Naver",
    host: "smtp.naver.com",
    port: config.email.port,
    auth: {
        user: config.email.id,
        pass: config.email.pw
    }
});