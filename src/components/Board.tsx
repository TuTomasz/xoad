import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Board.css";

export default function Board() {
  let grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let playerOne = "X";
  let playerTwo = "O";

  let moves = new Set();

  const [counter, setCounter] = useState(0);
  const [state, setState] = useState(grid);
  const [turn, setTurn] = useState(playerOne);
  const [stage, setStage] = useState(0);
  const [winner, setWinner] = useState("null");

  const checkForWinner = (state: any) => {
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
      if (condition.every((item) => item === "T")) {
        setWinner("X");
        return "X";
      }
      if (condition.every((item) => item === "S")) {
        setWinner("O");
        return "O";
      }
    });
    return false;
  };

  const handleTurn = () => {
    if (stage == 0) {
      playerOne = "X";
      playerTwo = "O";
      if (turn === playerOne) {
        setTurn(playerTwo);
      } else {
        setTurn(playerOne);
      }
    } else {
      playerOne = "S";
      playerTwo = "T";
      if (turn === playerOne) {
        setTurn(playerTwo);
      } else {
        setTurn(playerOne);
      }
    }
  };

  const handleSelection = (i: any, j: any) => {
    let move = String(i + j);
    if (move in moves) {
      return;
    }
    moves.add(move);

    let prevState = [...state];
    prevState[i][j] = turn;
    let newState = prevState;
    setState(newState);

    setCounter(counter + 1);

    if (counter == 8) {
    }

    if (counter == 8 && checkForWinner(newState) == false) {
      setStage(1);
      stage == 1 ? setStage(0) : setStage(1);
      setCounter(0);
    }
  };

  const resetGame = () => {
    setState(grid);
  };

  const logState = () => {
    console.log("+++++++++++++");
    console.log(String(state));
    console.log(counter);
    console.log(turn);
    console.log(stage);
    console.log("+++++++++++++");
  };

  useEffect(() => {
    logState();
  }, [state]);

  useEffect(() => {
    console.log(winner);
    if (winner !== null) {
      //alert("winner is " + winner);
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
                    <Cell shape={state[i][j]} />
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
