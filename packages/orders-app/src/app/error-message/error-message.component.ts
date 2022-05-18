import { Component, OnInit } from '@angular/core';
import { ErrorMessageService } from '../error-message.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  message = '';

  constructor(private messageService: ErrorMessageService) {}

  ngOnInit(): void {
    this.messageService.errorSubject.subscribe(
      (message) => (this.message = message)
    );
  }
}
