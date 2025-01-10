import http from "http";
import SocketService from "./services/socket";
async function init() {
  const socketService = new SocketService();
  const PORT = process.env.PORT || 8000;
  const httpServer = http.createServer();
  socketService.io.attach(httpServer);
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port  http://localhost:${PORT}`);
  });

  socketService.initListeners();
}
init();
