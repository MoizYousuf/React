import React, { Component } from "react";
import "./App.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

export default class RenderingTodoList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      const { deleteTodo, Edit, list } = this.props;
    return (
      <div>
        <div className="div">
          {list.map((val, index) => (
            <span key={index}>
              {index + 1}. &nbsp;&nbsp;&nbsp;
              {val} &nbsp;&nbsp;&nbsp;
              <Button
                aria-label="Delete"
                onClick={(e) => deleteTodo(index)}
              >
                <DeleteIcon />
              </Button>
              &nbsp;&nbsp;
              <Button
                variant="fab"
                color="secondary"
                mini
                aria-label="Edit"
                onClick={(e) => Edit(index)}
              >
                <EditIcon />
              </Button>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
