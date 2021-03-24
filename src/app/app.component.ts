import { Component } from '@angular/core';
import {NgwWowService} from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  images = [
    {path: 'assets/img/pankaj1.jpeg'},
    {path: 'assets/img/pankaj2.jpeg'},
    {path: 'assets/img/pankaj3.jpeg'},
    {path: 'assets/img/pankaj4.jpeg'},
    {path: 'assets/img/pankaj5.jpeg'},
    {path: 'assets/img/pankaj6.jpeg'},
    {path: 'assets/img/pankaj7.jpeg'},
    {path: 'assets/img/pankaj8.jpeg'},
    {path: 'assets/img/pankaj9.jpeg'},
    {path: 'assets/img/pankaj10.jpeg'},
    {path: 'assets/img/pankaj11.jpeg'},
    {path: 'assets/img/pankaj12.jpeg'},
    {path: 'assets/img/pankaj13.jpeg'},
    {path: 'assets/img/pankaj14.jpeg'},
    {path: 'assets/img/pankaj15.jpeg'},
    {path: 'assets/img/pankaj16.jpeg'},
    {path: 'assets/img/pankaj17.jpeg'},
    {path: 'assets/img/pankaj18.jpeg'},
    {path: 'assets/img/pankaj19.jpeg'},
    {path: 'assets/img/pankaj20.jpeg'},
    {path: 'assets/img/pankaj21.jpeg'},
    {path: 'assets/img/pankaj22.jpeg'},
    {path: 'assets/img/pankaj23.jpeg'},
    {path: 'assets/img/pankaj24.jpeg'},
    {path: 'assets/img/pankaj25.jpeg'},
    {path: 'assets/img/pankaj26.jpeg'},
  ];

  title = 'achin-work';

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
