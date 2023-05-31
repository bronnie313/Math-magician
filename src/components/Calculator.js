const Cal = () => (
  <section>
    <table>
      <tr>
        <th className="result" colSpan="4">0</th>
      </tr>
      <tr>
        <td>AC</td>
        <td>+/-</td>
        <td>%</td>
        <td className="last">÷</td>

      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td className="last">x</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td className="last">-</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td className="last">+</td>
      </tr>
      <tr>
        <td className="zero" colSpan={2}>0</td>
        <td>.</td>
        <td className="last">=</td>
      </tr>
    </table>
  </section>
);

export default Cal;
