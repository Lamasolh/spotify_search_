import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div class='inputWithButton'>
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="search"
            className="searchh"
            name="searchTerm"
            value={searchTerm}
            
            placeholder="Search for an artist..."
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>
        <button  type="submit">
        <img className="img1" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png" alt="search"/>
        </button>
      </Form>
    </div>
  );
};

export default SearchForm;
