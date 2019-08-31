import React, { Component } from "react";
import PropTypes from "prop-types";
import Token from "./token";
import Game from "./game";

import Queen from "./pieces/queen";
import Boardchecker from "./boardchecker";

const COL_NAMES = "abcdefgh";
const HIGHLIGHTED_COLOR = "yellow";

class Board extends Component {
  constructor(props) {
    super(props);
    this.game = new Game(8);
  }

  state = {
    selected: "",
    highlighted: "",
    dragged: ""
  };
  render() {
    console.log(this.game.Tiles);
    return (
      <div>
        <Boardchecker
          style={{ width: "600" }}
          onClick={this.click}
          highlightedSquares={this._getHighlightedSquares()}
        >
          {this._getPieces()}
        </Boardchecker>
      </div>
    );
  }

  click = ({ square }) => {
    // this.setState({ ...this.state, selected: square, highlighted: square });

    // } else if (this.state.selected) {
    //   this._tryMove(this.state.selected, square);
    // }

    if (!this.state.selected) {
      this.setState({ ...this.state, selected: square, highlighted: square });
    } else if (this.state.selected) {
      this.game.move(this.state.selected, square);
      this.setState({ ...this.state, selected: "", highlighted: "" });
    }
    console.log(this.game.Tiles);
  };

  _getHighlightedSquares() {
    let result = {};

    if (this.state.highlighted) {
      result[this.state.highlighted] = HIGHLIGHTED_COLOR;
    }
    return result;
  }

  _getPieces() {
    let dragged = [];
    let result = [];
    for (let y = 1; y <= 8; y++) {
      for (let x = 0; x < 8; x++) {
        let square = COL_NAMES[x] + y;
        let piece = this.game.get(square);
        // console.log(piece);
        if (piece) {
          // console.log(square);
          const token = (
            <Token
              // draggable={true}
              // shouldDrag={this._shouldDrag}
              // onDrag={this._onDrag}
              // onDrop={this._onDrop}
              square={square}
              animate={true}
              // key={this._getInitialCell(square)}
            >
              <Queen />
            </Token>
          );

          if (square === this.state.dragged) {
            result.push(token);
          } else {
            dragged.push(token);
          }
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
