import React from 'react';
import 'components/Form.css';

const Filter = ({value, onChange}) => (
  <label className='main_search'>
    Find contact by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);
export default Filter;
