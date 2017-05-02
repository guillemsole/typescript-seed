import {sign, verify} from "jsonwebtoken";

export class AuthService {

  createToken(userId: string) {
    return sign({"userId":userId}, "theEncryptKey",  { expiresIn: 24 * 60 * 60 });
  }

  decryptToken(token: String) { // TODO: test decrypt token
    try {
      var decryptToken = verify(token, "theEncryptKey");
      return [null,decryptToken];
    }catch(err) {
      return [err,null];
    }
  }

}
