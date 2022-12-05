import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';


describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add one to four', () => {
    const firstNum = container.getByTestId('number1');
    const plus = container.getByTestId('operator-add');
    const secondNum = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(firstNum);
    fireEvent.click(plus);
    fireEvent.click(secondNum);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract four from seven', () => {
    const firstNum = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const secondNum = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(firstNum);
    fireEvent.click(subtract);
    fireEvent.click(secondNum);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply three by five', () => {
    const firstNum = container.getByTestId('number3');
    const multiply = container.getByTestId('operator-multiply');
    const secondNum = container.getByTestId('number5');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(firstNum);
    fireEvent.click(multiply);
    fireEvent.click(secondNum);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide twenty-one by seven', () => {
    const firstNum = container.getByTestId('number2');
    const firstNum1 = container.getByTestId('number1');
    const divide = container.getByTestId('operator-divide');
    const secondNum = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(firstNum);
    fireEvent.click(firstNum1);
    fireEvent.click(divide);
    fireEvent.click(secondNum);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const firstNum = container.getByTestId('number2');
    const firstNum1 = container.getByTestId('number1');
    const secondNum = container.getByTestId('number7');
    fireEvent.click(firstNum);
    fireEvent.click(firstNum1);
    fireEvent.click(secondNum);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('217');
  })

  it('should chain multiple operations together', () => {
    const firstNum = container.getByTestId('number3');
    const multiply = container.getByTestId('operator-multiply');
    const secondNum = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const thirdNum = container.getByTestId('number6');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(firstNum);
    fireEvent.click(multiply);
    fireEvent.click(secondNum);
    fireEvent.click(subtract);
    fireEvent.click(thirdNum);
    fireEvent.click(equals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should clear the running total without affecting the calculation', () => {
    const firstNum = container.getByTestId('number1');
    const plus = container.getByTestId('operator-add');
    const secondNum = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear');
    fireEvent.click(firstNum);
    fireEvent.click(plus);
    fireEvent.click(secondNum);
    fireEvent.click(equals);
    fireEvent.click(clear);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('0');
  })

})
