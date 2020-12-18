import React from "react";
import axios from "axios";

const SearchResults = ({ results, setPlayerData }) => {
  const handlePlayer = async (pid, e) => {
    const endpoint = `https://cricapi.com/api/playerStats?pid=${pid}`;

    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      apikey: "X6sFEeyufChRsJ46VxB9mzzrdpk2",
    });
    const res = await axios.post(endpoint, body, config);
    setPlayerData(res.data);
    console.log(res.data);
  };
  return (
    <div>
      {results.length > 0 ? (
        <div className="container">
          Search Results
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Player Name</th>
                <th scope="col">PlayerId</th>
              </tr>
            </thead>
            <tbody>
              {results &&
                results.map((result, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{result.name}</td>
                      <td>
                        {" "}
                        <button
                          close
                          className="btn btn-info"
                          type="button"
                          data-toggle="modal"
                          data-target={`#modal`}
                          onClick={(e) => {
                            setPlayerData({});
                            handlePlayer(result.pid, e);
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default SearchResults;
