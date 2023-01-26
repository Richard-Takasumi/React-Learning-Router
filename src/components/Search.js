import React, { useRef } from 'react';
import { useHistory, useNavigate, Navigate } from 'react-router-dom';

const Search = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value
    }
    const queryString = new URLSearchParams(query).toString();

    navigate({  //updated to RR v6 , in RR v5  history.push({ pathname: '/articles', search: queryString}) was used
    pathname: '',
    search: queryString,
    });
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;