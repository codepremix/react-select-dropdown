import React, { useState } from 'react';
import Select from 'react-select';

function App() {
  const data = [
    { value: 100, label: "cerulean" },
    { value: 200, label: "fuchsia rose" },
    { value: 300, label: "true red" },
    { value: 400, label: "aqua sky" },
    { value: 500, label: "tigerlily" },
    { value: 600, label: "blue turquoise" }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }

  return (
    <div className="app">
      <h4>Dropdown using react-select <a href="https://codepremix.com" target="_blank">Code Premix</a></h4>

      <Select
        placeholder="Select Option"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />

      {selectedOption && <div className="output">
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
        <div><b>Value: </b> {selectedOption.value}</div>
      </div>}
    </div>
  );
}

export default App;