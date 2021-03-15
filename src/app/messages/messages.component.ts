import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = [
    {
      name: 'Ananta Gupta',
      imgpath: 'https://media2.giphy.com/media/26DNdGM8UnWo6mSLm/giphy-downsized.gif?cid=003403176ermn3xzdiyfh23nrh6f1ghbo72af9o6y8klbb55&rid=giphy-downsized.gif',
      msg: 'Congratulations on achieving this great milestone. It\'s really amazing to work with you, and you surprise everyone around you with the amount of energy and liveliness you bring in the room. Your inclination towards technical stuff is just unbelievable. I always admire the way you put forward your views with clarity, and with inclusion for other\'s opinions. There is a lot I learn from you each day, and looking forward to work and learn more from you. \n' +
        '\n' +
        'Wishing you many more years to come!!!'
    },
    {
      name: 'Anurag Gautam',
      imgpath: '',
      msg: 'Congratulations Achindra on this big occasion. Wishing you many years of success and innovations. Your dedication and hard work are an inspiration to us all.\n' +
        '\n' +
        'Happy 10th Anniversary!'
    },
    {
      name: 'Kishore',
      imgpath: '',
      msg: 'Hi Achindra, the energy and passion you bring towards technology is inspiring. You are always full of thoughts to try new things and learn from it and with a smile - a true embodiment of Growth Mindset. It is always very refreshing to talk to you. I have thoroughly enjoyed the journey with you and learnt a lot personally from you. Thanks for being a great friend. Congratulations on completing 10 Years at Microsoft! Grateful for all the contributions you have made for the success of the company and looking forward for many more years. All the best!.'
    },
    {
      name: 'Vaibhav Gupta',
      imgpath: '',
      msg: '"It\'s been truly amazing working with Achin during support days and running some successfull projects like ""UDE ka Chashma"", To playing cricket together and now building a strong field and Engg connect." All the very best for the next decade full of awesome learnings and experiences.\n' +
        '\n'
    },
    {
      name: 'Nikunj Mittal',
      imgpath: 'https://media0.giphy.com/media/LYDNZAzOqrez6/giphy.gif?cid=003403175x5hsuoiu3dqpjy62f0nrh96hcsknto8zh8b9dbi&rid=giphy.gif',
      msg: 'Hi Achindra! I still remember the day you joined all new hires for lunch and we talked about all our college projects and experiences. I love the energy you bring with the in depth technical expertise. Your passion for design discussions inspired me when you carried the Learning sessions for new hires and explained at length the intricacies of Defender architecture. \n' +
        '\n' +
        'Congratulations Achindra on completing 10 years! 😍'
    },
    {
      name: 'Pankaj Madhurkar',
      imgpath: '',
      msg: 'Your passion and dedication to always do the right thing makes you what you are, a shining star :).'
    },
    {
      name: 'Harshvardhan P',
      imgpath: '',
      msg: 'I had the opportunity to talk with Achindra couple of times. I felt he is very humble. I observed one quality in Achindra which i am really impressed by, he explains things very clear and in simple terms. \n' +
        '\n' +
        'Congratulations Achindra on your 10th work anniversary @Microsoft.'
    },
    {
      name: 'Srinivas K',
      imgpath: '',
      msg: 'There is never a dull moment when you are around. You can talk to achin about varied things under the sun, the best biriyanis in town, Whether to rent or buy a house, cricket and almost everything. Oh how I miss our walks post lunch.\n' +
        '\n' +
        'It has been nothing short of wonderful getting to know you and working with you.Hoping to have more wonderful experiences.\n' +
        '\n'
    },
    {
      name: 'Mukul Verma',
      imgpath: 'https://media3.giphy.com/media/qnOBmH70CGSVa/giphy.gif?cid=00340317kr3vc3houn030q90d9o441ae8b3d4cizkynbl19x&rid=giphy.gif',
      msg: 'Congratulations on completing this journey Achindra. You have been one of my first teammates in Microsoft when I joined, and it\'s been a pleasure working with you since then. Always cheerful and optimistic, you bring liveliness to all our team. Keep inspiring for many more years to come! \n' +
        '\n' +
        'Party  🥳 is due when we all are back together. \n' +
        '\n'
    },
    {
      name: 'Jeevan Bhist',
      imgpath: '../assets/img/JeevanBhistMsg.jpeg',
      msg: ''
    },
    {
      name: 'Mayur Kale',
      imgpath: '',
      msg: 'Congratulations Achindra on completing 10 years in Microsoft and all the best for your future.\n' +
        '\n' +
        'I am enjoying working with you. I always find you as my mentor or friend than my manager. I like your PJs :P. I would like to meet you and work with you in person in our office. '
    },
    {
      name: 'Gaurav Solanki',
      imgpath: '',
      msg: 'Congratulations Achindra!\n' +
        '\n' +
        'It has been wonderful to know you. You bring a lot of positive energy to the team. I have learnt a lot from our discussions (how buyer has an upper hand, why idol worship, interesting weekend projects...). I look forward to continue the same when we all get back to office.\n' +
        '\n' +
        'Happy 10th!!! \n' +
        '\n'
    },
    {
      name: 'Anurag Agarwal',
      imgpath: '',
      msg: 'Achindra, in short time I really liked working with you, you are just an awesome person.'
    },
    {
      name: 'Rajat Gupta',
      imgpath: '',
      msg: 'Hi Achindra! I was an intern in Microsoft during Summer 2020. It was entirely virtual, and so I couldn\'t ever get a chance to meet you in person. But I wish to tell you that even without a direct interaction you have had a profound impact on me, solely through the quality and perfection in your work. I was handling a piece of code that you must have written a few years back, and I just want to say that I am very well sure that you are one person from whom everyone can a learn a lot. Congratulations on your impactful 10 years. Wishing you lots of success, and many more years at Microsoft (because I\'ll be there too). Hoping to meet you soon..\n' +
        '\n'
    },
    {
      name: 'Nandan Kumar',
      imgpath: '../assets/img/NandanKumarMsg.jpeg',
      msg: 'Congratulations Achin on reaching this big milestone. This really calls out for a toast!! I have always known you as a superstar dev, an idea powerhouse, and a bestie. Wish you many more success...and to the next decade!!\n' +
        '\n'
    },
    {
      name: 'Vinay Hirwakar',
      imgpath: 'https://media3.giphy.com/media/ZrlYxeVZ0zqkU/giphy.gif?cid=003403177v1eizcnk6zmlls0a900arwsq7b1qs55gns5rzzm&rid=giphy.gif',
      msg: 'Congrats Achindra on the 10 year mark at Microsoft. Achindra is really passionate about technology. He keeps the environment light and has open mind towards many things. He\'s really enthusiastic, energetic and thinks about things holistically. I find him as a great mentor and as a great friend. I have personally learnt a lot from you. You can talk to him about biryani, voyager 1, cricket and pretty much about anything else. Missing the post lunch walks :) '
    },
    {
      name: 'Mohit Malhotra',
      imgpath: '',
      msg: 'Hi Achindra, Congratulations on this wonderful milestone!\n' +
        '\n' +
        'Each day I learn something new from you. Your humble and open approach allows people to speak up their mind. You have been an amazing mentor both technically and personally. You bring so much positive energy with you which lights up the atmosphere.\n' +
        '\n' +
        'This is an amazing milestone and I wish that you achieve many more such milestones!'
    },
    {
      name: 'Ashutosh Parija',
      imgpath: 'https://media4.giphy.com/media/fxsqOYnIMEefC/giphy.gif?cid=00340317dqgxm0gc6ooayrnmfunb5bdr47f7r72q109f2uuk&rid=giphy.gif',
      msg: 'Congratulations on 10 years of awesomeness Achindra. I still remember the first reply I got on my intro mail was by you due to our common interest of cricket and electronics. There after you have just surprised us by your great mentorship qualities. The first day you came back from US, you invited all of the fresh joinees to lunch where we had a very interesting talk, basically we just discussed how many great projects you had done in past 😛. Then after you initiated the learning sessions for us which was a very present surprise. You are a great mentor and very approachable personality.\n' +
        '\n' +
        'Wish you many more awesome years 😄.'
    },
    {
      name: 'Nilesh Awate',
      imgpath: '../assets/img/NileshAwateMsg.jpeg',
      msg: 'Congratulations Achin!\n' +
        '\n' +
        'I know you for more than half a decade but still, I think there\'s a lot to know more about you.\n' +
        '\n' +
        'One of the best qualities of you is that whatever you do you do it differently. You apply all new concepts/thoughts/ideas and energy in every small thing beat whether writing a small email or a creating big presentation.\n' +
        '\n' +
        'All brainstorming sessions with you were amazing there\'s a lot to learn from you. Hoping to continue work with you.\n' +
        '\n' +
        'All the best for the  next 10yrs milestone 😇'
    },
    {
      name: 'Mukul Verma',
      imgpath: '../assets/img/MukulVermaMsg.jpeg',
      msg: ''
    },
    {
      name: 'Rahul Burman',
      imgpath: '',
      msg: 'Congratulations Achindra on completing 10 years in Microsoft. I have worked closely with you since joining the company and I learnt a lot from you. You are a great mentor, buddy and I feel fortunate to have people like you in the team. You respect the difference in opinion which makes situation light even in a heated discussion. Your tech savviness is an inspiration. Energy, innovative ideas, passionate, humble, leader are only some of the words which describe you.\n' +
        '\n' +
        'I wish you all the best for more successful career.  Reach greater heights and remain the person you are.  🙂'
    },
    {
      name: 'Ishita Pandey',
      imgpath: '',
      msg: 'Many congratulations Achindra on completing remarkable 10 years with Microsoft! 🥳 🥳\n' +
        'Here\'s to wishing many more exciting years ahead 😄'
    },
    {
      name: 'Sourav Sain',
      imgpath: '',
      msg: 'Hi Achin.\n' +
        '\n' +
        'You are a good friend. You are always available to discuss on anything under the sun. And talking to you is delighting as you always keep a humor touch in it. You are always available with a smiling face.\n' +
        '\n' +
        '10 years is a milestone. I wish you many more years in Microsoft doing what you love to do and enjoying your journey as well.\n' +
        '\n' +
        'Wish you all the best.\n' +
        '\n' +
        'Take Care.'
    },
    {
      name: 'Harish K V',
      imgpath: '',
      msg: 'Congratulations Achindra for this incredible milestone.\n' +
        '\n' +
        '\n' +
        '\n' +
        'Every time I interact with you, I was amazed at the clarity with which you convey your ideas. I have learnt a lot from our interactions and I am really glad to be a part of your team.\n' +
        '\n' +
        '\n' +
        '\n' +
        'All the best for your future success  😀'
    },
    {
      name: 'Prafulla Sharma',
      imgpath: 'https://media4.giphy.com/media/MdYkjCcov4CrNs0oaJ/giphy.gif?cid=0034031792wbkdzao1tl7c2kzbhck8ijh4m7swoiubx5jdal&rid=giphy.gif',
      msg: 'Congratulations Achindra for amazing 10 years @Microsoft ! Wishing you many more great years at Microsoft. Enjoy your time !'
    },
    {
      name: 'Srikanth Mandalapu',
      imgpath: '',
      msg: 'Congratulations Achindra on your 10 years association with Microsoft...!!!\n' +
        '\n' +
        'Its really awesome milestone and demonstrates how you enjoy working here...!!!\n' +
        '\n' +
        'Wish you a great success ahead...!!!'
    },
    {
      name: 'Pranav Raj',
      imgpath: 'https://media2.giphy.com/media/g9582DNuQppxC/giphy-downsized.gif?cid=00340317j6ix4i1d3kts80w1xs9y8tdom5nwmtwim7g55952&rid=giphy-downsized.gif',
      msg: 'Congratulations on achieving this great milestone. \n' +
        '\n' +
        'I hope to celebrate many such milestones for you in future.  \n' +
        '\n' +
        'Wishing you many more years to come!!!'
    },
    {
      name: 'Shiv S',
      imgpath: '',
      msg: 'Great milestone Achin! Wishing you more successful years!! Thanks for being a thoughtful and helpful colleague. '
    },
    {
      name: 'Ankit Raj Garg',
      imgpath: 'https://media0.giphy.com/media/qo89zWPnfaOK4Ng74U/giphy.gif?cid=00340317znj77riemlv6245v5cc5wi0ivoen7ebpi7lyp3d2&rid=giphy.gif',
      msg: 'Heartiest congratulations on achieving this milestone. :)\n' +
        '\n' +
        'I hope to celebrate many such milestones for you in future. Awesome thing about you is always smiling and have a "Take it Light" attitude. :)\n' +
        '\n' +
        'Love it !!!'
    },
    {
      name: 'Logesh Gopal',
      imgpath: '',
      msg: 'Congratulations Achindra \n' +
        '\n' +
        'It is a great milestone.\n' +
        '\n' +
        'Looking forward to work with you :) \n' +
        '\n'
    },
    {
      name: 'Sukumar Mokkarla',
      imgpath: '',
      msg: 'Congratulations on this great milestone Achindra. You have been a great manager and more importantly an excellent individual to work with. I always cherish our small yet excellent talks. I have been a great admirer of the way you always approach a problem. I wish you all the best for the great future ahead.\n' +
        '\n' +
        ' Hearty congratulations once again Achindra :) \n'
    },
    {
      name: 'Rahul Tibdewal',
      imgpath: '',
      msg: 'Hi Achindra, \n' +
        '\n' +
        'You are full of energy and the passion put in any work you pick up is inspirational. You keep bringing new ideas and thoughts to table. You always have been a great mentor, go to person for any type of problems be it personal or technical.  It is really fun to talk to you, sometimes even hours pass by :D.\n' +
        '\n' +
        'Thank you for being a friend in need and all Chai time talks. \n' +
        '\n' +
        'Congratulations on completing 10 Years at Microsoft! '
    },
    {
      name: 'Zehavit Mayer',
      imgpath: 'https://media0.giphy.com/media/BQAk13taTaKYw/giphy.gif?cid=003403172q6di1n7lyb1dl68wb47wb6slq81nn19eptqlfif&rid=giphy.gif',
      msg: 'Dear Achindra,\n' +
        '\n' +
        '10 years is a significant career milestone:) \n' +
        '\n' +
        'Thanks for the collaboration between the teams,\n' +
        '\n' +
        'the energy and the professional to achieve the goals together.\n' +
        '\n' +
        'Pleasure working with, for the cooperation, the efforts, the friendship and the spirit.\n' +
        '\n' +
        'Many thanks for your contributions to the formation and growth of the v-team.'
    },
    {
      name: 'Veerendra Gupta',
      imgpath: '',
      msg: 'Congratulations Achin!\n' +
        '\n' +
        'I remember you were the first person in our org apart from the team who introduced himself and came forward to interact at the time of my joining. Working with you has been a great journey so far.  I have always found you a jolly person who is always up with some fresh and old punchlines 😛. Your positive attitude in every situation makes the work environment healthy. You know how to dig the hidden potential among others. Its always easy to bring out discussions with you without hesitation, what so ever be the topic. Your suggestions always help us to find concrete solution. At last, I wish you more success ahead. \n' +
        '\n'
    },
    {
      name: 'Deepti Bhardwaj',
      imgpath: '',
      msg: 'Congratulations on hitting this big milestone, Achindra! Many more to come in the future; cheers!'
    },
    {
      name: 'Dima Sirotnikov',
      imgpath: 'https://media0.giphy.com/media/5XNO47nnjNpaE/giphy-downsized.gif?cid=00340317ile7l9vhqtcouugecme264z75wazf4ovt0j42mgl&rid=giphy-downsized.gif',
      msg: 'Happy 10th Anniversary at Microsoft!\n' +
        'Working with you is a real pleasure, and I really appreciate your contribution and your voice on the things we\'ve worked together. You\'re also a good person, and a good friend, which makes team work with you an extra pleasure.\n' +
        'Keep on rocking, and hitting all the milestones you set for yourself!\n' +
        '\n' +
        'Your friend, Dima\n' +
        '\n'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
