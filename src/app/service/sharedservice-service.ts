import {ILoggedUser} from "../model/loggeduser-model";
import {ISettings} from "../model/settings-model";
import {Injectable} from "@angular/core";
/**
 * Created by ivanchan on 16/1/2017.
 */

@Injectable()
export class SharedService {
  public loggedUser: ILoggedUser;
  public setting: ISettings;

  constructor() {
    this.loggedUser = <ILoggedUser>{};
    this.setting = <ISettings>{};
    this.loggedUser.loginUser = '';
    this.loggedUser.loginUserName = "Demo Account";
    this.loggedUser.loginUserRole = "Retail Shop Manager";
    this.loggedUser.loginTime = new Date();
    this.setting.apiHost = "http://localhost:4200/api/";
    this.setting.tokenKey = '';
  }
}
