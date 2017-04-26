import {Application} from "express";
import {NextFunction, Request, Response} from "express";

export type ExpressSignature = (req: Request, res: Response, next: NextFunction) => void;

export interface Route {
    URL: string;

    decorate(app: Application);
}
