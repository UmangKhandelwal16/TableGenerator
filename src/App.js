import React, { useState } from 'react';

function TableGenerator() {
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const generateTable = () => {
    const table = [];

    for (let i = 1; i <= number; i++) {
      const row = [];
      for (let j = 1; j <= number; j++) {
        row.push(<td key={j}>{i * j}</td>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }

    return table;
  };

  return (
    <div>
      <label htmlFor="numberInput">Enter a number:</label>
      <input
        type="number"
        id="numberInput"
        value={number}
        onChange={handleInputChange}
      />

      <table>{generateTable()}</table>
    </div>
  );
}

export default TableGenerator;
