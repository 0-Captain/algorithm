/**
 * @description: 计算出一个字符串类型的算术式的结果 1+(2+3 + (4*5))
 * @param {*} expression 算术式
 * @return {*}
 */
function evaluate(expression) {
  const symbolStack = [];
  const valueStack = [];

  const symbols = ["+", "-", "*", "/"];

  let curValue = "";
  for (let s of expression) {
    if (parseInt(s) == s) {
      curValue += s;
    } else {
      parseInt(curValue) == curValue && valueStack.push(parseInt(curValue));
      curValue = "";
    }
    if (symbols.includes(s)) {
      symbolStack.push(s);
    } else if (s == ")") {
      valueStack.push(
        calc(valueStack.pop(), valueStack.pop(), symbolStack.pop())
      );
    }
  }
  return valueStack.pop();
}

function calc(a, b, symbol) {
  a = Number(a);
  b = Number(b);
  let res;
  switch (symbol) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
    default:
      throw new Error(`SyntaxError: unknow symbol ${symbol}`);
  }
  return res;
}

export default evaluate;
