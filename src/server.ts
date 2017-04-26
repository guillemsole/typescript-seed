import * as express from 'express';
import GroupRouter from "./controller/group/group.router";

export class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  private constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    //empty for now
  }

  /**
   * Create router
   *
   * @class Server
   * @method api
   */
  public routes() {
    [
      GroupRouter.create()
    ].forEach(route => {
      route.decorate(this.app);
    });
  }
}
