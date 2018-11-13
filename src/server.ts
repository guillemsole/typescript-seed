import * as express from 'express';
import UserRouter from "./controller/user/user.router";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import config from "./config/config";

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
    mongoose.connect(config.db, (err, res) => {
      if (err) {
        console.error('Could not connect to MongoDB!');
        console.log(err);
      }
    });
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json({limit: '50mb'}));
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
