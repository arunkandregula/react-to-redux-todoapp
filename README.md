## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## 
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step: 
  Step11.

## Current Branch: 11-introducing-middleware-chain
  Go to Step11 for related ReadMe for this branch.

## Problems with Step 10
1. If we want to enhance dispatch by wrapping it multiple times, the code pattern may look ugly. The order in which action propagates is reverse to the order in which we override dispatch method, which is not super readable or intuitive. For example, the order in which action propagates is getDispatchThatRecognizePromise and getDispatchThatLogsState. But the order in which we override dispatch is getDispatchThatLogsState, getDispatchThatRecognizePromise.

## Step11 - Branch. 
11-introducing-middleware-chain

## Step11. 
  1. We will see how we can have a more scalable and generalized way of enhancing dispatch functionality with the concept of middlewares.
     Every middleware function/module wraps dispatch and enhances it.
  2. We will also make it more readable and intuitive by declaring the middleware functions/modules in the same order in which the action propagates.
