import App from "./App";
import {createServer} from "http";

const port: number = Number(process.env.PORT) || 4000;

const server = createServer(App);

server.listen(port, () => {
  console.log(`${port}포트 서버 대기 중!`);
});

export default server;