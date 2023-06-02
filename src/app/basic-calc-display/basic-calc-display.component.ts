import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-calc-display',
  templateUrl: './basic-calc-display.component.html',
  styleUrls: ['./basic-calc-display.component.css'],
})
export class BasicCalcDisplayComponent {
  number: string = '';
  equation: string = '';

  divByOne() {
    const newNumber: number = 1 / +this.number;
    this.number = newNumber.toString();
  }
  powerOfTwo() {
    const newNumber: number = +this.number * +this.number;
    this.number = newNumber.toString();
  }
  sqrt() {
    const newNumber: number = Math.sqrt(+this.number);
    this.number = newNumber.toString();
  }
  clear() {
    this.number = '';
  }
  invert() {
    this.number[0] === '-'
      ? (this.number = this.number.slice(1))
      : (this.number = '-' + this.number);
  }
  addOne() {
    this.number = this.number + '1';
  }
  addTwo() {
    this.number = this.number + '2';
  }
  addThree() {
    this.number = this.number + '3';
  }
  addFour() {
    this.number = this.number + '4';
  }
  addFive() {
    this.number = this.number + '5';
  }
  addSix() {
    this.number = this.number + '6';
  }
  addSeven() {
    this.number = this.number + '7';
  }
  addOEight() {
    this.number = this.number + '8';
  }
  addNine() {
    this.number = this.number + '9';
  }
  addZero() {
    this.number = this.number + '0';
  }
  addDot() {
    this.number = this.number + '.';
  }
  deleteLast() {
    this.number = this.number.slice(0, -1);
  }

  calculate() {
    this.equation = this.equation + this.number;
    const numbers = this.equation.split(' ');

    if (numbers[1] === '+') {
      const newNumber: number = +numbers[0] + +numbers[2];
      this.number = newNumber.toString();
    }
    if (numbers[1] === '/') {
      const newNumber: number = +numbers[0] / +numbers[2];
      this.number = newNumber.toString();
    }
    if (numbers[1] === '*') {
      const newNumber: number = +numbers[0] * +numbers[2];
      this.number = newNumber.toString();
    }
    if (numbers[1] === '-') {
      const newNumber: number = +numbers[0] - +numbers[2];
      this.number = newNumber.toString();
    }
    this.equation = '';
  }
  add() {
    this.equation = this.number + ' ' + '+' + ' ';
    this.number = '';
  }

  divide() {
    this.equation = this.number + ' ' + '/' + ' ';
    this.number = '';
  }
  multiply() {
    this.equation = this.number + ' ' + '*' + ' ';
    this.number = '';
  }
  substract() {
    this.equation = this.number + ' ' + '-' + ' ';
    this.number = '';
  }
}
