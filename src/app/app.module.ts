import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProducttypeComponentComponent } from './producttype-component/producttype-component.component';
import { ProducttypeComponent } from './component/producttype/producttype.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducttypeComponentComponent,
    ProducttypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
