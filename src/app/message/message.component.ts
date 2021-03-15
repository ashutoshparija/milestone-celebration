import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() name: string;
  @Input() imgPath: string;
  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
