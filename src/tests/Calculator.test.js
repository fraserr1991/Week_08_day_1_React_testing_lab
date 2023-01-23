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

  it('should add numbers', () => {
    const button1 = container.getByTestId('number1')
    const operatorAdd = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button1)
    fireEvent.click(operatorAdd)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should subtract numbers', () => {
    const button4 = container.getByTestId('number4')
    const operatorAdd = container.getByTestId('operator-subtract')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(operatorAdd)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')    
  })

  it('should multiply numbers', () => {
    const button3 = container.getByTestId('number3')
    const operatorMultiply = container.getByTestId('operator-multiply')
    const button5 = container.getByTestId('number5')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button3)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button5)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should divide numbers', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')    
    const operatorDivide = container.getByTestId('operator-divide')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(operatorDivide)
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')    
  })

  it('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')  
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual('21')  

  })
  
  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2') 
    const operatorDivide = container.getByTestId('operator-divide')
    const button1 = container.getByTestId('number1')  
    const operatorMultiply = container.getByTestId('operator-multiply')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')   
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(operatorDivide) 
    fireEvent.click(button1)
    fireEvent.click(operatorMultiply)  
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('14')    
  })

  it('clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2') 
    const operatorDivide = container.getByTestId('operator-divide')
    const button1 = container.getByTestId('number1')  
    const operatorMultiply = container.getByTestId('operator-multiply')
    const button7 = container.getByTestId('number7')
    const equals = container.getByTestId('operator-equals')   
    const operatorAdd = container.getByTestId('operator-add')
    const runningTotal = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    fireEvent.click(button2)
    fireEvent.click(operatorDivide) 
    fireEvent.click(button1)
    fireEvent.click(operatorMultiply)  
    fireEvent.click(button7)
    fireEvent.click(clear)
    fireEvent.click(button7)
    fireEvent.click(operatorAdd)
    fireEvent.click(button2)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('16') 
  })
})
