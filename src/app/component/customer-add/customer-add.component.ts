import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../model/customer-model";
import {SharedService} from "../../service/sharedservice-service";
import {CustomerService} from "../../service/customer-service";

@Component({
  selector: 'app-customer-add',
  templateUrl: 'customer-add.component.html',
  styleUrls: ['customer-add.component.css'],
  providers: [SharedService, CustomerService]
})
export class CustomerAddComponent implements OnInit {
  public customer: ICustomer;

  constructor(private _sharedService: SharedService, private _customerService: CustomerService) {
  }

  ngOnInit() {
    this.customer = <ICustomer>{};
    this.customer.customerCode = "ivanchan";
    this.customer.firstName = "Ivan";
    this.customer.lastName = "Chan";
  }

  public saveCustomer(): void {
    alert( JSON.stringify(this.customer) );
  }
}
