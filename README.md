## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## 
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step: 
  Step13.

## Current Branch: 13-redux-applyMiddleware
  Go to Step13 for related ReadMe for this branch.

## Problems with Step 12
1. The middlewares we wrote like getDispatchThatLogsState, getDispatchThatRecognizePromise and wrapDispatchWithMiddleware function are not reusable across applications.
   

## Step13 - Branch. 
13-redux-applyMiddleware

## Step13. 
1. We can reuse {applyMiddleware} from 'redux', {createLogger} from 'redux-logger', promise from 'redux-promise' instead of creating them by our own.

