import {ExpressSignature} from "../Route";
import {UserService} from "../../domain/user/user.service";

const userService = new UserService();

export let register: ExpressSignature = async (request, response, next) => {
  let user = await userService.create(request.body.name, request.body.email, request.body.password);
  response.status(200).send(user);
};
