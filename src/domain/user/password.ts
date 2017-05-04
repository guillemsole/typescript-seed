import * as crypto from "crypto";
import config from "../../config/env/all";

export class Password {
  readonly value: string;

  constructor(p: string) {
    this.value = crypto.pbkdf2Sync(p, config.passwordSalt, 1000, 64, 'sha256').toString('base64');
  }

  static encrypt(password: string): Password {
    if (password.length < 8) throw Error("Password must be at least 8 digits");
    return new Password(password);
  }
}
