## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## Current Step: 
  Step4.

## Current Branch: 04-enter-react-router
  Go to Step4 for related ReadMe for this branch.

## Problems with Step 4.
1. We are using our own versions of Router and Link, which are very common in almost all applications.
   So lets replace them with versions provided by react-router.


## Step4 - Branch. 
04-enter-react-router


## Step4. 
 1. Instead of relying on custom Router's context.route, we rely on react-router's context params.
 2. Setting the default value of params.filter is a must or the default filter will be shown as undefined.
  Example: 
  <TodoListContainer filter={props.params.filter || 'all'}/>

 3. Also <Link> tag has activeClass which makes life easy withotu using classNames etc.



