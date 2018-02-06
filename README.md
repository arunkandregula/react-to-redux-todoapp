## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## Branch. 
01-moving-state-to-store

## Step1. Move the state from TodoApp component to Store.
   1. We need to create new entities like Store, Reducers, ActionsCreator, Constants.
   2. Get the todos from store and pass as properties to TodoApp.
   3. Start json server using following command:
      json-server -p 8080 src/data/db.json
   4. For this step, we just implemented addTodo and toggleTodo. 
   
## Problems with this Step 1. 
   1. Every component (in this case, just TodoApp ) that needs state is directly accessing store from StoreFactory and reading from it. 
   2. Instead of every component depending on the store, its better to expoxe store in context as we are doing in Router.
   3. Which we will show in Step2.

   