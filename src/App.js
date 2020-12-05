import "./App.css";
import { Component } from "react";
import Add from "./AddComponent/Add";
import React from "react";
import "./AddComponent/Add.css";

class App extends Component {
  id = 0;
  state = {
    task: [],
  };

  inputChangeHandler = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  inputAddHandler = (id, name) => {
    id = this.state.task.length;
    this.setState({
      task: [
        ...this.state.task,
        {
          id: id,
          name: name,
          editing: false,
          buttonStyle: "btn btn-warning",
          status: "Edit",
        },
      ],
      input: "",
    });
  };

  deleteTask = (deleteTaskId) => {
    this.setState({
      ...this.state,
      task: this.state.task.filter((item) => item.id !== deleteTaskId),
    });
  };

  editTaskClick = (editTaskId) => {
    let temp = this.state.task;
    if (temp[editTaskId].editing) {
      temp[editTaskId].editing = false;
      temp[editTaskId].buttonStyle = "btn btn-warning";
      temp[editTaskId].status = "Edit";
      this.setState({
        task: temp,
      });
    } else {
      temp[editTaskId].editing = true;
      temp[editTaskId].buttonStyle = "btn btn-success";
      temp[editTaskId].status = "Save";
      this.setState({
        task: temp,
      });
    }
  };


  editInput = (id,e) => {
    let temp = this.state.task;
    temp[id].name = e.target.value;
    this.setState({
      task:temp
    });
  };

  saveTaskClick = (id) => {
    let temp = this.state.task;
    temp[id].editing = false;
    temp[id].buttonStyle = "btn btn-warning";
    temp[id].status = "Edit";
    this.setState({
      task: temp
    })
  }

  render() {
    console.log(this.state.task);
    return (
      <div className="App">
        <h1>To-do App</h1>
        <Add
          changed={this.inputChangeHandler}
          click={() => this.inputAddHandler(this.id, this.state.input)}
          after={this.state.input}
          output={this.state.task}
          delete={this.deleteTask}
          editClick={this.editTaskClick}
          editInput={this.editInput}
          saveInput={this.saveTaskClick}
          getName={this.getName}
          state={this.state.task}
        />
      </div>
    );
  }
}

export default App;
