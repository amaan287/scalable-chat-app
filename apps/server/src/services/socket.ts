import { Server } from "socket.io";

export default class SocketService {
  private _io: Server;

  constructor() {
    console.log("init Socket Service!!!!!!");
    this._io = new Server();
  }
  public initListeners() {
    const io = this._io;
    console.log("initalize socket listeners");
    io.on("connect", (socket) => {
      console.log(`New socket connected`, socket.id);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log(`new message recieved`, message);
      });
    });
  }
  get io(): Server {
    return this._io;
  }
}
