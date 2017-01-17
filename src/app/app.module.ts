import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductTypeComponent } from './component/producttype/producttype.component';
import {ProductTypeService} from "./service/producttype-service";

@NgModule({
  declarations: [
    AppComponent,
    ProductTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'producttype',
        component: ProductTypeComponent
      }
    ])
  ],
  providers: [
    ProductTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
