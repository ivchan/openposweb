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
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTypeComponent,
    CustomerListComponent
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
      }
    ])
  ],
  providers: [
    ProductTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
