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
                <h4>{element.name}</h4>

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
                  onChange={(e)=>props.editInput(element.id,e)}
                  type="text"
                />

                <button
                  className={element.buttonStyle} name="task"
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
