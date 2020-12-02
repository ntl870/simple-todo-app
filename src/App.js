import "./App.css";
import { Component } from "react";
import Add from "./AddComponent/Add";
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
      task: [...this.state.task, { id: id, name: name }],
      input: "",
    });
  };

  deleteTask = (deleteTaskId) => {
    this.setState({
      task: this.state.task.filter((item) => item.id !== deleteTaskId),
    });
  };

  editTask(name, id) {
    this.setState({
      task: [
        this.state.task.filter((item) => item.id !== id),
        { id: id, name: name},
      ],
    });
  }

  dataChanged(data) {
    // data = { description: "New validated text comes here" }
    // Update your model from here
    console.log(data)
    this.setState({...data})
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
          edit={this.dataChanged}
        />
      </div>
    );
  }
}

export default App;
