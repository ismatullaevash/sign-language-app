## 💡 Inspiration

The National Center for Health Statistics estimates that 28 million Americans (about 10% of the population) have some degree of hearing loss. However, because many people have not been many people have been exposed or can communicate with others in American Sign Language, this barrier leaves some feeling helpless. We know this to be true because we have seen it online and in real life. Take this for example: 

[One Reddit user in the r/deaf community describes their frustrations communicating with others in their day-to-day life.](https://www.reddit.com/r/deaf/comments/m7mz1c/frustrations_in_daily_life/?utm_source=share&utm_medium=web2x&context=3) 

*"So I work in retail as a cashier, and I have a sign “I’m deaf, please speak up” doesn’t seem to help whatsoever when customers don’t even speak up even when I ask them to verbally!"*

Back on February 12, 2020, Taylor interviewed students for an ASL story for journalism. At Taylor's school, they do Day of Silence for ASL students to bring awareness to the Deaf community every late September. Landon Block, a student learning ASL, talks about his experience: 

*"Communication barrier that you have with the hearing world was difficult. It was rough because I did not have anyone to do ASL in any of my classes. I had to communicate mostly through writing and the troubles it brings (5:01)"* 

*"It was frustrating because I could not share my ideas and had to write them all down and then show others. It was pretty complicated, and it isn’t easy to explain things."*

And according to our competitive analysis of other sign language or language learning programs using the SWOT analysis, many competitor benefits were missing a lack of personalization and use of artificial intelligence that could have boosted their product. Two really helpful aspects were gamification and free access. 

That's why we created **Signum, a web app that uses machine learning and camera vision to detect American Sign Language gestures in real-time for beginners who want to learn practical and necessary phrases in a fun, engaging way. ✨**

## 💻 What it does

Signum has...

- A **clear onboarding process** that asks for which dominant hand, directions, and to turn on the webcam
- An **intuitive guide** that translates the image of a fingerspelling hand sign to the letter with an image processing deep learning network that delivers a model with **90% accuracy**
- After accumulating a certain number of points, the user earns a badge or badges and can **share them with friends to encourage them to learn as well**!

We use AI to analyze a large dataset and provide helpful insights into **accuracy, in real-time, almost as if someone is teaching you in real life**, and more. The gamification element is not meant to be addicting. Rather, we use it to **leverage gamification to motivate self-improvement** using a point system for getting a badge to share and help motivate other friends to join instead of competition like a leaderboard. 

## 🔨 How we built it

**tl;dr** 

1. Idea - brainstorming where we wanted to focus and building on one idea we decided together 
2. Dividing roles and project planning
3. Research: Competitive Analysis, MVP Roadmap, information architecture 
4. User interface: Creating mid-fidelity mockups on Figma, design system using Storybook 
5. Front end: Use some of the CSS code and information from Figma and Storybook. React.js
6. Back end: Using Firebase to create the login and sign up database, Node.js, and Python 
7. Machine learning: Training using TensorFlow 

## 🧠 Challenges we ran into

- Deploying Machine Learning model
- Connecting model with the rest of the application
- Creating an artificial intelligence model. It was Susan's first time dealing with image processing, so it took quite a few errors and trials. For example, the model may have predicted the letters as either O or F when it's supposed to be C or I
- Storybook integration was glitching out a lot. We looked through GitHub issues and saw what other GitHub users said to fix them and make them work

## 🏅 Accomplishments that we're proud of

- It was the first-ever hackathon for Susan, so we're proud of her achievement! ✨
- Mar has not worked with React before until now!
- A fully functional website
- Training a model that has 90% accuracy in the span of 24 hours
- Slick and easy-to-use design. Learned how to create color gradients, rapid design process and design system, and more
- We have built a working prototype in less than 24 hours 🏆
- Helped one another out jumping on calls, chatting, and having fun along the process!

## 📖 What we learned

- Eliminate features or aspects like more categories and profile feature that may take too much time given that we are under time pressure
- MVP and business side perspective of design that can affect how a user interacts and chooses to stay on the platform
- Adding webcam or camera detection onto a React.js framework
- Training TensorFlow model without any experience
- Continue growth mindset, encouraging and celebrating each other's small and big victories!

## 🔜 What's next for Signum

- **More categories** that expand from fingerspelling to ASL phrases. Initially, we were deciding to use multiple categories. However, due to time constraints, we decided to only include essentials or the basics that is important to learn/practice
- **Including a profile and adding user feature** Other community members are able to browse other profiles and build connections, track their own progress, and edit their own information
- **Continuing to improve design and overall product** with constructive feedback, what users liked, disliked, and more. One aspect based on what we see is to improve is to have top navigation bars or some navigation that goes directly to the categories or homepage.
- **Adding expressive sign language models**
- **Expanding ASL to other sign languages**
- **Continue to research about sign language and the Deaf community and ways we can make technology more inclusive**
