import evaluate from "../src/stack/evaluate";

test("字符串算式解析器", () => {
  const testCases = ["((1+2)+3)", "((2*3)+(4*(5+3)))", "(1*((3+5)*(6+0)))"];
  for (let str of testCases) {
    expect(evaluate(str)).toBe(eval(str));
  }
});
