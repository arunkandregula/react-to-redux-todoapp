## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## Current Step: 
  Step3.

## Current Branch: 03-presentation-and-container-components
  Go to Step3 for related ReadMe for this branch.

## Problems with Step 2.
1. Right now TodoApp is overloaded with responsibilities like reading and writing to store and doing a forceUpdate whenever anything in the store changes. We will see how we can solve this problem by introducing Container components.

2. Provider component that we wrote seems very static and standard in any application. So this seems boiler plate. We will see how we can avoid writing Proivder by reusing the <Provider> component from react-redux library.



## Step3 - Branch. 
03-presentation-and-container-components


## Step3. Split each component into presentational and container counterparts.
   1. We have following presentational components: 
      TodoInput, TodoItem, TodoList as presentational components.
      All of their behaviour is specified in TodoApp.
   2. We can reduce the responsibilities of TodoApp by moving the behaviour to corresponding Container counterparts of each of those Presentational components.

   3. Container components will take care of retrieving the store ref from context and doing store.subscribe and store.unsubscribe. In other words, when anything in the store chnages, these container components are responsible for rerendering their presenational counterparts.

   4. Facts about container components :
      All container components are similar. They have 3 main jobs :
      1. Connect a presentational components to the Redux store. 
      2. Specify the data and the behavior that it needs.
      3. Have store subscription logic. They have to rerender when the store state changes. They use store.subscribe/store.unsubscribe.

      So they have lot of boiler plate. So we can have Redux generate the container components for us
      by ReactRedux.connect.
   5. TodoListContainer has to filter the todos from store and pass it itno TodoList.
      It will need access to this.context.route. But we cant access this.context from Container component. So we pass it as a prop into TodoListContainer from TodoApp. 

   6. When we add a todo, we need to access state.currentTodo when dispatching ADD_TODO event.
      Million dollar question: How to access state in mapDispatchToProps ?
    // We cant ideally.
    // 1 way to solve this is to get the value of currentTodo from input ref ( current implementation)
    // 2nd way to solve is to pass third param as prevState.currentTodo in todosReducer
   
   7. Now TodoApp is a stateless functional component and is so succinct. 
      Note the way we accessed context from this stateless component. Stateless functional components can reference context if contextTypes is defined as a property of the function.



