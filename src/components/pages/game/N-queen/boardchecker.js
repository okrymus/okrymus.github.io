import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "boardgame.io/ui";
// import { Segment } from "semantic-ui-react";
// import Grid from "./grid";

import Queen from "./pieces/queen";
import "./board.css";

export default class Boardchecker extends Component {
  state = {
    rows: 8,
    cols: 8,
    onClick: () => {},
    primaryColor: "green",
    secondaryColor: "black",
    highlightedSquares: {},
    style: {}
  };

  onClick = id => {
    console.log(id);
  };

  render() {
    // Build colorMap with checkerboard pattern.
    const { rows, cols, primaryColor, secondaryColor } = this.state;

    const tokens = React.Children.map(this.props.children, child => {
      const square = child.props.square;
      const { x, y } = algebraicToCartesian(square, this.props.rows);
      //   const test = React.cloneElement(child, { x, y });
      //   console.log(test.props.x);
      return React.cloneElement(child, { x, y });
    });

    const colorMap = {};
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const key = `${x},${y}`;
        let color = secondaryColor;
        if ((x + y) % 2 === 0) {
          color = primaryColor;
        }
        colorMap[key] = color;
      }
    }

    // console.log(colorMap);
    return (
      <Grid rows={rows} cols={cols} onClick={this.onClick} colorMap={colorMap}>
        {tokens}
      </Grid>
    );
  }
}

// export default Board;

Boardchecker.PropTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  onClick: PropTypes.func,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  highlightedSquares: PropTypes.object,
  style: PropTypes.object,
  // colorMap: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

export function algebraicToCartesian(square, rows = 8) {
  let regexp = /([A-Za-z])(\d+)/g;
  let match = regexp.exec(square);

  if (match == null) {
    throw "Invalid square provided: " + square;
  }
  let colSymbol = match[1].toLowerCase();
  let col = colSymbol.charCodeAt(0) - "a".charCodeAt(0);
  let row = parseInt(match[2]);
  return { x: col, y: rows - row };
}

/**
 * Given an x and y values, returns algebraic notation.
 * Example: 0, 0 returns A1
 */
export function cartesianToAlgebraic(x, y, rows = 8) {
  let colSymbol = String.fromCharCode(x + "a".charCodeAt(0));
  return colSymbol + (rows - y);
}

//   <Segment
//     style={{
//       width: 400
//       // height: 300
//     }}
//   >
//     {/* <Grid columns={cols} padded>
//       {Object.entries(colorMap).map(([key, color]) => (
//         <Grid.Column
//           //   textAlign="center"
//           color={color}
//           key={key}
//           style={{ height: 40 }}
//           onClick={() => this.onClick(key)}
//         >
//           {tokens[1]}
//         </Grid.Column>
//       ))}
//     </Grid> */}
//     <Grid rows={rows} cols={cols} colorMap={colorMap}>
//       {tokens}
//     </Grid>
//   </Segment>
