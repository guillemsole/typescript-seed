import {GroupRepository} from "./group.repository";
import {Group} from "./group.model";

export class GroupService {
  repository: GroupRepository;

  constructor(repository?: GroupRepository) {
    this.repository = repository || new GroupRepository();
  }

  async findAll(): Promise<Group[]> {
    return await this.repository.findAll()
  }

  save(title: string, description: string) {
  }
}
