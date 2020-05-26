---
layout: post
title:  3 Lessons Learned Launching my First Ecommerce Node App
categories:
- programming
---

At the beginning of the current pandemic one of my clients reached out to me with a simple request.

> We need to be able to upload videos to our website and charge our customers to view them.

They had a website hosted on SquareSpace that collected payments for access to in person classes. Which of course had to be cancelled to abide by the shelter-in-place guidelines.

### Lesson 1: Build with the Future in Mind

Their current website had no concept of user accounts. If I were to purchase a class, it would email me a receipt that I would show at the door. SquareSpace did have a way to enable user accounts, but that required upgrading their account tier and there was no guarantee that I would be able to lock pages behind purchases.

At first I was tempted to default to Ruby on Rails for this, but that wouldn't be a challenge for my personal development. I decided to build a React + Express app with all the bells and whistles. Hosted on heroku of course but built in such a way that it can be deployed anywhere. This membership portal was embedded directly in their website with an iframe. This solution worked out well as I didn't have to tinker with much inside of SquareSpace and allowed me to have a staging app for testing as well. I used Vimeo to host the videos just to keep things simple (we all know how expensive hosting your own videos can be).

<img src="/static/img/userflow.jpg" alt="userflow for app" width="100%">
_Userflow for the membership portal._

At first the prompt sounded simple and I could have probably built it out with 3rd party tools. However in the past I've seen that any variation to the request could throw a wrench in a brittle assembly of 3rd party tools. After mapping it out, it was indeed a complex request - not even accounting for quality of life features like recovering your account if you forget your password. After implementing additional features after the initial launch I'm glad I went with this route.

### Lesson 2: Customer Service is Important

<img src="/static/img/customer-service-meme.jpg" alt="customer service meme" width="100%">

I think this project would have grinded to a complete halt if I didn't set deadlines for my client. They're not developers and a mistake I made in the past was letting the client set deadlines. Who better to estimate your work than yourself? Estimation is a very important part of engineering.**I made sure to establish a time and date for the next check in with my clients with what features they can expect to see by then.**

After the initial launch I also made it clear that they can call/email me at anytime with assistance onboarding their students. If this isn't possible for you at least establish service hours (e.g 6pm to 10pm on weekdays). **This was very well received and helped my clients not feel overwhelmed by production bugs whenever they popped up.**

### Lesson 3: Analytics From Launch

<img src="/static/img/analytics-meme.jpg" alt="analytics meme" width="100%">

This was a lesson learned post launch. My client had sent out emails and wanted to know two things:
- How many people interacted with the product?
- How did they interact? Did they sign up? Did they bounce?

This was an oversight on my end - I didn't add any analytics tools and my customers were flying blind. After adding Google Analytics and HotJar it was easier to answer these questions and that helped my client craft better marketing material to sell their instructional videos.

