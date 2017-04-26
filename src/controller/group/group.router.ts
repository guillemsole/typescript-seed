import {Route} from "../Route";
import * as express from "express";
import {fetch} from './group.controller';

export default class GroupRouter implements Route {
  URL: string = "/group";

  decorate(app: express.Application) {
    app.route(this.URL + '/fetch').get(fetch);
  }

  static create(): Route {
    return new GroupRouter();
  }
}
