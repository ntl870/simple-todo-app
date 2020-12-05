import React from "react";
const Add = (props) => {
  return (
    <div className="Add">
      <input type="text" onChange={props.changed} value={props.after} />
      <button onClick={props.click}>Add</button>
      {props.output.map((element) => {
        if (!element.editing) {
          return (
            <div class="container">
              <div className="m-auto">
                <input value={element.name} type="text" name="task" />

                <button
                  className={element.buttonStyle}
                  onClick={() => props.editClick(element.id)}
                >
                  {element.status}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => props.delete(element.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div class="container">
              <div className="m-auto">
                <input
                  onChange={props.editInput}
                  type="text"
                  name="task"
                />

                <button
                  className={element.buttonStyle} 
                  onClick={() => props.saveInput(element.id)}
                >
                  {element.status}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => props.delete(element.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Add;
