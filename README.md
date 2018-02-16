## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

##
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step:
  Step16.

## Current Branch: 16-handling-error-messages
  Go to Step16 for related ReadMe for this branch.

## Problems with Step 15 and its predecessors.
1. When API throws errors, we are not handling it graciously.

## Step16 - Branch.
16-handling-error-messages

## Step16.
1. Lets see how to handle exceptions.
2. Lets change {REQUEST_TODOS, RECEIVE_TODOS}  events to { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE }.
3. Lets make sure we dont display loading indicator and leave it there in case of failure by updating isFetching flag ot false when we receive FETCH_TODOS_FAILURE.
4. Lets throw errors randomly in the API to test FETCH_TODOS_FAILURE case.

