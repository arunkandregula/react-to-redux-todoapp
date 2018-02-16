## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

##
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step:
  Step14.

## Current Branch: 14-server-as-single-source-of-truth-intro-thunks
  Go to Step13 for related ReadMe for this branch.

## Problems with Step 13 and steps prior to that
1. Any chnage we want to do like add todo, toggle todo, first do it on the server and use that as single source of truth.
   We are not doing that. Rather we are first making chnages to the store and then doing it on the server as id it is a side action.
   Lets address that.

2. Reducers like TodoReducer is calling Server API. Reducers are supposed to be pure functions and should not have any side effects.
   So we should not call server API in reducers. Lets see where we can call Server API.

## Step14 - Branch.
14-server-as-single-source-of-truth-intro-thunks

## Step14.
1. Reducers like TodoReducer is calling Server API. Reducers are supposed to be pure functions and should not have any side effects.
   So we should not call server API in reducers. We want even Components also to be stateless. Hence, we should not call server API in components.
   The left over pieces in redux ecosystem are ActionCreators and dispatcher(dispatch). How about action creators? By definition they just return action objects, which is not useful for calling server API.
   Solution: We can have dispatcher i.e. dispatch() call Server API. But we cant open dispatch method and write the code there as that will be ugly and unmaintainable as we did with getDispatchThatLogsState, getDispatchThatRecognizePromise. We need to have a way defining the logic to call server api somewhere
   outside dispatch() method but still have dispatch execute it with the help of some middleware.
   How?
   Lets introduce thunks.
   What is a thunk?
   A thunk is nothing but an action object which is a function.
   ActionCreators.js contain multiple action creators. Each method is an action creator that returns action objects.
   So, a thunk is a function returned from an action creator, which is also another function.
   Default dispatch() knows how to handle only POJO action objects.
   Default dispatch() DOESNT know how to handle functions or thunks in redux context.
   So we use 'redux-thunk' middleware to take care of enhancing dispatch() method.

2. Lets see how we can dispatch multiple async actions (eg. requestTodos, receiveTodos) in a thunk.
   I have renamed getLoadTodosPromiseAction to getLoadTodosThunkAction in ActionCreators.js.

3. Most of the logic is moved to action creator and service api.

4. Introduced artificial delay using promises to test the Loading Indicator.

5. Load Todos logic is simplified in reducer.

