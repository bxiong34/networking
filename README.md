# 18 NoSQL: Networking

## Description

An API is built for users to network with others by sharing their thoughts, adding friends, and reacting to their friends thoughts. Since the application is not deployed, the application will be used throught localhost. 


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock Up

The video below demonstrate the application's API routes (GET, POST, PUT, and DELETE) being tested via Insomnia:

[![Demo of routes being tested in Insomnia.](<./assets/Screenshot 2024-01-24 at 10.14.18 PM.png>)](https://drive.google.com/file/d/1-pBa3DXgo5PKbLf48WkoIGv7rzqh_2Lt/view?usp=sharing)

## Installation

[Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages are required to use and test the application.