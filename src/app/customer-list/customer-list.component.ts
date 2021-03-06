import { Component, OnInit } from '@angular/core';
import {SharedService} from "../service/sharedservice-service";
import {CustomerService} from "../service/customer-service";
import {ICustomer} from "../model/customer-model";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private lstCustomer: Array<ICustomer>;

  constructor() { }

  ngOnInit() {
    //this.getCustomerList();
  }

  /*
  public getCustomerList(): void {
    var _self = this;
    this._customerService.listCustomers()
      .subscribe((listCustomer: Array<ICustomer>) => {
        this.lstCustomer = listCustomer;
      }, error => {
        console.log("ERROR");
      });
  }
  */
}
