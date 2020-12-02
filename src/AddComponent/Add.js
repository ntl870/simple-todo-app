import React from "react";
const Add = (props) => {
  return (
    <div className="Add">
      <input type="text" onChange={props.changed} value={props.after} />
      <button onClick={props.click}>Add</button>
      {props.output.map((element) => {
        return (
          <div class="container">
            <div className="m-auto">
              <input value={element.name} type="text"/>
              <button className="btn btn-success">
              Edit</button>
              <button
                className="btn btn-danger"
                onClick={() => props.delete(element.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Add;
