/**
 * Created by ivanchan on 16/1/2017.
 */

export class SharedService {
  loginUser: string;
  loginTime: Date;
  apiHost: string;
  tokenKey: string;

  constructor() {
    this.loginUser = '';
    this.loginTime = new Date();
    this.apiHost = "http://localhost:4200/api/";
    this.tokenKey = '';
  }
}
