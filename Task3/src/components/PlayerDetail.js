import React from "react";

const PlayerDetail = ({ playerData }) => {
  console.log(playerData);
  const {
    fullName,
    imageURL,
    majorTeams,
    born,
    battingStyle,
    bowlingStyle,
    country,
    currentAge,
    profile,
    data,
  } = playerData && playerData;

  const bowling = data && data.bowling;
  const batting = data && data.batting;
  console.log(bowling);

  return (
    <div
      className="modal fade"
      id="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="container">
            <div className="modal-header">
              <h4 className="modal-title w-100" id="myModalLabel">
                {fullName}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={imageURL} alt={fullName + "'s" + " " + "photo"} />
            </div>
            <div className="description">{profile && profile}</div>
            <div className="stats">
              <div>
                {" "}
                <b>Born</b>: {born}
              </div>
              <div>
                <b>Age</b>: {currentAge}
              </div>
              <div>
                {" "}
                <b>Team</b>: {majorTeams}
              </div>
              <div>
                {" "}
                <b>Country</b>: {country}
              </div>
              <div>
                {" "}
                <b>Batting Style</b>: {battingStyle}
              </div>
              <div>
                {" "}
                <b>Bowling Style</b>: {bowlingStyle}
              </div>
            </div>
            <div className="batting-stats">Batting Stats</div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">4s</th>
                  <th scope="col">6s</th>
                  <th scope="col">50</th>
                  <th scope="col">100</th>
                  <th scope="col">Matches</th>
                  <th scope="col">Runs</th>
                  <th scope="col">StrikeRate</th>
                </tr>
              </thead>
              <tbody>
                <td>ODI's</td>
                <td>{batting && batting.ODIs["4s"]}</td>
                <td>{batting && batting.ODIs["6s"]}</td>
                <td>{batting && batting.ODIs[50]}</td>
                <td>{batting && batting.ODIs[100]}</td>
                <td>{batting && batting.ODIs["Mat"]}</td>
                <td>{batting && batting.ODIs["Runs"]}</td>
                <td>{batting && batting.ODIs["SR"]}</td>
              </tbody>
              <tbody>
                <td>T20's</td>
                <td>{batting && batting.T20Is["4s"]}</td>
                <td>{batting && batting.T20Is["6s"]}</td>
                <td>{batting && batting.T20Is[50]}</td>
                <td>{batting && batting.T20Is[100]}</td>
                <td>{batting && batting.T20Is["Mat"]}</td>
                <td>{batting && batting.T20Is["Runs"]}</td>
                <td>{batting && batting.T20Is["SR"]}</td>
              </tbody>
              <tbody>
                <td>Test's</td>
                <td>{batting && batting.tests["4s"]}</td>
                <td>{batting && batting.tests["6s"]}</td>
                <td>{batting && batting.tests[50]}</td>
                <td>{batting && batting.tests[100]}</td>
                <td>{batting && batting.tests["Mat"]}</td>
                <td>{batting && batting.tests["Runs"]}</td>
                <td>{batting && batting.tests["SR"]}</td>
              </tbody>
            </table>
            <div className="bowling-stats">Bowling Stats</div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">4w</th>
                  <th scope="col">5w</th>
                  <th scope="col">10</th>
                  <th scope="col">Ave</th>
                  <th scope="col">Mat</th>
                  <th scope="col">Balls</th>
                  <th scope="col">Econ</th>
                </tr>
              </thead>
              <tbody>
                <td>ODI's</td>
                <td>{bowling && bowling.ODIs["4w"]}</td>
                <td>{bowling && bowling.ODIs["5w"]}</td>
                <td>{bowling && bowling.ODIs[10]}</td>
                <td>{bowling && bowling.ODIs["Ave"]}</td>
                <td>{bowling && bowling.ODIs["Mat"]}</td>
                <td>{bowling && bowling.ODIs["Balls"]}</td>
                <td>{bowling && bowling.ODIs["Econ"]}</td>
              </tbody>
              <tbody>
                <td>T20's</td>
                <td>{bowling && bowling.T20Is["4w"]}</td>
                <td>{bowling && bowling.T20Is["5w"]}</td>
                <td>{bowling && bowling.T20Is[10]}</td>
                <td>{bowling && bowling.T20Is["Ave"]}</td>
                <td>{bowling && bowling.T20Is["Mat"]}</td>
                <td>{bowling && bowling.T20Is["Balls"]}</td>
                <td>{bowling && bowling.T20Is["Econ"]}</td>
              </tbody>
              <tbody>
                <td>Test's</td>
                <td>{bowling && bowling.tests["4w"]}</td>
                <td>{bowling && bowling.tests["5w"]}</td>
                <td>{bowling && bowling.tests[10]}</td>
                <td>{bowling && bowling.tests["Ave"]}</td>
                <td>{bowling && bowling.tests["Mat"]}</td>
                <td>{bowling && bowling.tests["Balls"]}</td>
                <td>{bowling && bowling.tests["Econ"]}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
