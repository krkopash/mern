import { WebSocket } from "ws";

export interface AuthSocket extends WebSocket{
    userId?: string;
    isAlive?: boolean;
    
    room?: string;

}