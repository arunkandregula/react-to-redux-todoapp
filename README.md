## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

##
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step:
  Step12.

## Current Branch: 12-input-dispatch-output-dispatch
  Go to Step11 for related ReadMe for this branch.

## Problems with Step 11
1. The signature of the middleware functions are different from the signature of middleware modules provided by redux i.e. 'redux-logger' and 'redux-promise'.


## Step12 - Branch.
12-input-dispatch-output-dispatch

## Step12.
  1. In a middleware chain, multiple middlewares may play their role. Each middleware instead of taking a store as input and return enhanced dispatch.
     It wants to take previous dispatch as input and return next dispatch as output.
     For that we need to refactor each middleware function.
