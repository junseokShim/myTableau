import React from 'react';
import Papa from 'papaparse';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

function CsvLoader({ setData, setColumns }) {
  const handleDataLoad = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setColumns(Object.keys(results.data[0]));
        setData(results.data);
      },
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          component="label"
          style={{ color: 'white', marginTop: '10px', backgroundColor: '#007bff', width: '90%' }}
        >
          Load Data
          <input type="file" style={{ display: 'none' }} onChange={handleDataLoad} />
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}></div>
    </div>
  );
}

CsvLoader.propTypes = {
  setData: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
};

export default CsvLoader;