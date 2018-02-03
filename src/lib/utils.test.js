import {pipe} from './utils';

test('pipe functions as expected', ()=>{
  const inc = (a) => a + 1;
  const dbl = (a) => a * 2;

  const pipeline = pipe(inc, dbl);

  const expectedResult = 6;

  const actualResult = pipeline(2);

  expect(actualResult).toBe(expectedResult);  
})
