module.exports = function check(str, bracketsConfig) {
  const brackets =  [];  
  for (i = 0; i < bracketsConfig.length; i++) {
  brackets.push(bracketsConfig[i][0]);
  }     
  const bracketsPair = {
    [')']: '(',
    ['}']: '{',    
    [']']: '[',
    ['|']: '|',
    ['2']: '1', 
    ['4']: '3', 
    ['6']: '5', 
    ['7']: '7', 
    ['8']: '8'
  };
  let counterl = 0;
  let counter7 = 0;
  let counter8 = 0;
  let stack = [];
  let delElement = ''; 
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    delElement = '';    
    if (currentSymbol === '|'){
      counterl = counterl + 1;      
      } 
    if (currentSymbol === '7'){
      counter7 = counter7 + 1;      
      } 
    if (currentSymbol === '8'){
      counter8 = counter8 + 1;      
      } 
    if (brackets.includes(currentSymbol) && counterl < 2  && counter7 < 2 && counter8 < 2) {
      stack.push(currentSymbol);
    }
    else {
      if (stack.length === 0) {
        return false;
      }    
      let lastElement = stack[stack.length-1];
      if (bracketsPair[currentSymbol] === lastElement) {
        delElement = stack.pop();
        if (delElement === '|') {
          counterl = 0;          
        }
        if (delElement === '7') {
          counter7 = 0;          
        } 
        if (delElement === '8') {
          counter8 = 0;          
        }         
      }
      else {
      return false;
      }
   }
  }
  return stack.length === 0;
}
