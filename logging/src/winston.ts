import winston from "winston";
import "winston-mongodb";

const winstonLog = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: () => {
        const dt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata',
          year: 'numeric', month: '2-digit', day: '2-digit',hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}).format(new Date());
        return dt;
      }
    }),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename:"logs/error.log", level: "error"}),
    new winston.transports.File({ filename:"logs/combined.log",level: "info"}),
    new winston.transports.MongoDB({
      db: "mongodb://localhost:27017/loggingDB",
      collection: "logs",
      level: "info",
    })
  ]
});

export default winstonLog;