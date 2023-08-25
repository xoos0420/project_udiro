import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue;
    if (value == null) {
        throw new Error(`Key ${key} is undefined`)
    }
    return value;
}

export const config = {
    jwt: {
        secretKey: required("JWT_SECRET"),
        expiresInSec: parseInt(required("JWT_EXPIRES_SEC", 86400))
    },
    bcrypt: {
        saltRound: parseInt(required("BCRYPT_SALT_ROUND", 12))
    },
    host: {
        port: parseInt(required("PORT", 30355))
    },
    db: {
        host: required("DB_HOST"),
        user: required("DB_USER"),
        database: required("DB_DATABASE"),
        password: required("DB_PASSWORD")
    },
    port: parseInt(required('PORT', 30355)),
    cors: {
        allowedOrigin: required('CORS_ALLOW_ORIGIN')
    },
    email: {
        port: required("EMAIL_PORT"),
        id: required("EMAIL_ID"),
        pw: required("EMAIL_PW"),
    },
}