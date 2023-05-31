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
    <input type="button" value="AC" />
    <input type="button" value="+/-" />
    <input type="button" value="%" />
    <input className="lastColumn" type="button" value="÷" />
    <input type="button" value="7" />
    <input type="button" value="8" />
    <input type="button" value="9" />
    <input className="lastColumn" type="button" value="x" />
    <input type="button" value="4" />
    <input type="button" value="5" />
    <input type="button" value="6" />
    <input className="lastColumn" type="button" value="-" />
    <input type="button" value="1" />
    <input type="button" value="2" />
    <input type="button" value="3" />
    <input className="lastColumn" type="button" value="+" />
    <input className="zero" type="button" value="0" />
    <input type="button" value="." />
    <input className="lastColumn" type="button" value="=" />
  </article>
);

export default Cal;
