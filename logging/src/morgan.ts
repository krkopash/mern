import morgan from "morgan";
import winstonLog from "./winston";

const stream = {
  write: (message: string) => { winstonLog.info(message);}
};
const morganMiddleware = morgan( ":method :url :response-time ms", {stream });

export default morganMiddleware;