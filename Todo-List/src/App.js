import React, { Component } from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TodoInput from "./getTodo";
import RenderingTodoList from "./renderTodo";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      inputVal: "",
      list: [],
      currentInd: "",
      class: "None",
      classtodo: "block"
    };
  }

  addtoList(input) {
    if (this.state.inputVal) {
      let listArray = this.state.list;

      listArray.push(input);

      this.setState({
        list: listArray,
        inputVal: ""
      });
    }
  }

  changeInputValue(input) {
    this.setState({
      inputVal: input
    });
  }

  deleteTodo(index, e) {
    const lists = Object.assign([], this.state.list);
    lists.splice(index, 1);
    this.setState({
      list: lists
    });
  }
  update = e => {
    let items = this.state;
    items.list[items.currentInd] = items.inputVal;
    this.setState({
      inputVal: "",
      list: items.list,
      currentInd: -1,
      editMode: false,
      classNone: "None",
      classBlock: "block"
    });
  };
  Edit(index, e) {
    const lists = Object.assign([], this.state.list);
    this.setState(
      {
        editMode: true,
        currentInd: index,
        inputVal: lists[index],
        classtodo: "None",
        class: "block"
      },
      console.log(this.state)
    );
  }

  render() {
    const { inputVal, editMode, list } = this.state;
    return (
      <div>
        <div>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Todo List
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="full-page">
            <TodoInput
              update={e => this.update(e)}
              inputVal={inputVal}
              changeInputValue={e => this.changeInputValue(e)}
              addToList={e => this.addtoList(e)}
              editMode={editMode}
            />
            <RenderingTodoList
              deleteTodo={e => this.deleteTodo(e)}
              Edit={e => this.Edit(e)}
              list={list}
            />
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default TodoList;
