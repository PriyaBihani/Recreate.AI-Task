import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PlayerDetail from "./components/PlayerDetail";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResultsTable";

function App(props) {
  const [results, setresults] = useState([]);
  const [playerData, setPlayerData] = useState({});

  return (
    <div className="App">
      <Navbar />
      <SearchBar setresults={setresults} />{" "}
      <SearchResults setPlayerData={setPlayerData} results={results} />
      <PlayerDetail playerData={playerData} />
    </div>
  );
}

export default App;
