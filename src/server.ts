import * as express from 'express';
import UserRouter from "./controller/user/user.router";

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
      UserRouter.create()
    ].forEach(route => {
      route.decorate(this.app);
    });
  }
}
