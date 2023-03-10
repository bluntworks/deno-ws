import { WebSocketClient, WebSocketServer } from "../lib/websocket.ts";

const wss = new WebSocketServer();
wss.on("connection", function (ws: WebSocketClient) {
  console.log("socket connected!");
  ws.on("message", function (message: string) {
    console.log(message);
    ws.send(message)
  });
});