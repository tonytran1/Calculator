let calculator = new Calculator();
let operator = 'none';
let startNewNumber = false;
let currentValue;

$('.button').on('click', function(event) {
  event.preventDefault();
  let type = $(this).data('type');
  let value = this.innerHTML;
  events[type](value);
});

const events = {
  'clear' : (value) => clearOperations[value](),
  'operator' : (value) => setOperator(value),
  'number' : (value) => appendToNumber(value),
  'sign-change' : () => signChange(),
  'equals' : () => solve()
}

const math = {
  '+' : (value) => calculator.add(value),
  '-' : (value) => calculator.subtract(value),
  '/' : (value) => calculator.divide(value),
  '*' : (value) => calculator.multiply(value),
  '^' : (value) => calculator.power(value),
  'none' : (value) => value
};

const clearOperations = {
  'C' : () => clearAll(),
  'CE' : () => { $('#input').html('0'); $('#calculation').html(''); },
  'DEL' : () => removeLastDigit()
};

function setOperator(value) {
  let number = parseFloat($('#input').html());
  startNewNumber = true;
  operator = value;
  currentValue = number;
  calculator.set(number);
  $('#input').html('0');
  $('#calculation').html(number + operator);
}

function appendToNumber(value) {
  let number = $('#input').html();
  number = (parseFloat(number) === 0 || startNewNumber) ? value : number + value;
  currentValue = parseFloat(number);
  $('#input').html(number);
  if (startNewNumber) { startNewNumber = false; }
  if (operator !== 'none') {
    let calculation = $('#calculation').html() + value;
    $('#calculation').html(calculation);
  }
}

function signChange() {
  let number = $('#input').html();
  number = number[0].includes('-') ? number.slice(1) : '-' + number;
  $('#input').html(number);
  if (operator !== 'none') {
    let calculation = $('#calculation').html().split(operator);
    $('#calculation').html(calculation[0] + operator + `(${ number })`);
  }
}

function solve() {
  let number = parseFloat($('#input').html());
  let result = math[operator](number);
  $('#input').html(result);
  operator = 'none';
}

function removeLastDigit() {
  let number = $('#input').html();
  number = number.length === 1 ? '0' : number.slice(0, -1);
  $('#input').html(number);
}

function clearAll() {
  calculator.set(0);
  $('#input').html('0');
}
