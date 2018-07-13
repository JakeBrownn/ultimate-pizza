## Ultimate Pizza
It's Pizza Time! How many slices can you get?

### Commands
To play the game, use `$ npm run game`. 
For editing the files, use `$ npm run dev`. 

### Project Background
#### Summary
My first React project that combines everything I've learnt so far in React, Redux, Express and MongoDB so far. Ultimate Pizza (UP) initially started as a simple counting app, that would increment a number when a button was clicked. I was pretty satisfied with this, as React was still very new to me, but I wanted to expanded on the concept a little more... then some more... then even more... until it was clear that I couldn't let this project go.

#### Overcoming Redux
Redux is something I struggled to understand before this project started. Despite the countless hours of tutorials I watched and docs I read Reduxs' core concepts, terminology and benefits just never made that much sense to me. Because of this, I decided to use Reacts in-built State management in the early days of the project. However, I began thinking about the features I wanted to add in the future - a leaderboard system, welcome screen, shop items - I realised very quickly that Reacts in-built State may not be the best approach for these features, especially as I didn't know what features would be in the finished game and what that version would even look like. I needed more flexibility, so I went to implement Redux (you can see this in Commit 85baa55). To my surprise, that Redux-lightbulb-moment happened within an instant. All the theory, tutorials, structure etc that I tried so hard to understand just made sense.

And that was the story on how I learnt Redux.

Yay.

##### Planning Is Good
One of the biggest lessons I've learnt from this project is the importance of planning. To briefly summarise development of UP so far, I've: redesigned the game so many times I've lost count, built a poor initial Redux foundation (which needed to be re-built almost entirely to follow best practices and allow easier scalability), built features which were later scrapped and removed, the endless restructuring of files and folders to the point of questioning my existence. You get the point. The moment I decided this was a project I wanted to see through, I should have scoped it out and had a development plan set before writing a single line of code.


#### Inspiration
[Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) was a great inspiration to this game. It was a great challenge to see if I could re-create some of Cookie Clickers functionality and features.
