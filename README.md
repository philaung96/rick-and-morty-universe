# Project Overview

## Project Links

- [Github Repo](https://github.com/philaung96/rick-and-morty-universe)
- [Deployed Site](https://philaung96.github.io/rick-and-morty-universe/)

## Project Description

Explore the Rick and Morty universe as Mr. Meeseeks guide you through the different location. Each location will contain different residing characters to meet, and the individual info is presented as well.

## API

Here are the API used to build this project.

| API                |             LINK             |
| ------------------ | :--------------------------: |
| Rick and Morty API | https://rickandmortyapi.com/ |

```
GET: https://rickandmortyapi.com/api/character/2

{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Landing Page](https://imgur.com/a/4GrYZUX)
- [Locations-mobile](https://imgur.com/a/rd7WgpT)
- [Locations-desktop](https://imgur.com/a/1e2Jcen)
- [Location-mobile](https://imgur.com/a/b56ZC63)
- [Location-desktop](https://imgur.com/a/gxmfUyv)

## Reach Architecture Tree

- [React Architecture](https://imgur.com/a/XX6T3Ax)

### MVP/PostMVP 

#### MVP

- Get data properly from Rick and Morty API
- All component pages show properly with data
- Static Mr. Meeseeks to guide the site
- Link components accordingly

#### PostMVP

- Dynamic Mr. Meeseeks

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component        |                            Description                             |
| ---------------- | :----------------------------------------------------------------: |
| App              |   This will make the initial data pull and include React Router    |
| Header           | Include nav bar linking to Guides, Locations, and Random Character |
| Body             |        Overview of Guides, Locations, and Random Character         |
| Footer           |            This will render the header include the nav             |
| Guides           |             Guide on how to navigate the site/universe             |
| Locations        |                      Collection all locations                      |
| Location         |    Info about single location and contains residing characters     |
| Character        |                      Info about the character                      |
| Random Character |              Display/build team of random characters               |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Actual Time |
| ---------------- | :------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |   3.5hrs    |
| Working with API |    H     |      3hrs      |   2.5hrs    |
| Total            |    H     |      6hrs      |    5hrs     |

## Additional Libraries

Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
