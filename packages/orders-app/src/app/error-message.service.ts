import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  errorSubject: Subject<string> = new Subject();

  constructor() {}

  error(message: string) {
    this.errorSubject.next(message);
  }
}
