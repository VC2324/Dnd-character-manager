<!-- # Phase 4 Project Template

## Getting Started - Git & Github
gotta add bycrypt to install

pip install flask-bcrypt

Elect one person to clone (DON'T FORK) this project to their local computer. That person will then run this command:

```
git remote remove origin
```

Navigate to github and create a new public repository, choose not to add a README, license, or any additional information. Once the empty repo has been created, follow the directions to upload an existing repository.

Add your collaborators under `Settings > Collaborators` on github.

## Getting Started - Flask

Inside the project run these commands:

```
pipenv install
pipenv shell
cd server
```

Begin by building your first model. From there:

```
flask db init
flask db migrate -m "example migration message"
flask db upgrade
```

Any additional changes you make will only need the `flask db migrate -m "example migration message"` and `flask db upgrade`. It's recommended you build one model at a time to catch errors more easily.

Once your database has been upgraded you may run the server with:

```
python app.py
```

In order to follow best practices with the React server proxy, begin all your route URLs with `/api` (for example `/api/users` for users route).

A seed file has been provided under `seed.py`. To run the seed file:

```
python seed.py
```

## Getting Started - React

The `client` directory contains a React template built by Vite, however you may replace it with one built by `create-react-app` or any other tool if you wish.

At the end of any command using `npm`, append `--prefix client` so that it properly uses the `client` directory or else be sure to `cd client` beforehand.

To start your React server, run:

```
npm install --prefix client
npm run dev --prefix client
```
gotta addd
When making fetch requests, leave out the `localhost:5555` portion since a proxy already exists to that domain and instead prefix every request with `/api` to properly utilize the proxy request feature.

## Conclusion

Once you've completed work on this project, replace this README with one of your own devising! -->


![DND](client/Assets/dndlogo.png)
                         manager


## Table of Contents <a name="table-of-contents"></a>

- [Project Description](#project-description)
- [Features](#features)
- [Tech StacK](#tech_stack)
- [Installation](#installation)
- [Contact](#contact)


## Project Description <a name="project-description"></a>
Version 1
Dn'D manager is a tablet/mobile centric app thta lets users make accounts and able to manage thier DND characters. Users are able to create their own character and maitan them as well as edit and save their character sheet. 
This Project was built using SQLFlask alchemy for the backend and React and Tailwindcss for the frontend.


## Features <a name="features"></a>

- User authentication and authorization
- The ability to sign-up with your own user name and password
- Login with said username and password 
- User has its own profile with the ability to create a character
- User can click on character and edit their character
- User able to save thier edited changes 

# Tech Stack <a name="tech_stack"></a>

- Backend: Flask, SQLAlchemy, RESTful APIs
- Frontend: React, Tailwindcss

## Installation <a name="installation"></a>
## Prerequisites

- vite 5.2.0+
- python 3.7+
- React Router Dom

## General Setup

Fork and Clone via git hub

run in console
- git clone https://github.com/yourusername/Dnd-character-manager.git
- cd Dnd-character-manager
- code .


## Frontend Setup

to install vite
- npm install --prefix client

to run the frontend 
- npm run dev --prefix client

## Backend Setup

to install dependencies 

- pipenv install 
- pipenv shell 

move to server
- cd server

to run the server 

-python app.py

## Setup Database & Seed
** please be aware you need to be in server so do not forget

- flask db init
- flask db migrate -m "Initial migration."
- flask db upgrade

to seed the database 
- python seed.py


## Contact The Devs <a name="contact"></a>

- Victor Cardenas [GitHub](https://github.com/VC2324)