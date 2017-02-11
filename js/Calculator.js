class Calculator {
  constructor(value = 0) {
    this.set(value);
  }
  set(value) {
    this.currentValue = value;
  }
  get() {
    return this.currentValue;
  }
  add(value) {
    this.currentValue += value;
    return this.setPrecision();
  }
  subtract(value) {
    this.currentValue -= value;
    return this.setPrecision();
  }
  multiply(value) {
    this.currentValue *= value;
    return this.setPrecision();
  }
  divide(value) {
    this.currentValue /= value;
    return this.setPrecision();
  }
  power(value) {
    this.currentValue = Math.pow(this.currentValue, value);
    return this.setPrecision();
  }
  sin(value) {
    return Math.sin(value);
  }
  cos(value) {
    return Math.cos(value);
  }
  tan(value) {
    return Math.tan(value);
  }
  setPrecision() {
    this.currentValue = parseFloat(this.currentValue.toPrecision(15));
    return this.currentValue;
  }
}
