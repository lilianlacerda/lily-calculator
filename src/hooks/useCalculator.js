import { useState } from "react";

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [isNewNumber, setIsNewNumber] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
    setIsNewNumber(false);
  };

  const handleClearLastNumber = () => {
    setCurrentNumber("0");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => {
      if(isNewNumber){
        setIsNewNumber(false);
        return String(number);
      }
      return`${prev === '0' ? '' : prev}${number}`;
    });
  };

  const calculate = () => {
    const current = Number(currentNumber);
    const first = Number(firstNumber);
    let result = 0;

    switch(operation){
      case '+': 
        result = first + current;
        break;
      case '-': 
        result = first - current;
        break;
      case '*': 
        result = first * current;
        break;
      case '/':
        if(current === 0){
          alert('Não é possível dividir por zero!');
          return first;
        }
        result = first / current;
        break;
      case '%':
        result = first % current;
        break;  
      default:
        return current;  
    }
    return result;
  };

  const handleOperation = (op) =>{
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setOperation(op);
      setIsNewNumber(true);
    }else{
      const result = calculate();
      setFirstNumber(String(result));
      setCurrentNumber(String(result));
      setOperation(op);
      setIsNewNumber(true);
    }
  };

  const handleNegativeNumber = () => {
    //prev = previous state
    setCurrentNumber((prev) => {
      if (prev === "0") return prev;
      const result = Number(prev) * -1;
      return String(result);
    });
  };

  const handleEquals = () => {
    if (operation !== "") {
      const result = calculate();
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
      setFirstNumber(true);
    }
  };

  return {
    handleOnClear,
    currentNumber, // único dado enviado pois ele fica visivél na UI
    handleAddNumber,
    handleSumNumbers: () => handleOperation('+'),
    handleMinusNumbers: () => handleOperation('-'),
    handleMultiplyNumbers: () => handleOperation('*'),
    handleDivisorNumbers: () => handleOperation('/'),
    handleRestNumbers: () => handleOperation('%'),
    handleEquals,
    handleClearLastNumber,
    handleNegativeNumber,
  };
};
