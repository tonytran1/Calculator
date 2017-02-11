class Calculator {
  constructor(value) {
    value = value ? value : 0;
    this.set(value);
  }
  set(value) {
    this.currentValue = value;
  }
  add(value) {
    this.currentValue += value;
    return this.currentValue;
  }
  subtract(value) {
    this.currentValue -= value;
    return this.currentValue;
  }
  multiply(value) {
    this.currentValue *= value;
    return this.currentValue;
  }
  divide(value) {
    this.currentValue /= value;
    return this.currentValue;
  }
  power(value) {
    this.currentValue = Math.pow(this.currentValue, value);
    return this.currentValue;
  }
  clear() {
    this.currentValue = 0;
    return this.currentValue;
  }
}
