## Motivation of this tutorial:
   1. To help newbies to transition from React to React with Redux.

## 
Steps to follow to run the application:
npm install
json-server -p 8080 src/data/db.json
npm start


## Current Step: 
  Step9.

## Current Branch: 09-fetching-data-on-route-change
  Go to Step9 for related ReadMe for this branch.

## Problems with Step 8 and its predecessors.
1. So far we have been doing eager loading, where it will retrive all the data in one request. 
   Lets see how we can do lazy loading for performance reasons for huge data sets, where retriving everything in one request may take time.

## Step9 - Branch. 
09-fetching-data-on-route-change

## Step9. 
 1. We have <TodoList />. We want to add props to it.
    <TodoList filter="active" items={filtered items} />

    Previous behaviour: All the data is loaded first time. Every time we chnage filter, items are filtered from the loaded list.
    New/This Step behaviour: Every time we change filter, we fire an ajax request to get data specific to the filter.



