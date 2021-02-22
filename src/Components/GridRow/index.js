import React, { Component } from "react";
import GridItem from "../GridItems";
import "./style.css";

class GridRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.row.map((col, colIndex) => {
          return (
            <GridItem
              rowIndex={this.props.rowIndex}
              colIndex={colIndex}
              col={col}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default GridRow;
