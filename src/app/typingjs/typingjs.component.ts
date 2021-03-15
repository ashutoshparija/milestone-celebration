import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typingjs',
  templateUrl: './typingjs.component.html',
  styleUrls: ['./typingjs.component.css']
})
export class TypingjsComponent implements OnInit {

  wordsList = [];
  wordMessage = [
    {name: 'Prafulla Sharma', words: ['Cricketer', 'Tutor', 'Life Long Learner']},
    {name: 'Narendra Katlamudi', words: ['Highly energetic', 'Intelligent and Sensible person']},
    {name: 'Rahul Tibdewal', words: ['Fun Happy Leader']},
    {name: 'Ananta Gupta', words: ['Dynamic', 'Respecting', 'Perfectionist']},
    {name: 'Kishore Chintalapati', words: ['Passionate', 'Always Smiling', ' Caring']},
    {name: 'Harshavardhan Papudippu', words: ['Calm', 'Smart', 'Humble']},
    {name: 'Anurag Agarwal', words: ['Versatile', 'Great Buddy']},
    {name: 'Mayur Kale', words: ['Easy-Going', 'Smart', 'Hard working']},
    {name: 'Gaurav Solanki', words: ['Young (looks that way) ;-)', 'Passionate', 'Energetic']},
    {name: 'Vaibhav Gupta', words: ['Logical', 'Simple', 'Empathetic ']},
    {name: 'Mukul Verma', words: ['Energetic', 'Compassionate', 'Optimistic']},
    {name: 'Mohit', words: ['Strong', 'Positive', 'Hard working']},
    {name: 'Jayneeta', words: ['Mentor', 'Motivation therapist']},
    {name: 'Rahul Dev Burman', words: ['Organized', 'Friendly', 'Tech Savvy']}
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
