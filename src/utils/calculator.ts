export enum Operator {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide',
}

type Operation = (x: number, y: number) => number;

const operations: [Operator, Operation][] = [];

const add = (first: number, second: number) => {
  return first + second;
};

const subtract = (first: number, second: number) => {
  return first - second;
};

const multiply = (first: number, second: number) => {
  return first * second;
};

const divide = (first: number, second: number) => {
  return first / second;
};

operations.push([Operator.Add, add]);
operations.push([Operator.Subtract, subtract]);
operations.push([Operator.Multiply, multiply]);
operations.push([Operator.Divide, divide]);

const calculator = (first: number = 2, second: number = 2, op: Operator) => {
  const tuple = operations.find(tpl => tpl[0] === op);
  const operation = tuple![1];
  const result = operation(first, second);
  return result;
};


