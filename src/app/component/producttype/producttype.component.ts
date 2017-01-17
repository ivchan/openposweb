import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../service/sharedservice-service";
import {ProductTypeService} from "../../service/producttype-service";
import {IProductType} from "../../model/producttype-model";

@Component({
  selector: 'app-producttype',
  providers: [SharedService, ProductTypeService],
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.css']
})
export class ProductTypeComponent implements OnInit {
  private lstProductType: Array<IProductType>;

  constructor(private _sharedService: SharedService, private _productTypeService: ProductTypeService) {

  }

  ngOnInit() {
    this.getProductTypeList();
  }

  private getProductTypeList(): void {
    var _self = this;
    this._productTypeService.listProductTypes()
      .subscribe((listProductType: Array<IProductType>) => {
        this.lstProductType = listProductType;
      }, error => {
        console.log("ERROR");
      });
  }
}
