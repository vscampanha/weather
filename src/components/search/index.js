import React, { useState, useContext } from 'react';
import axios from 'axios';

import './style.css';
import CitiesContext from '../../context/cities/citiesContext';

const Search = () => {
  const citiesContext = useContext(CitiesContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Enter City Name');
    } else {
      citiesContext.searchCity(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Enter City'
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
