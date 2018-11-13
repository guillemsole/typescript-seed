import {ExpressSignature} from "../Route";
import {UserRepository} from "../../domain/user/user.repository";
import {AuthService} from "../../service/auth.service";

const userService = new UserRepository();
const authService = new AuthService();

export let register: ExpressSignature = async (request, response, next) => {
  try {
    let user = await userService.create(request.body.name, request.body.email, request.body.password);
    let token = authService.createToken(user._id);
    response.status(200).send({
      user: user,
      token: token
    });
  } catch (err) {
    response.status(400).send(err);
  }

};
