# :pizza: Ultimate Pizza 
It's Pizza time! How many slices can you get?

---

## :computer: Get Started
Pre-requisits: 
- Must be on Node v10 or below

Install deps:
- `$ npm install` - Install server deps
- `$ cd client && npm install` - Install client deps

Local commands:
- `$ npm run game` - Run the game,
- `$ npm run dev` - Develop and run the Server & Client,
- `$ npm run dev-client` - Develop and run the Client,
- `$ npm run dev-server` - Develop and run the Server

## :package: Version List
Features of the game were added in the following versions:

- #### 1.0.0
    - **Start Screen** - Players can add their own username (correct format is required).
    - **The Leaderboard** - Players can now see where they stack up against others.
    - **User Stats** - Upon ending the game, players will now see their gameplay stats (total slices earned, play time and leaderboard position).
    - **Sound Toggles** - The game soundtrack can now be toggled on / off.

---

## :memo: Project Notes
#### Summary
My first React project that combines everything I've learnt in React, Redux, Express and MongoDB so far. Ultimate Pizza (UP) initially started as a simple counting app, that would increment a number when a button was clicked. I was pretty satisfied with this, as React was still very new to me. However, once this piece of functionality was built, I wanted to expanded on the concept a little more... then some more... then even more... until it was clear that I couldn't let this project go. UP is, and always will be, a project that is solely used to fuel my creativity and learning.

#### Overcoming Redux
Redux is something I struggled to understand before I started this project. Despite the countless hours of tutorials I watched and docs I read, Reduxs' core concepts, terminology and benefits just never made much sense to me. Because of this, I started the project using Reacts' in-built Component State. However, as time went, on I began thinking about some the features I wanted to add in the future - a leaderboard system, a welcome screen, shop items etc. It immediately became clear to me that Reacts' Component State management may not be the best approach for these features, especially as I didn't know how I would build the features, how they would need to structued, and not to mention what the finished game would even look like. I needed more flexibility, so I went to implement Redux (you can see this in Commit 85baa55). To my surprise, that Redux-lightbulb-moment happened within an instant. Everything I tried so hard to understand in the past *just* made sense. Redux is great.

#### Planning Is Good
One of the biggest lessons I've learnt from this project is the importance of planning. To briefly summarise development of UP so far: I've redesigned the game so many times I've lost count, built a poor initial Redux foundation (which needed to be re-built almost entirely to follow best practices and allow easier scalability), built features which were later scrapped and removed, the endless restructuring of files and folders to the point of questioning my existence. You get the point. The moment I decided this was a project I wanted to see through, I should have scoped it out, designed the game UI, and had a development roadmap in-place before writing a single line of code.

---

## :surfer: Inspiration & Resources
- [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) was a great inspiration to this game. It was a great challenge to see if I could re-create some of Cookie Clickers functionality, features and gameplay.
- [OpenGameArt](https://opengameart.org/) for assets.

## :ledger: License
Ultimate Pizza is released under the [MIT License](https://en.wikipedia.org/wiki/MIT_License). Feel free to use it in personal and commercial projects.