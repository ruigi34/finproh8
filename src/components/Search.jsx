/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searching } from '../slices/searchSlice';

export default function Search() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(searching(search));
  };

  return (
    <form className="d-flex" role="search" onSubmit={onSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn bg-black text-warning" type="submit">
        Search
      </button>
    </form>
  );
}
