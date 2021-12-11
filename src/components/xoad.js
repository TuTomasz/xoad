import React, { useState, useEffect } from "react";
import "./tictac.css";

export default function Xoad() {
  let grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let playerOne = "X";
  let playerTwo = "O";

  const [state, setState] = useState(grid);
  const [turn, setTurn] = useState(playerOne);
  const [winner, setWinner] = useState(null);

  const checkForWinner = (state) => {
    const winningConditions = [
      [state[0][0], state[0][1], state[0][2]],
      [state[1][0], state[1][1], state[1][2]],
      [state[2][0], state[2][1], state[2][1]],
      [state[0][0], state[1][0], state[2][0]],
      [state[0][1], state[1][1], state[2][1]],
      [state[0][2], state[1][2], state[2][2]],
      [state[0][0], state[1][1], state[2][2]],
      [state[0][2], state[1][1], state[2][0]],
    ];
    winningConditions.map((condition) => {
      if (condition.every((item) => item === "X")) {
        setWinner("X");
        return "X";
      }
      if (condition.every((item) => item === "O")) {
        setWinner("O");
        return "O";
      }
    });
  };

  const handleTurn = () => {
    if (turn === playerOne) {
      setTurn(playerTwo);
    } else {
      setTurn(playerOne);
    }
  };
  
  const handleSelection = (i, j) => {
    let prevState = [...state];
    prevState[i][j] = turn;
    let newState = prevState;
    setState(newState);
    checkForWinner(newState);
  };

  const resetGame = () => {
    setState(grid);
  };

  useEffect(() => {
    console.log(winner);
    if (winner !== null) {
      alert("winner is " + winner);
      resetGame();
    }
  }, [winner, setWinner]);

  return (
    <div className="Container">
      <p>TURN:{turn}</p>

      <div className="Grid">
        {state.map((row, i) => {
          return (
            <div className="Row" key={i}>
              {row.map((item, j) => {
                return (
                  <div
                    className="Item"
                    key={Math.random() * 100}
                    onClick={(e) => {
                      handleTurn();
                      handleSelection(i, j);
                    }}
                  >
                    {state[i][j]}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
