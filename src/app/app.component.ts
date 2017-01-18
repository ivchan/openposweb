import {Component} from '@angular/core';
import {ILoggedUser} from "./model/loggeduser-model";
import {SharedService} from "./service/sharedservice-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent {
  private loggedUser: ILoggedUser;

  constructor(private _sharedService: SharedService) {
    this.loggedUser = _sharedService.loggedUser;
  }
}
