import {ExpressSignature} from "../Route";
import {GroupService} from "../../domain/group/group.service";

const service = new GroupService();

export let fetch: ExpressSignature = async (request, response, next) => {
  let groups = await service.findAll();
  response.status(200).send(JSON.stringify(groups));
};

export let save: ExpressSignature = async (request, response, next) => {
  await service.save(request.body.title, request.body.description);
  response.status(200).send();
};
