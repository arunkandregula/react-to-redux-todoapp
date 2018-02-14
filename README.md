## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## 
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step: 
  Step10.

## Current Branch: 10-overriding-dispatch-to-support-promises
  Go to Step9 for related ReadMe for this branch.

## Problems with Step 9
1. Component will take the responsibility of calling the TodoService API and fetching the data and then passing the data to dispatch.
   ActionCreator's method is alsmost dummy and have no use unless we have data.
   We can have the action method do the heavy lifting than the component.
   

## Step10 - Branch. 
10-overriding-dispatch-to-support-promises

## Step10. 
 1. We moved the api calling heavy work into action creator's getLoadTodosPromiseAction.
    This returns a promise action object. And our dispatch should know how to handle this promise.
    So just like earlier we have overriden store.dispatch to add logging support, this time we have overriden it so that it know know to handle special promise action objects.
 2. One thing to remember is, logging should happen after promise resolves so that we log useful action.data.
    If we log before promise resolves, action.data will be printed as promise pending object which is not very useful.
    For that, the store.dispatch that we make available to the application should first handle promise and then next store.dispatch must log the info and last store.dispatch should be the original dispatch.
    For that ordering is important:

    1. addLoggingSupport  
    2. addPromiseSupport.
    and then give the latest dispatch to customer i.e. application.
    So when application calls dispatch, it first calls 2. addPromiseSupport, once the promise is resolved, it then calls 1. addLoggingSupport .



