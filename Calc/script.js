const userInput =  document.querySelector("#user_input");
var expression = "";

clique = (num) => {
  expression += num;
  userInput.value = expression;
}

igual = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}
