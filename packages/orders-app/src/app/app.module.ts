import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptorService } from './_helpers/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    ListOrdersComponent,
    CreateOrderComponent,
    ErrorMessageComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
