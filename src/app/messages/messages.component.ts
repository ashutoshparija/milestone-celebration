import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = [
    {
      name: 'Nikunj Mittal',
      imgpath: 'https://media4.giphy.com/media/KfHLHSCugJr4EFGeKx/giphy.gif?cid=003403174sdps6h81i75oja86qthq9xzbckagdzyh49of9ii&rid=giphy.gif',
      msg: 'Hi Pankaj,\n' +
      '\n' +
'Congratulations on Completing 15 years at Microsoft. It has been a privilege to work with you and having a role model to look upto in my career. Always amazed by how you approach complex problems and generate so much clarity.' +
'\n' +
' \nThank you for making work so much fun :)'
    },
    {
      name: 'Kishore Ch',
      imgpath: '',
      msg: 'Hi Panakaj,\n' +
        '\n' +
        'Congratulations on completing 15 years at Microsoft! Thanks for all the hard work and contributions to the success of Microsoft. It is always amazing to see the passion and energy you bring to solve problems. Thanks for giving me the opportunity to be a part of this journey. I have learnt a lot from you and thanks for all that you do.'
        + '\n \n' +
        'Regards, \n Kishore.'
    },
    {
      name: 'Srinivas K',
      imgpath: '',
      msg: 'Hi Pankaj,\n' +
      '\n' +
      'It is amazing to see the energy that you bring to the table and the passion you have for solving technical problems.\n' +
      'At the same time, your humility stands out and the way you are open to others point of view is amazing.\n' +
      'In short it has been wonderful getting to know you and will relish the chance to work closely with you down the line.\n' +
      '\n' +
      'Srinivas'
    },
    {
      name: 'Deepti Bhardwaj',
      imgpath: '',
      msg: 'Congratulations Pankaj! It\'s been a pleasure observing your work ethic and learning from you since the start of my career. You\'re always ready to share what you know, provide hands on help and bring perspective and positivity to the table.' +
        '\n \n' + 
        'Wish you many more wonderful and rewarding years ahead!'
    },
    {
      name: 'Jaya Srivastava',
      imgpath: '',
      msg: 'Hi Pankaj,' +
        '\n \n' +
        'Working with you has been one of the best parts of my journey with Microsoft.. You have so many great qualities to learn from and emulate. Thank you for being the best colleague and guide one could ask to partner with.' +
        '\n' +
        'I am sure the past 15 years would have their share of fun, challenges and achievements. And I wish you many more adventures and successes in the upcoming years.'
    },
    {
      name: 'Sourav Sain',
      imgpath: 'https://media3.giphy.com/media/11uArCoB4fkRcQ/giphy.gif?cid=003403177rqpokt3c9gym11tdcde0hx2dwfzxxi3djtrg2c1&rid=giphy.gif',
      msg: 'Hi Pankaj' +
        '\n \n' +
        'Congratulations on completing 15 years in Microsoft. You have been an inspiration and constant source to learn from for me. In these years , opportunities to work together with you have been pleasure.\n' +
        'You always look for perfection in the undertakings and that too in a smooth way. Your energy and passion in work is unmatched!!\n' +
        'I have enjoyed working with you, have learnt something new from you, every time we talk.\n' +
        'All the best for coming years in Microsoft.\n' +
        'Regards,\n' +
        'Sourav'
    },
    {
      name: 'Meghna Vasudeva',
      imgpath: 'https://media2.giphy.com/media/lTWf1EXbQmz0AIRHuY/giphy.gif?cid=00340317q89yb1p0zjgg0yleayzp889r135nz05jqg66axgv&rid=giphy.gif',
      msg: 'Congratulations Pankaj on achieving this milestone! \n \n' +
        'Thank you so much for being an amazing mentor. I really admire your technical skillset, sincerity and how you always manage to break down a complex problem into smaller simpler bits which makes any and every problem solvable! I feel so grateful to have worked with you and have been rewarded with such an enriching experience! \n' +
        'Wish you many more amazing years ahead! Happy fifteen, once again!  😄 🥳'
    },
    {
      name: 'Prabhat Garg',
      imgpath: 'https://media2.giphy.com/media/UuNWQzayurnpC3KqQE/giphy.gif?cid=00340317e962uhqdsyotoongck00abcje7x43bemdl2rrma4&rid=giphy.gif',
      msg: 'Hey Pankaj: Congratulations on celebrating 15 years at Microsoft. Here\'s wishing you many more! Looking forward to collaborating with you in future.' +
        '\n \n' +
        'Prabhat'
    },
    {
      name: 'Achindra Bhatnagar',
      imgpath: '',
      msg: 'Please help me with the math, at what age did you start with Microsoft  😊' +
        '\n\n' +
        'Congratulations on 15!' +
        '\n\n' +
        'I must share, not just the people inside Microsoft but people who you interviewed are also your fan! I have heard this from a number of people. You are just Amazing! \n' +
        'I have enjoyed working with you, have learned so much from you and every time we speak, there is something to be amazed of and something to learn. \n' +
        'Keep rocking!'
    },
    {
      name: 'Shiv S',
      imgpath: '',
      msg: 'Hi Pankaj,\n\n' +
      'Many congratulations for completing 15 years @ MSFT! Pawri? \n' +
      'Its been a very short time since I have known you but during this period you have been a supportive friend and colleague. \n\n' +
      'Wishing you many more such years to come. \n\n' +
      '-Shiv'
    },
    {
      name: 'Nakul Goud',
      imgpath: '',
      msg: 'Congratulations Pankaj' +
        '\n\n' +
        'You are a great mentor, great leader who leads by example. Yet you are grounded which makes any one admire you. Its fun working with you. Wish you much more success in journey ahead!\n' +
        '\n-Nakul'
    },
    {
      name: 'Nishi Doshi',
      imgpath: 'https://media2.giphy.com/media/qo89zWPnfaOK4Ng74U/giphy.gif?cid=00340317vpa7pbtfeyi42arx790xh40wgmvdbtbddm3vb5kz&rid=giphy.gif',
      msg: 'Hi Pankj,\n' +
        '\n' +
        'Congratulations on completing 15 years at Microsoft! 🎉 🎊 Thank you so much for helping and encouraging me in organizing the fun events. I really admire the enthusiasm you bring to the table. \n Looking forward to organize more of them and learn from you.' +
        '\n' +
        'Wish you many more such amazing years! 🥳 🥳' +
        '\n'
    },
    {
      name: 'Arun Ramamurthi',
      imgpath: 'https://media1.giphy.com/media/KbB7Ta1NP09UnBKp5u/giphy-downsized.gif?cid=00340317xkoujpg5lslzpwv45ffo2372qz2sqvmtq8yhjy2k&rid=giphy-downsized.gif',
      msg: 'Pankaj, we worked together for 5 years and have been close friends for 10+ years now. You have been one of my top go-to people in times of doubt, crisis, mentorship needs, personal or work advice. I can only say that it has been an absolute pleasure to know you, as a human being first and foremost for your simplicity and humility; and then as a colleague and a leader to create clarity out of ambiguous situations, taking courageous decisions and standing up for what you believe is right, and all-round one of the best individual contributors I ever worked with!\n' +
      + '\n\n' +
      'Heartiest congratulations on yet another milestone in your journey in Microsoft of completing 15 years! I am sure you will double it, and won\'t even realize when that happens.\n' +
      'Take a bow; pause and rejoice in the moment!'
    },
    {
      name: 'Ashutosh Parija',
      imgpath: 'https://media1.giphy.com/media/qIXVd1RoKGqlO/giphy.gif?cid=00340317a55q3ph03fztuls1khbcyrehoo2q21ojfozjrbiq&rid=giphy.gif',
      msg: 'Hi Pankaj,\n' +
      '\n' +
      'Congratulations on your 15 year anniversary with Microsoft. I have been very fortunate to get the opportunity to work with you almost from the beginning of my career. You are such a great manager, mentor, and friend. Your passion and energy are very inspirational. I love the way you bring clarity in all the team discussions and provide great technical expertise whenever we need it while respecting everyone\'s opinions at the same time. I love your positive attitude towards everything. Each day I get to learn something new from you. I am looking forward to learning a lot more from you in the years to come.\n' +
      '\n' +
      'Wish you many more awesome years!!'
    },
    {
      name: 'Ankush JAin',
      imgpath: 'https://media0.giphy.com/media/fxsqOYnIMEefC/giphy.gif?cid=003403177rqpokt3c9gym11tdcde0hx2dwfzxxi3djtrg2c1&rid=giphy.gif',
      msg: 'Congratulations Pankaj on your 15th work anniversary at Microsoft !' +
        '\n\n' +
        'You have been a role model and definitely a go-to person whenever there is a need. The passion you posses to solve technical problems is well complemented with your down to earth attitude - which, as well makes you one of the finest mentors, seasoned leader and above all a very dependable team member.\n' +
        'Keep inspiring and rocking !!\n\n' +
        'Cheers,\n' +
        'Ankush'
    },
    {
      name: 'Nishi Katiyar',
      imgpath: 'https://s3.amazonaws.com/kb-tenant-data/63408d57-8dff-4e21-a78d-bc9dc2b69d5f/uploads/images/aIQiLCGXy3paRF5J/medium/xqa7ugfa.jpg',
      msg: 'Congratulations Pankaj! It has been my utmost pleasure to have worked beside you. You have been a teacher, a mentor and someone I aspire to become, both professionally and as a human being. Your honesty, simplicity and humility are inspiring. Knowing that I can reach out to you for any doubts, guidance or life advice has been a very reassuring part of my journey in Microsoft.\n' +
      'Thank you for being so generous with your time and energy and always motivating me 😌\n' +
      'PS: Adding the picture as a fun reminder of your old team 😁'
    },
    {
      name: 'Anumod Thomas',
      imgpath: 'https://media0.giphy.com/media/7zMkk1aiQVonuZQKi6/giphy-downsized.gif?cid=00340317dd25dk38c8fknqpqml3uuo78aik0pppx7bcrrn4e&rid=giphy-downsized.gif',
      msg: 'Dear Pankaj\n' +
        '\n' +
        'Congratulations on your 15 year milestone at Microsoft. The success factors you brought on to Microsoft are truly commendable. I am lucky to know you in person too. Wishing you many more successful milestones to come at Microsoft for you .. Enjoy your anniversary.' +
        '\n' +
        'Regards,\n' +
        'Anumod'
    },
    {
      name: 'Mansi Vijh',
      imgpath: 'https://media1.giphy.com/media/VkoJ9yd1VOePal8KyY/giphy.gif?cid=00340317sidahskdgqdemj63zxh1gaprz4er7ezubkolu7n7&rid=giphy.gif',
      msg: 'Hi Pankaj,\n' +
        '\n' +
        'A big congratulations on completing 15 years at Microsoft!\n' + 
        'In the entire time I\'ve known you, you\'ve constantly demonstrated the qualities an ideal leader should embody and always led by example. Be it the way you consistently seek to improve yourself, or learn from every experience and challenge you encounter, or how you continuously inspire those around you to strive to achieve more by pushing the boundaries, there is something I\'ve learnt in every interaction with you. The support and encouragement you shower on your team for everyone\'s growth are truly valuable. Really thankful to you for pushing us to do better while ensuring we have the necessary tools to proceed.\n' +
        'All the best and wish you many more successful years ahead!'
    },
    {
      name: 'Rajat Gupta',
      imgpath: '',
      msg: 'Congratulations on your 15 years at Microsoft Pankaj! This is a huge milestone, and I\'m sure that there are even bigger milestones for you to accomplish here. Hoping to get in touch and work along with you whenever I strike my chance..' +
        '\n'
    },
    {
      name: 'Sachin Kumar',
      imgpath: '',
      msg: 'Hi Pankaj Sir,\n' +
      'Congratulation on completing 15 years at Microsoft. You are person with great technical skills and and I always enjoyed working with you. \n' +
      'Wish you many more adventures and successes in the upcoming years and hope that I will get the chance to work with you again in the future.!'
    },
    {
      name: 'Akshita Arora',
      imgpath: 'https://media1.giphy.com/media/l3c5zU52Yoe5fMEBq/giphy-downsized.gif?cid=00340317w499t3mcykea34uhqou6cbi4by0ydd2rep0j74rj&rid=giphy-downsized.gif',
      msg: 'Hey Pankaj,\n' +
        '\n' +
        'Congratulations on completing 15 years at Microsoft 🥳. This is a huge achievement! I am grateful to have the opportunity to work with you. Though I have only met you virtually, you have been an inspiration to me. Your relaxed and calm persona, ability to think clearly and come up with solutions, even in the toughest situations is what I admire the most. Sometimes you seem like a superhuman Pankaj 😂\n' +
        'Looking forward to learning more from you and wishing you many more successful years ahead  🎉🎉'
    },
    {
      name: 'Ananta Gupta',
      imgpath: 'https://media2.giphy.com/media/DKnMqdm9i980E/giphy.gif?cid=00340317no59ehr432kj2jpzfa4fzfjfadbarq9t9dgqbbxn&rid=giphy.gif',
      msg: 'Congratulations on achieving this milestone Pankaj!!\n' +
        'Though we have had a limited interaction, I\'ve always appreciated your suggestions. Your experience is reflected in the way you approach a problem and deal with it.\n' +
        'I have also heard lots and lots of praises from the people who work closely with you, and look forward to get an opportunity myself.\n' +
        'Congratulations on completing 15 years at Microsoft and wishing you many more to come!! '
    },
    {
      name: 'Pranav Raj',
      imgpath: 'https://media2.giphy.com/media/v12FFFTON0WgE/giphy.gif?cid=00340317voeo69o1yrbp12b5sw7xdfu67ciywgacqvcc9r36&rid=giphy.gif',
      msg: 'Congratulations pankaj for the milestone. You are the biggest motivation for me. You are a role model to the team. You are a coach and a true leader. The way you mentor us and lead us and enable us is really commendable. You play an essential role in keeping our team motivated. Best of luck for your future endeavors.'
    },
    {
      name: 'Parag Agrawal',
      imgpath: 'https://media0.giphy.com/media/Cj3Ce7e8h2EKY/giphy.gif?cid=00340317r1dsqszqafs7z4ebrehfi6mekj5o8rd6pzbxnxq6&rid=giphy.gif',
      msg: 'Congratulations on completing this big milestone and cheers for many more to come !!' +
           '\n' + 'Its been an amazing experience to work with you. Your attitude and passion are great qualities to learn from. Generally what to do is the easy part of problems, but \how\' to do it is something I get awestruck whenever I discuss with you. Great mentor and guide!\n ' +
           'Once again wishing you more rewarding and successful years at MS!'
    },
    {
      name: 'Avijit Sharma',
      imgpath: '',
      msg: 'Hi Pankaj,' +
           '\n' + 'Congratulations for this amazing feat. It is fantastic to see the fine balance of enthusiasm, knowledge and clarity you bring to any discussion.\n' +
           'You are always open for discussions and brainstorming sessions which helps the team grow.\n' +
           'Party Pending\n' +
           '-Avijit'
    },
    {
      name: 'Ankit Raj Garg',
      imgpath: 'https://media4.giphy.com/media/W2cGKoIfeJPVDZWnRA/giphy-downsized.gif?cid=00340317mvfranm2bdc20ywi6sb1nv63tzptlt7iywt8z0ys&rid=giphy-downsized.gif',
      msg: 'Heartiest Congratulations Pankaj on completing 15 years @Microsoft. I have been really lucky to have you as a Manager, Friend, Mentor and Guide. There is so much to learn from you every single day.' +
        '\n' +
        'The way you remain calm and handle situation is remarkable. The way you take care of your team, peers and show respect to everyone is infectious. You really set the "Expectation from Managers" bar really high. I still remember the call which you and me had for 1.5 hours and you calm me down when I met with accident. Thanks for always being a support for me and team.' +
        '\n' +
        'It\'s been pleasure to be part of your journey @Microsoft for 2 times.  😇' +
        '\n' +
        'Congrats again for your Milestone and wish you many more.  🙂'
    },
    {
      name: 'Sai Manoj Kumar Yadlapati',
      imgpath: 'https://s3.amazonaws.com/kb-stock-photos-cache/achievement/UJm4iGr3rdnUwpPQ/medium/236316829.jpg',
      msg: 'Hi Pankaj, ' +
        '\n' +
        'Congrats on completing 15 years at Microsoft. You are an awesome mentor and senior. I was very lucky to work with you. It is always good to brainstorm any thoughts with you. You are very passionate, open to diverse set of ideas and humble in nature.' +
        '\n' +
        'You have always been an inspiration Pankaj!\n' +
        'Wish you energize us for many more years to come!!  😊'
    },
    {
      name: 'Soumitra Banerjee',
      imgpath: '',
      msg: 'Hello Pankaj Sir,\n' +
      'It\'s been quite sometime we have not worked in the same team, but the bond that you kind of share with me as a friend, philosopher and guide is an asset to me. Pankaj is a true mentor who can not only guide or help you, rather he is more like an architect who can shape you for good. Be it Microsoft of somewhere else, Pankaj has been a goto person for any tough decision making and guidance when i am looking for. '
      + '\n' +
      'I  wish pankaj sir a big congratulations for completing this big milestone in his career and wish him all the best for years to come. \n ' +
      'Thanks\n' +
      'Soumitra'
    },
    {
      name: 'Rahul Burman',
      imgpath: '',
      msg: 'Hi Pankaj' +
        '\n' +
    'Congratulations for completing 15 years at Microsoft. You are a great mentor and I always felt comfortable discussing anything with you. I have worked closely with you in short patches but learnt a lot from you. Your energy and passion is inspiring and the way you motivate people is amazing.  '
    },
    {
      name: 'Sakshi',
      imgpath: 'https://media1.giphy.com/media/m6OomwWCojfS8/giphy.gif?cid=00340317zcfa98mo6jrt0xy2jsqgz2a9n8gy3ro9pphop8jx&rid=giphy.gif',
      msg: 'Congratulations Pankaj on reaching this amazing milestone here at Microsoft! It\'s truly inspiring 🙂'
    },
    {
      name: 'Prafulla Sharma',
      imgpath: 'https://media0.giphy.com/media/3oz9ZE2Oo9zRC/giphy.gif?cid=00340317rnw0m00kkrf335fm6ah7o3iyyg2oeuwgw633dkyd&rid=giphy.gif',
      msg: 'Congratulations for amazing 15 years at Microsoft. Wishing you many more great years ahead ! 🥳 '
    },
    {
      name: 'Logesh Gopal',
      imgpath: '',
      msg: 'Hi Pankaj, \n' +
        '\n' +
        'Congratulations on Completing a great milestone.' +
        '\n' +
        'wishing you success ahead :) ' 
    },
    {
      name: 'Nilesh Awate',
      imgpath: '',
      msg: 'Hearty Congratulations Pankaj! \n' +
        '\n' +
        'I relish all the technical discussions that I had with you. Your passion and energy to learn and solve technical problems are commendable. Our all technical discussions were great learning opportunities for me.' +
        '\n' +
        'I hope will have more technical discussion/interaction with you in the near future' +
        '\n' +
        '~Nilesh'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
