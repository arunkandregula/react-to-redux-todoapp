## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## Current Step: 
  Step2.

## Current Branch: 02-passing-down-implicitly-via-context
  Go to Step2 for related ReadMe for this branch.


## Step1 - Branch. 
01-moving-state-to-store

## Step1. Move the state from TodoApp component to Store.
   1. We need to create new entities like Store, Reducers, ActionsCreator, Constants.
   2. Get the todos from store and pass as properties to TodoApp.
   3. Start json server using following command:
      json-server -p 8080 src/data/db.json
   4. For this step, we just implemented addTodo and toggleTodo. 


## Problems with Step 1.
   1. Every component has a hard coded dependency on a specific store. Then it is difficult to test components with another store. Its a problem1.
   2. How about passing the store as a prop ?
      eg.
      <TodoApp store={StoreFactory.getStore()}/>
      It solves problem1. But creates problem2.
      Problem2: We have to keep passing store around as a prop into every component. 
                More boiler plate code.
   3. How about passing the store implicitly via context ? Lets do this in this Step2.

## Step2 - Branch. 
02-passing-down-implicitly-via-context

## Step2. 
   1. Some Wrapper component should provide the store to all its child components via context.
      Lets call it Provider. Provider's job is to provide store ref to all child componenets.

   2. Our Provider is different from Router.
      Similarity: both of them are providing some info via context.
      Difference: If that info ( route for Router and store for Provider ) chnages,    
                  Router rerenders the entire app, where as, Provider leaves it to individual components if they want to rerender.

   
## Problems with this Step 2. 
   1. Every component (in this case, just TodoApp ) that needs state is directly accessing store from StoreFactory and reading from it. 
   2. Instead of every component depending on the store, its better to expoxe store in context as we are doing in Router.
   3. Which we will show in Step2.

   