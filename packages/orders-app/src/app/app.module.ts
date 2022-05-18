import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [AppComponent, ListOrdersComponent, CreateOrderComponent, ErrorMessageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
