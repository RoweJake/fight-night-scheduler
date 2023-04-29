import { Component, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestResponseComponent } from './test-response/test-response.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { }

  title = 'Fight Night Scheduler';
  response = 'test';
  testUrl = "http://localhost:9000/test"

  getResponse() {
    this.http.get<TestResponseComponent>(this.testUrl).subscribe(resp => this.response = resp.response);
  }
}