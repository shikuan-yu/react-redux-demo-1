import React from 'react';
import ConverterResult from '../components/converterResult.jsx';

class Converter extends React.Component {
  render() {
    return (
      <div>
        <input />
        <select name="currency">
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="CNY">CNY</option>
          <option value="JPY">JPY</option>
        </select>
        <a> convert to </a>
        <input />
        <br />
        <ConverterResult />
      </div>
    );
  }
}

export default Converter;
