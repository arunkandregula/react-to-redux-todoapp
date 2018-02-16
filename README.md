## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

##
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step:
  Step15.

## Current Branch: 15-avoiding-race-conditions-with-thunks
  Go to Step15 for related ReadMe for this branch.

## Problems with Step 14
1. When we click each of following links when others are still loading : "all", "active", "completed",
   we keep dispatching LoadTodosThunkAction. So we get series of REQUEST_TODOS, followed by series of RECIEVE_TODOS potentially resulting in a race condition.

2. Reducers like TodoReducer is calling Server API. Reducers are supposed to be pure functions and should not have any side effects.
   So we should not call server API in reducers. Lets see where we can call Server API.

## Step15 - Branch.
15-avoiding-race-conditions-with-thunks

## Step15.
1. Lets see how to avoid race conditions.
   By passing store.getState as 2nd arg to thunk method, thunk is functionality is available in action creator can get access to the state and find if we are aready fetching. If so, we dont fetch again.
   By default as this functionality is provided as part of redux-thunk ,we install and use it insdread of our own thunkMiddleware, which we comment here for this step.
2. Lets take a close look at the return value of the thunk.
   A thunk doesnt have to return anything.
   But if a thunk returns a promise its convinient for the calling code to know when the async action creator is done.
   eg. this.props.loadData(filter).then(() => console.log('loadData is done. Async'));

