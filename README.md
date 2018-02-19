401 JS --  Lab 43 Socket IO
===

## Submission Instructions
* continue working from lab 42

## Learning Objectives  
* Students will learn to add real time connections from their client to their server

#### Feature Tasks  
### Model
* create a history model that defines what a speech bubble can display in a chat room

#### backend
* Add Socket IO to your backend, with a means for adding subscriber handlers
* Subscribe to events dispatched from the frontend
  * in your subscribers publish data to the frontends to update the chat

#### frontend
* Add Socket IO to your frontend, whit a means for adding subscriber handlers
* add a redux-io middleware with will emit each action to the backend
* Subscribe to the backend events
  * update the store when the backend sends payloads

####  Documentation  
Write a description of the project in your README.md
