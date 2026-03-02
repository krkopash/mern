import winston from "winston";
import "winston-mongodb";


const logger=winston.createLogger({ level: "info",
    format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp()

    ), transports:[
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/error.log", level: "error"}),
        new winston.transports.MongoDB({
            db: "mongodb://localhost:27017/logger",
            collection: "test", level:"info",
        })

    ]
});
export default logger