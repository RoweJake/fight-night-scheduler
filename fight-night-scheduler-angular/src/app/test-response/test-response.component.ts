import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-response',
  templateUrl: './test-response.component.html',
  styleUrls: ['./test-response.component.css']
})
export class TestResponseComponent implements OnInit {

  response = '';

  constructor() { }

  ngOnInit(): void {
  }

}
