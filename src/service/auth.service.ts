import {sign, verify} from "jsonwebtoken";

export class AuthService {

  createToken(userId: string) {
    return sign({"userId":userId}, "theEncryptKey",  { expiresIn: 24 * 60 * 60 });
  }

  async decryptToken(token: String) {
     return await verify(token, "theEncryptKey");
  }

}
