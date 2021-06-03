import * as express from "express";

const App: express.Application = express();

App.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("hello typescript express!");
  }
);

export default App;