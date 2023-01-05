import { Component } from "react";
import Box from "./board-box";
import * as utils from "../utils/utility";

class Board extends Component {
  constructor(props) {
    super(props);
    //Initialize the component state
    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true,
    };
  }

  //Function wen box ix clicked
  handleBoxClicked(index) {
    //creating the copy of the state
    const boxes = this.state.boxes.slice();

    //check for no double clicks
    if (boxes[index] !== null) {
      return;
    }

    //get current state of the hhhistory
    let history = this.state.history;

    //Stop the game if board has winning combination
    if (utils.findWinner(boxes)) {
      return;
    }
    //stop the game if all boxes are clicked or filled
    if (utils.areAllBoxesClicked(boxes) === true) {
      return;
    }

    //Mark the box with eighter  x or o
    boxes[index] = this.state.xIsNext ? "x" : "o";

    //add the moves to the history
    history.push(this.state.xIsNext ? "x" : "o");

    //update the state with new data
    this.setState({
      boxes: boxes,
      history: history,
      xIsNext: !this.state.xIsNext,
    });

    //handle game restart
  }
  render() {
    // get the winner only if there is any
    const winner = utils.findWinner(this.state.boxes);

    // if all the boxes filled or not
    const isFilled = utils.areAllBoxesClicked(this.state.boxes);

    let status;
    if (winner) {
      status = `the winner is ${winner}`;
    } else if (!winner && isFilled) {
      status = "Game Drawn";
    } else {
      status = `its ${this.state.xIsNext ? "x" : "o"} turn`;
    }
    return (
      <div className="board-wrapper">
        <div className="board">
          <h2 className="board-heading">{status}</h2>

          <div className="board-row">
            <Box
              value={this.state.boxes[0]}
              onClick={() => this.handleBoxClicked(0)}
            />
            <Box
              value={this.state.boxes[1]}
              onClick={() => this.handleBoxClicked(1)}
            />
            <Box
              value={this.state.boxes[2]}
              onClick={() => this.handleBoxClicked(2)}
            />
          </div>
          <div className="board-row">
            <Box
              value={this.state.boxes[3]}
              onClick={() => this.handleBoxClicked(3)}
            />
            <Box
              value={this.state.boxes[4]}
              onClick={() => this.handleBoxClicked(4)}
            />
            <Box
              value={this.state.boxes[5]}
              onClick={() => this.handleBoxClicked(5)}
            />
          </div>
          <div className="board-row">
            <Box
              value={this.state.boxes[6]}
              onClick={() => this.handleBoxClicked(6)}
            />
            <Box
              value={this.state.boxes[7]}
              onClick={() => this.handleBoxClicked(7)}
            />
            <Box
              value={this.state.boxes[8]}
              onClick={() => this.handleBoxClicked(8)}
            />
          </div>
        </div>
        {/*history of moves */}
        <ul className="board-historyList">
          {this.state.history.length == 0 && <span>No Moves to Show</span>}
          {this.state.history !== 0 &&
            this.state.history.map((move, index) => {
              return (
                <li>
                  Move {index + 1}: <strong>{move}</strong>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Board;
