import { Component } from '@angular/core';
import {NgwWowService} from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  images = [
    {path: 'assets/img/1-big.jpeg'},
    {path: 'assets/img/2-big.jpeg'},
    {path: 'assets/img/3-big.jpeg'},
    {path: 'assets/img/1-medium.jpeg'},
    {path: 'assets/img/2-medium.jpeg'},
    {path: 'assets/img/3-medium.jpeg'},
    {path: 'assets/img/1-small.jpeg'},
    {path: 'assets/img/2-small.jpeg'},
    {path: 'assets/img/3-small.jpeg'},
    {path: 'assets/img/1-big.jpeg'},
    {path: 'assets/img/2-big.jpeg'},
    {path: 'assets/img/3-big.jpeg'},
    {path: 'assets/img/1-big.jpeg'},
    {path: 'assets/img/2-big.jpeg'},
    {path: 'assets/img/3-big.jpeg'},
  ];

  title = 'achin-work';

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
