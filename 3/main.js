function Operation(a, b, operation) {
    if (typeof a === 'number' && typeof b === 'number' && ['+', '-', '*', '/'].includes(operation)) {
      if (operation === '+') {
        return a + b;
      }
      if (operation === '-') {
        return a - b;
      }
      if (operation === '*') {
        return a * b;
      }
      if (operation === '/') {
        return a / b;
      }
    } else {
      return false;
    }
  }
  
  console.log(Operation(100, 20, '/'));