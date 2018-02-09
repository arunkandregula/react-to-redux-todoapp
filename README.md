## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## Current Step: 
  Step5.

## Current Branch: 05-injecting-router-params
  Go to Step5 for related ReadMe for this branch.

## Problems with Step 4.
1. Currently Router params are available only to TodoApp. TodoApp doesnt directly use them, rahter pass them to its child components like :
<TodoListContainer filter={props.params.filter || 'all'}/>
Again boiler plate props. Lets see how we can directly inject these router params into connected components or container components.


## Step5 - Branch. 
05-injecting-router-params


## Step5. 
 1. In what ever container component, we need router params, do:
    import { withRouter } from 'react-router';
    ..
    return withRouter(connect(.. , ..)(...));
 2. Thats it.   



