import logo from "./logo.svg";
import "./App.css";
import GridRow from "./Components/GridRow";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      playerTurn: "X",
      clicks: 0,
      winningCondition: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  }
  checkForWin() {
    const testArr = [
      ...this.state.gameState[0],
      ...this.state.gameState[1],
      ...this.state.gameState[2],
    ];
    for (let i = 0; i < this.state.winningCondition.length; i++) {
      const a = testArr[this.state.winningCondition[i][0]];
      const b = testArr[this.state.winningCondition[i][1]];
      const c = testArr[this.state.winningCondition[i][2]];
      if (a === b && b === c && a != "" && b != "" && c != "") return true;
    }
  }
  handleClick = (rowIndex, colIndex) => {
    if (this.state.gameState[rowIndex][colIndex] === "") {
      const copiedGameState = [...this.state.gameState];
      copiedGameState[rowIndex][colIndex] = this.state.playerTurn;
      this.setState({
        gameState: copiedGameState,
        playerTurn: this.state.playerTurn === "X" ? "O" : "X",
        clicks: this.state.clicks + 1,
      });
      setTimeout(() => {
        if (this.checkForWin()) {
          alert(`Player ${this.state.playerTurn === "X" ? "O" : "X"} has Won!`);
          this.setState({
            gameState: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
            ],
            playerTurn: "X",
            clicks: 0,
          });
        }

        if (this.state.clicks === 9) {
          alert(`Draw`);
          this.setState({
            gameState: [
              ["", "", ""],
              ["", "", ""],
              ["", "", ""],
            ],
            playerTurn: "X",
            clicks: 0,
          });
        }
      }, 0);
    }
  };
  render() {
    return (
      <div>
        <h1 className="App">tic tac toe</h1>
        {this.state.gameState.map((row, rowIndex) => {
          return (
            <GridRow
              row={row}
              rowIndex={rowIndex}
              handleClick={this.handleClick}
            />
          );
        })}
        <h3>player: {this.state.playerTurn}'s turn </h3>
      </div>
    );
  }
}

export default App;
