import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpdateIcon from '@material-ui/icons/Update';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Todo extends Component {
  
  constructor() {
    super();
    this.state = {
      inputVal: '',
      list: [],
      currentInd: '',
      class: 'None',
      classtodo: 'block'
    }
  }
  changeInputValue(input) {
    this.setState({
      inputVal: input
    })
  }
  addtoList(input) {
    if(this.state.inputVal){
    let listArray = this.state.list;
    
    listArray.push(input)
    
    this.setState({
      list: listArray,
      inputVal: ''
    })
  }
  }

  deleteTodo(index, e) {

    const lists = Object.assign([], this.state.list);
    lists.splice(index, 1);
    this.setState({
      list: lists
    })

  }
  update(e) {
    let items = this.state;
    items.list[items.currentInd] = items.inputVal
    this.setState({
      inputVal: '',
      list: items.list,
      currentInd: -1,
      editMode: false,
      class: 'None',
      classtodo: 'block',
    })

    
  }
  Edit(index, e) {
    const lists = Object.assign([], this.state.list);
    this.setState({
      editMode: true,
      currentInd: index,
      inputVal: lists[index],
      classtodo: 'None',
      class: 'block',
    }, console.log(this.state))
  }
  
  render() {

    
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
          <div className='full-page'>
          <TextField
            id="Add to Todo"
            label="Add to Todo"
            onChange={(e) => this.changeInputValue(e.target.value)}
            value={this.state.inputVal}
            style = {{width: 500}}
          />
          <Button variant="fab" color="primary" mini aria-label="Add" className={this.state.classtodo} onClick={() => this.addtoList(this.state.inputVal)}>
            <AddIcon />
          </Button>
          <Button variant="fab" color="primary" mini aria-label="Update" className={this.state.classtodo} onClick={this.update.bind(this)} className={this.state.class}>
            <UpdateIcon />
          </Button>
          <br /><br /><br />  

        </div>
        <div>
          <div className='div'>
            {this.state.list.map((val, index) => <span key={index}>{index + 1}. &nbsp;&nbsp;&nbsp;{val} &nbsp;&nbsp;&nbsp;<Button aria-label="Delete" onClick={this.deleteTodo.bind(this, index)}>
              <DeleteIcon />
            </Button>
              &nbsp;&nbsp;
        <Button variant="fab" color="secondary" mini aria-label="Edit" onClick={this.Edit.bind(this, index)}  >
                <EditIcon />
              </Button></span>)}
             
          </div> 
        </div>
      </div>
</div>
    )
  }
}


export default Todo