import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers';

/******************************* testing addTodo **************************************/

test('addTodo should add passed todo to the list', ()=>{
  const listOfTodos = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    }
  ];

  const newTodo = {
    id: 3,
    name: 'three',
    isComplete: true
  };

  const expectedResult = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    },
    {
      id: 3,
      name: 'three',
      isComplete: true
    }    
  ];

  const actualResult = addTodo(listOfTodos, newTodo);
  expect(actualResult).toEqual(expectedResult);

});

test('addTodo should NOT mutate the existing array', ()=>{
  const listOfTodos = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    }
  ];

  const newTodo = {
    id: 3,
    name: 'three',
    isComplete: true
  };

  const expectedResult = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    },
    {
      id: 3,
      name: 'three',
      isComplete: true
    }    
  ];

  const actualResult = addTodo(listOfTodos, newTodo);
  expect(actualResult).not.toBe(listOfTodos);

});


/******************************* testing findById **************************************/

test('findById should return expected item from an array', ()=>{
  const listOfTodos = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    },
    {
      id: 3,
      name: 'three',
      isComplete: true
    }
  ];

  const expectedTodo = listOfTodos[2];

  const actualTodo = findById(listOfTodos, 3);

  expect(actualTodo).toBe(expectedTodo);

});


/******************************* testing toggleTodo **************************************/

test('toggleTodo should toggle the isComplete prop of a todo', ()=>{
  const startTodo = {
    id: 1,
    name: 'one',
    isComplete: true
  };

  const expectedTodo = {
    id: 1,
    name: 'one',
    isComplete: false
  };

  const actualTodo = toggleTodo(startTodo);

  expect(actualTodo).toEqual(expectedTodo);

});

test('toggleTodo should NOT MUTATE the original todo', ()=>{
  const startTodo = {
    id: 1,
    name: 'one',
    isComplete: true
  };

  const actualTodo = toggleTodo(startTodo);

  expect(actualTodo).not.toBe(startTodo);

});

/******************************* testing updateTodo **************************************/

test('updateTodo should update an item by id', ()=>{
  const listOfTodos = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    },
    {
      id: 3,
      name: 'three',
      isComplete: true
    }
  ];

  const updatedTodo = {
    id: 3,
    name: 'three',
    isComplete: false
  };

  const expectedResult = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    },
    {
      id: 3,
      name: 'three',
      isComplete: false
    }
  ];

  const actualResult = updateTodo(listOfTodos, updatedTodo);

  expect(actualResult).toEqual(expectedResult);

});

test('updateTodo should NOT MUTATE an the array', ()=>{
  const listOfTodos = [
    {
      id: 1,
      name: 'one',
      isComplete: true
    },
    {
      id: 2,
      name: 'two',
      isComplete: false
    },
    {
      id: 3,
      name: 'three',
      isComplete: true
    }
  ];

  const updatedTodo = {
    id: 3,
    name: 'three',
    isComplete: false
  };

  const actualResult = updateTodo(listOfTodos, updatedTodo);

  expect(actualResult).not.toBe(listOfTodos);

});

