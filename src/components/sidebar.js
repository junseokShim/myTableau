import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CsvLoader from './loadCSV';

function Sidebar({setData, setColumns}) {
  return (
    <div>
      <ul className="list-unstyled" style={{ marginTop: '10px', paddingLeft: '20px' }}>
        <strong> CSV Loader </strong>
        <CsvLoader setData={setData} setColumns={setColumns} />
      </ul>
    </div>
  );
}

export default Sidebar;