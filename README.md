## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## Current Step: 
  Step6.

## Current Branch: 06-colocate-selectors-with-reducers
  Go to Step6 for related ReadMe for this branch.

## Problems with Step 5.
1. You can still find some boiler plate in the function mapDispatchToProps. We can remove the boiler plate code.
2. Components like TodoListContainer has knowledge about state shape as it is filtering todos.
   That creates tight coupling between components and reducers. So if state shape changes, we have to update these components as well. Its a maintainance nightmare. We can solve it if we move the selectors i.e. methods that select part of the state like (getFilteredItems or getFilteredTodos) 
   to reducer files that define the state shape.


## Step6 - Branch. 
06-colocate-selectors-with-reducers


## Step6. 
 1. We will see how we can remove boiler plate code in mapDispatchToProps as long as params match.
 2. Any methods that select something from the current state are usually called selectors.
    For example: getFilteredItems ( we will rename this to getFilteredTodos ) in TodoListContainer.
    We will move this to reducer file that knows the shape of the todos i.e. todosReducer.
    TodoListContainer should still pass the argument as  state.todos. Which means it is still aware of todos prop from state. Which it should not. Ideally our components should not know shape of the state. So TodoListContainer should call storeReducer.getFilteredTodos(state)  and BUT NOT todosReducer.getFilteredTodos(state.todos).
 3. We will see how to achieve loose coupling between components and reducers, by having selector methods colocate with reducers and components dont have to be aware of state shape or any state changes in the store.    


