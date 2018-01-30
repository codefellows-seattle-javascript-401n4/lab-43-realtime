401 JS --  Lab 43 Socket IO
===

## Submission Instructions
* continue working from lab 42
  
## Learning Objectives  
* Students will learn to add real time connections from thier cilent to their server

#### Feature Tasks  
### Model 
* create a history model that defines what a speach buble can display in a chat room

#### backend
* Add Socket IO to your backend, with a means for adding subscriber handlers 
* Subsribe to events dispatched from the frontend
  * in your subscibers publish data to the frontends to update the chat

#### frontend 
* Add Socket IO to your frontend, whit a means for adding subsciber handlers
* add a redux-io middleware with will emit each action to the backend
* Subscibe to the backend events
  * update the store when the backend sends payloads

####  Documentation  
Write a description of the project in your README.md

configuration
configure a .env inside /server file to include the following

PORT=3000

NODE_ENV='dev'

SECRET='shark in the dark'

API_URL='http://localhost:3000'

CLIENT_URL='http://localhost:8080'

CORS_ORIGINS='http://localhost:8080'

MONGODB_URI='mongodb://localhost/slugchat-dev'

GOOGLE_CLIENT_SECRET=''

GOOGLE_CLIENT_ID=''

configure a .env inside /client file to include the following

NODE_ENV=dev

API_URL=http://localhost:3000

AUTH_URL=http://localhost:3000

CLIENT_URL=http://localhost:8080

GOOGLE_CLIENT_SECRET=''

GOOGLE_CLIENT_ID=''

In one terminal: 'nodemon' from the server file

In another terminal: 'mongo' from the server file.  Requires a db.

In another terminal: 'npm run watch' from /client file.


