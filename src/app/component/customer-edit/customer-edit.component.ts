import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../model/customer-model";
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../service/customer-service";
import {SharedService} from "../../service/sharedservice-service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [SharedService, CustomerService]
})
export class CustomerEditComponent implements OnInit {
  customer: ICustomer;
  customerKey: string;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.customer = <ICustomer>{};
    this.customerKey = this.route.snapshot.params['id'];

    //var _self = this;
    this.customerService.getCustomer(this.customerKey)
      .subscribe((res: ICustomer) => {
        this.customer = res;
      }, error => {
        console.log("ERROR");
      });
  }
}
