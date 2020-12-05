import React from "react";
const Add = (props) => {
  return (
    <div className="Add">
      <div className="pb-3">
        <input
          type="text"
          className="form-control mb-2"
          onChange={props.changed}
          value={props.after}
        />
        <button
          id="AddBtn"
          className="btn btn-secondary btn-block text-center m-auto"
          onClick={props.click}
        >
          Add
        </button>
      </div>
      {props.output.map((element) => {
        if (!element.editing) {
          return (
            <div class="container">
              <div className="m-auto">
                <div className="pb-2">
                  <ul class="list-group mb-2">
                    <li class="list-group-item text-center">
                      {element.name}
                    </li>
                  
                  </ul>

                  <div className="container mb-2">
                    <div className="row text-center m-auto">
                      <button
                        className="btn btn-warning btn-block text-center m-auto"
                        id="AltBtnEdit"
                        onClick={() => props.editClick(element.id)}
                      >
                        {element.status}
                      </button>
                      <button
                        className="btn btn-danger btn-block text-center m-auto"
                        id="AltBtn"
                        onClick={() => props.delete(element.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div class="container">
              <div className="m-auto pb-2">
                <input
                  className="form-control mb-2"
                  value={element.name}
                  onChange={(e) => props.editInput(element.id, e)}
                  type="text"
                />
                <div className="container mb-2">
                  <div className="row">
                    <button
                      className="btn btn-warning btn-block m-auto"
                      id="AltBtnEdit"
                      name="task"
                      onClick={() => props.saveInput(element.id)}
                    >
                      {element.status}
                    </button>
                    <button
                      className="btn btn-danger btn-block m-auto"
                      id="AltBtn"
                      onClick={() => props.delete(element.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Add;
