/*

// This function works perfectly fine as long as we have one argument.
// If we have more than 1 arg, then this breaks.   
// Solution 1. 
const pipe = (...fns)=>{
  return function(value){
    let result = value;
    fns.forEach((eachFn)=>{
      result = eachFn(result)
    });
    return result;
  }
};

// Solution 2. Which works for multiple arguments
const pipe = (...fns)=>{
  return function(...args){
    let results = args;
    fns.forEach((eachFn)=>{
      debugger;
      results = eachFn(...results);
      results = [results];
    });
    return results[0];
  }
};

*/


const _pipe = (f, g) => (...args) => g(f(...args));

// Solution 3. Which works for multiple arguments
export const pipe = (...fns) => fns.reduce(_pipe);

