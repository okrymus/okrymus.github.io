import SvgLines from "react-mt-svg-lines"; // ES6+

import React, { Component } from "react";
import Board from "./board";

import Queen from "./pieces/queen";

class Nqueen extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default Nqueen;

// import React, { Component } from "react";
// import Game from "./game";
// import Board from "./board";
// import "./style.css";
// // var game = new Game();
// // Board.draw(gam

// export default class Nqueen extends Component {
//   render() {
//     return (
//       <div>
//         <Board />
//       </div>
//       // <div>
//       //   <div id="board">
//       //     <div id="board-item-1" class="board-item">
//       //       1
//       //     </div>
//       //     <div id="board-item-2" class="board-item">
//       //       2
//       //     </div>
//       //     <div id="board-item-3" class="board-item">
//       //       3
//       //     </div>
//       //     <div id="board-item-4" class="board-item">
//       //       4
//       //     </div>
//       //     <div id="board-item-5" class="board-item">
//       //       5
//       //     </div>
//       //     <div id="board-item-6" class="board-item">
//       //       6
//       //     </div>
//       //     <div id="board-item-7" class="board-item">
//       //       7
//       //     </div>
//       //     <div id="board-item-8" class="board-item">
//       //       8
//       //     </div>
//       //   </div>
//       // </div>
//     );
//   }
// }
