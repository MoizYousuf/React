import React, { Component } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class TodoInput extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const {
      inputVal,
      update,
      changeInputValue,
      addToList,
      editMode
    } = this.props;
    return (
      <div>
        <TextField
          id="Add to Todo"
          label="Add to Todo"
          onChange={e => changeInputValue(e.target.value)}
          value={inputVal}
          style={{ width: 500 }}
        />
        {editMode ? (
          <Button
            variant="fab"
            color="primary"
            mini
            aria-label="Update"
            className={"block"}
            onClick={e => update(e)}
          >
            <UpdateIcon />
          </Button>
        ) : (
          <Button
            variant="fab"
            color="primary"
            mini
            aria-label="Add"
            className={"block"}
            onClick={e => addToList(inputVal)}
          >
            <AddIcon />
          </Button>
        )}

        <br />
        <br />
        <br />
      </div>
    );
  }
}
