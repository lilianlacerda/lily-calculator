import { useState } from "react";

export const useCalculator = () =>{
    const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleClearLastNumber = () => {
    setCurrentNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber (String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    }else{
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  }

  const handleDivisorNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }else{
        if(currentNumber === '0'){
            alert('Não é possível dividir por zero!!');
            handleClearLastNumber();
            return;
        }
      const divisor = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber (String(divisor));
      setOperation('');
    }
  }

  const handleRestNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    }else{
      const rest = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber (String(rest));
      setOperation('');
    }
  }

  const handleNegativeNumber = () => {
    //prev = previous state
    setCurrentNumber(prev => {
      if(prev === '0') return prev;

      const result = Number(prev) * -1;
      return String(result);
    }); 
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivisorNumbers();
          break;      
        case '%':
          handleRestNumbers();
          break;
        case '+/-':
          handleNegativeNumber();
          break;

        default:
          break;
      }
    }
  };

  return {
    handleOnClear,
    currentNumber, // único dado enviado pois ele fica visivél na UI
    handleAddNumber,
    handleSumNumbers,
    handleMinusNumbers,
    handleMultiplyNumbers,
    handleDivisorNumbers,
    handleEquals,
    handleClearLastNumber,
    handleRestNumbers,
    handleNegativeNumber
  }

}