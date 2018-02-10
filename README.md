## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## Current Step: 
  Step7.

## Current Branch: 07-nomalizing-state-shape
  Go to Step6 for related ReadMe for this branch.

## Problems with Step 6.
1. In real world, the state could be more complex like multiple arrays.
   In this case, if same todo end up in more than one array, that could lead to data inconsistencies.


## Step7 - Branch. 
07-treat-state-as-database


## Step7. 
 1. Lets normalize the state and make it look like a database for consistency purposes.
 2. Lets use v4() method of node-uuid npm package to generateId.
 3. We also added support for LOAD_TODOS event.


