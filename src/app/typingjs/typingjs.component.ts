import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typingjs',
  templateUrl: './typingjs.component.html',
  styleUrls: ['./typingjs.component.css']
})
export class TypingjsComponent implements OnInit {

  wordsList = [];
  wordMessage = [
    {name: 'Parag', words: ['Mentor', ' Humble', ' Energetic']},
    {name: 'Mansi', words: ['Inspiring', ' Innovative', ' Humble']},
    {name: 'Navratan', words: ['Fun Happy Leader']},
    {name: 'Akshita', words: ['Optimistic', ' Hard Working', ' Humble']},
    {name: 'Ashutosh', words: ['Mentor', ' Inspiring', ' Passinate']},
    {name: 'Nikunj', words: ['Passionate', ' Always Smiling', ' Caring']},
    {name: 'Ankit', words: ['Bonsai', ' Commited', ' Coach']},
    {name: 'Pranav', words: ['Strong', ' Positive', ' Hard working']},
    {name: 'Ojasvin', words: ['Respecting', ' Mentor', ' Calm']}
  ];
  joinWords = ['says ', 'thinks that you are a ', 'feels', 'thinks of you as a', 'adds', 'calls you'];

  constructor() { }

  ngOnInit(): void {
    this.wordsList = [];
    for (const x of this.wordMessage) {
      const randomIndex =  Math.floor(Math.random() * this.joinWords.length);
      this.wordsList.push(' ' + x.words + ' -- ' + x.name);
    }
  }

}
