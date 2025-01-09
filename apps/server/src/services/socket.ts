import { Server } from "socket.io";

export default class SocketService {
  private _io: Server;

  constructor() {
    console.log("init Socket Service!!!!!!");
    this._io = new Server();
  }
  get io(): Server {
    return this._io;
  }
}
