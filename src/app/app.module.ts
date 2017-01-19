import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ProductTypeComponent } from './component/producttype/producttype.component';
import {ProductTypeService} from "./service/producttype-service";
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerAddComponent } from './component/customer-add/customer-add.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTypeComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'producttype',
        component: ProductTypeComponent
      },
      {
        path: 'customer',
        component: CustomerListComponent
      },
      {
        path: 'customeradd',
        component: CustomerAddComponent
      },
      {
        path: 'customeredit',
        component: CustomerEditComponent
      }
    ])
  ],
  providers: [
    ProductTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
