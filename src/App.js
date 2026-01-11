import Input from "./components/Input";
import Button from "./components/Button";
import { useCalculator } from "./hooks/useCalculator";

import {Container, Content, Row } from "./styles";


const App = () => {
  const {
    handleOnClear,
    currentNumber,
    handleAddNumber,
    handleSumNumbers,
    handleMinusNumbers,
    handleMultiplyNumbers,
    handleDivisorNumbers,
    handleEquals,
    handleClearLastNumber,
    handleRestNumbers,
    handleNegativeNumber
  } = useCalculator();
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label='C' onClick={handleOnClear} />
          <Button label='CE' onClick={handleClearLastNumber} />
          <Button label='+/-' onClick={handleNegativeNumber} />
          <Button label='%' onClick={handleRestNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="/" onClick={handleDivisorNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="X" onClick={handleMultiplyNumbers} />  
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
      </Content>
    </Container>
  );
};
export default App;
