import calculate from './logic/calculate.js'
import operate from './logic/operate.js';

const Cal = () => (
  <section>
    <CalculatorScreen />
    <CalcBtns />
  </section>
);

const CalculatorScreen = () => (
  <div className="screen">
    <h2>0</h2>
  </div>
);

const CalcBtns = () => (
  <article className="keys">
    <input onClick={() => hundleClearClick('AC')} type="button" value="AC" />
    <input onClick={handleToggleSign} type="button" value="+/-" />
    <input onClick={() => hundleOperatorClick('÷')} type="button" value="%" />
    <input onClick={() => hundleOperatorClick('÷')} className="lastColumn" type="button" value="÷" />
    <input onClick={() => hundleNumberClick('7')} type="button" value="7" />
    <input onClick={() => hundleNumberClick('8')} type="button" value="8" />
    <input onClick={() => hundleNumberClick('9')} type="button" value="9" />
    <input onClick={() => hundleOperatorClick('*')} className="lastColumn" type="button" value="x" />
    <input onClick={() => hundleNumberClick('4')} type="button" value="4" />
    <input onClick={() => hundleNumberClick('5')} type="button" value="5" />
    <input onClick={() => hundleNumberClick('6')} type="button" value="6" />
    <input onClick={() => hundleOperatorClick('-')} className="lastColumn" type="button" value="-" />
    <input onClick={() => hundleNumberClick('1')} type="button" value="1" />
    <input onClick={() => hundleNumberClick('2')} type="button" value="2" />
    <input onClick={() => hundleNumberClick('3')} type="button" value="3" />
    <input onClick={() => hundleOperatorClick('+')} className="lastColumn" type="button" value="+" />
    <input onClick={() => hundleNumberClick('0')} className="zero" type="button" value="0" />
    <input onClick={() => hundleNumberClick('.')} type="button" value="." />
    <input onClick={() => hundleEqualClick('=')} className="lastColumn" type="button" value="=" />
  </article>
);

export default Cal;
