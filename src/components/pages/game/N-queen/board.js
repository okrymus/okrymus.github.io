import React, { Component } from "react";
import PropTypes from "prop-types";

import "./board.css";

class Board extends Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
    isConnected: PropTypes.bool,
    isPreview: PropTypes.bool
  };

  // onClick = id => {
  //   if (this.isActive(id)) {
  //     this.props.moves.clickCell(id);
  //     console.log("test");
  //   }
  // };
  constructor() {
    super();

    this.state = {
      black: true
    };
  }
  onClick = id => {
    // if (this.isActive(id)) {
    //   this.props.moves.clickCell(id);
    // }
    this.setState({ black: !this.state.black });
    // console.log(this.isActive(id));
  };

  isActive(id) {
    console.log("test");
    return this.props.isActive;
  }

  render() {
    let btn_class = this.state.black ? "active" : "";
    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(
          <td key={id} className={btn_class} onClick={() => this.onClick(id)} />
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;

// import React, { Component } from "react";
// // import Game from
// import "./style.css";

// export default class Board extends Component {
//   var Board = {};

//   render() {

//     Board.elements = {
//       "1": document.getElementById("board-item-1"),
//       "2": document.getElementById("board-item-2"),
//       "3": document.getElementById("board-item-3"),
//       "4": document.getElementById("board-item-4"),
//       "5": document.getElementById("board-item-5"),
//       "6": document.getElementById("board-item-6"),
//       "7": document.getElementById("board-item-7"),
//       "8": document.getElementById("board-item-8")
//     };

//     Board.draw = function(state) {
//       state.split("").forEach(function(item, index) {
//         if (item == "0") return;

//         var element = Board.elements[item];
//         var row = Math.floor(index / 3);
//         var column = index % 3;

//         element.style.top = row * element.offsetHeight + "px";
//         element.style.left = column * element.offsetWidth + "px";
//       });
//     };
//     return (
//       <div>
//         <div id="board">
//           <div id="board-item-1" className="board-item">
//             1
//           </div>
//           <div id="board-item-2" className="board-item">
//             2
//           </div>
//           <div id="board-item-3" className="board-item">
//             3
//           </div>
//           <div id="board-item-4" className="board-item">
//             4
//           </div>
//           <div id="board-item-5" className="board-item">
//             5
//           </div>
//           <div id="board-item-6" className="board-item">
//             6
//           </div>
//           <div id="board-item-7" className="board-item">
//             7
//           </div>
//           <div id="board-item-8" className="board-item">
//             8
//           </div>
//         </div>

//         {Board.draw("012345678")}
//       </div>
//     );
//   }
// }

// // var Board = {};

// // Board.elements = {
// //   "1": document.getElementById("board-item-1"),
// //   "2": document.getElementById("board-item-2"),
// //   "3": document.getElementById("board-item-3"),
// //   "4": document.getElementById("board-item-4"),
// //   "5": document.getElementById("board-item-5"),
// //   "6": document.getElementById("board-item-6"),
// //   "7": document.getElementById("board-item-7"),
// //   "8": document.getElementById("board-item-8")
// // };

// // Board.draw = function(state) {
// //   state.split("").forEach(function(item, index) {
// //     if (item == "0") return;

// //     var element = Board.elements[item];
// //     var row = Math.floor(index / 3);
// //     var column = index % 3;

// //     element.style.top = row * element.offsetHeight + "px";
// //     element.style.left = column * element.offsetWidth + "px";
// //   });
// // };

// // Board.replayTimeout = null;
// // Board.replayAnimationTimeout = null;

// // // Board.replay = function(moves) {
// // //   Board.clearReplay();

// // //   var initialState = moves.shift();
// // //   Board.draw(initialState);
// // //   window.network.selectNodes([initialState]);

// // // var animate = function(moves) {
// // //   var move = moves.shift();
// // //   if (!move) return boardDiv.classList.remove("animation");
// // //   Board.draw(move);
// // //   window.network.selectNodes([move]);
// // //   Board.replayAnimationTimeout = setTimeout(animate.bind(null, moves), 1000);
// // // };

// // //   Board.replayTimeout = setTimeout(function() {
// // //     animate(moves);
// // //   }, 1000);
// // // };

// // // Board.clearReplay = function() {
// // //   clearTimeout(Board.replayTimeout);
// // //   clearTimeout(Board.replayAnimationTimeout);
// // //   boardDiv.classList.remove("animation");
// // // };

// // export default Board;
