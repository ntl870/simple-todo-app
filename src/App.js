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

  inputAddHandler = (name) => {
    this.id++;
    if (this.state.input === "") {
      this.setState({
        task: [],
      })
    } else {
      this.setState({
        task: [
          ...this.state.task,
          {
            id: this.id,
            name: name,
            editing: false,
            buttonStyle: "btn btn-warning btn-block m-auto",
            status: "Edit",
          },
        ],
        input: "",
      });
    }
  };

  deleteTask = (deleteTaskId) => {
    this.setState({
      ...this.state,
      task: this.state.task.filter((item) => item.id !== deleteTaskId),
    });
  };

  editTaskClick = (editTaskId) => {
    let temp = this.state.task;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].editing) {
        if (temp[i].id === editTaskId) {
          temp[i].editing = false;
          temp[i].buttonStyle = "btn btn-warning btn-block m-auto";
          temp[i].status = "Edit";
        }
        this.setState({
          task: temp,
        });
      } else {
        if (temp[i].id === editTaskId) {
          temp[i].editing = true;
          temp[i].buttonStyle = "btn btn-success btn-block mr-2 text-center mx-auto";
          temp[i].status = "Save";
        }
        this.setState({
          task: temp,
        });
      }
    }
  };

  editInput = (id, e) => {
    let temp = this.state.task;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i].name = e.target.value;
        this.setState({
          task: temp,
        });
      }
    }
  };

  saveTaskClick = (id) => {
    let temp = this.state.task;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i].editing = false;
        temp[i].buttonStyle = "btn btn-warning btn-block m-auto";
        temp[i].status = "Edit";
        this.setState({
          task: temp,
        });
      }
    }
  };

  render() {
    console.log(this.state.task);
    return (
      <div className="App container my-5">
        <h1 class="mb-3">Simple React To-do App</h1>
        <Add
          changed={this.inputChangeHandler}
          click={() => this.inputAddHandler(this.state.input)}
          after={this.state.input}
          output={this.state.task}
          delete={this.deleteTask}
          editClick={this.editTaskClick}
          editInput={this.editInput}
          saveInput={this.saveTaskClick}
          state={this.state.task}
        />
      </div>
    );
  }
}

export default App;
