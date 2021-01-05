let input1;
let input2;
let operator;

export const add = (a,b) => {
  return a+b;
}

export const subtract = (a,b) => {
  return a-b;
}

export const multiply = (a,b) => {
  return a*b;
}

export const divide = (a,b) => {
  return a/b;
}

export const setOperator = (value) => {
  return operator = value;
}

export const setInput = (value) => {
  if (input2) {
    input2 = Number(input2.toString().concat(value));
  } else if (input1) {
      (!operator ? input1 = Number(input1.toString().concat(value)) : input2 = Number(value));
  } else {
    clearScreen();
    input1 = Number(value);
  }
}
