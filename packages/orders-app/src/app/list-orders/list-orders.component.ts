import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from '../error-message.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
})
export class ListOrdersComponent implements OnInit {
  list: Array<any> = new Array();

  constructor(
    private httpClient: HttpClient,
    private messageService: ErrorMessageService
  ) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/orders').subscribe(
      (response) => {
        console.log('server is running');
        console.log(response);

        this.list = response as Array<any>;
      },
      (responseError) => {
        console.log('error');
        console.log(responseError);
        this.messageService.error(responseError.error);
      }
    );
  }
}
