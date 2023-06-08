import { useState } from 'react';
import PropTypes, { number } from 'prop-types';
import calculate from './logic/calculate';

const Cal = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const allClear = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  const toggleSign = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  const numberClick = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  const operatorClick = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  const equalClick = (buttonName) => {
    setCalculatorData(calculate(calculatorData, buttonName));
  };

  const nextValue = Number(calculatorData.next);
  const totalValue = Number(calculatorData.total);

  return (
    <div className="info">
      <div><h2 className="cal">Let&apos;s do some Math</h2></div>
      <section>
        <CalculatorScreen value={nextValue || totalValue || 0} />
        <CalcBtns
          handleClearClick={allClear}
          handleToggleSign={toggleSign}
          handleNumberClick={numberClick}
          handleOperatorClick={operatorClick}
          handleEqualClick={equalClick}
        />
      </section>
    </div>
  );
};

const CalculatorScreen = ({ value }) => (
  <div className="screen">
    <h2>{value}</h2>
  </div>
);

CalculatorScreen.propTypes = {
  value: number.isRequired,
};

const CalcBtns = ({
  handleClearClick, handleToggleSign, handleNumberClick, handleOperatorClick, handleEqualClick,
}) => (

  <article className="keys">
    <input onClick={() => handleClearClick('AC')} type="button" value="AC" />
    <input onClick={() => handleToggleSign('+/-')} type="button" value="+/-" />
    <input onClick={() => handleOperatorClick('%')} type="button" value="%" />
    <input onClick={() => handleOperatorClick('÷')} className="lastColumn" type="button" value="÷" />
    <input onClick={() => handleNumberClick('7')} type="button" value="7" />
    <input onClick={() => handleNumberClick('8')} type="button" value="8" />
    <input onClick={() => handleNumberClick('9')} type="button" value="9" />
    <input onClick={() => handleOperatorClick('x')} className="lastColumn" type="button" value="x" />
    <input onClick={() => handleNumberClick('4')} type="button" value="4" />
    <input onClick={() => handleNumberClick('5')} type="button" value="5" />
    <input onClick={() => handleNumberClick('6')} type="button" value="6" />
    <input onClick={() => handleOperatorClick('-')} className="lastColumn" type="button" value="-" />
    <input onClick={() => handleNumberClick('1')} type="button" value="1" />
    <input onClick={() => handleNumberClick('2')} type="button" value="2" />
    <input onClick={() => handleNumberClick('3')} type="button" value="3" />
    <input onClick={() => handleOperatorClick('+')} className="lastColumn" type="button" value="+" />
    <input onClick={() => handleNumberClick('0')} className="zero" type="button" value="0" />
    <input onClick={() => handleNumberClick('.')} type="button" value="." />
    <input onClick={() => handleEqualClick('=')} className="lastColumn" type="button" value="=" />
  </article>
);

CalcBtns.propTypes = {
  handleClearClick: PropTypes.func.isRequired,
  handleToggleSign: PropTypes.func.isRequired,
  handleNumberClick: PropTypes.func.isRequired,
  handleOperatorClick: PropTypes.func.isRequired,
  handleEqualClick: PropTypes.func.isRequired,
};

export default Cal;
