import React, { Component } from "react";
import PropTypes from "prop-types";

import Queen from "./pieces/queen";
import Boardchecker from "./boardchecker";

const COL_NAMES = "abcdefgh";

class Board extends Component {
  state = {
    selected: "",
    highlighted: "",
    dragged: ""
  };
  render() {
    return (
      <div>
        <Boardchecker>{this._getPieces()}</Boardchecker>
      </div>
    );
  }

  _getPieces() {
    let dragged = [];
    let result = [];
    for (let y = 1; y <= 8; y++) {
      for (let x = 0; x < 8; x++) {
        let square = COL_NAMES[x] + y;
        // let piece = this.chess.get(square);
        // if (piece) {
        const token = (
          <div square={square}>
            <Queen />
          </div>
        );
        if (square === this.state.dragged) {
          result.push(token);
        } else {
          dragged.push(token);
        }
      }
    }
    return dragged.concat(result);
  }
}

export default Board;

// import React, { Component } from "react";
// import PropTypes from "prop-types";

// import "./board.css";

// class Board extends Component {
//   // static propTypes = {
//   //   moves: PropTypes.any.isRequired,
//   //   isActive: PropTypes.bool
//   // };

//   // onClick = id => {
//   //   if (this.isActive(id)) {
//   //     this.props.moves.clickCell(id);
//   //     console.log("test");
//   //   }
//   // };
//   constructor() {
//     super();

//     this.state = {
//       actives: []
//     };

//     // this.actives = [];
//   }

//   onClick = id => {
//     if (!this.isActive(id)) {
//       this.state.actives.push(id);
//     } else {
//       const filteredItems = this.state.actives.filter(item => item !== id);
//       this.state.actives = filteredItems;
//     }

//     this.setState(this.state.actives);

//     console.log(id);
//   };

//   isActive(id) {
//     return this.state.actives.find(element => element === id);
//   }

//   render() {
//     let tbody = [];

//     for (let i = 0; i < 3; i++) {
//       let cells = [];
//       for (let j = 0; j < 3; j++) {
//         const id = 3 * i + j;
//         cells.push(
//           <td
//             key={id}
//             className={this.isActive(id) ? "active" : ""}
//             onClick={() => this.onClick(id)}
//           />
//         );
//       }
//       tbody.push(<tr key={i}>{cells}</tr>);
//     }

//     return (
//       <div>
//         <table id="board">
//           <tbody>{tbody}</tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Board;
