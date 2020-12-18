import axios from "axios";

import React, { useState } from "react";

const SearchBar = ({ setresults }) => {
  const [data, setData] = useState();
  const endpoint = "https://cricapi.com/api/playerFinder";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      apikey: "X6sFEeyufChRsJ46VxB9mzzrdpk2",
      name: data,
    });
    const res = await axios.post(endpoint, body, config);
    setresults(res.data.data);
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit} className="form-inline mr-auto">
        <input
          onChange={(e) => {
            setData(e.target.value);
          }}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          placeholder="Enter Player Name"
        ></input>
        <button
          className="btn btn-outline-success btn-rounded btn-sm my-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
