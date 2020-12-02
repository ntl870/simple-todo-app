import React from "react";

const Activities = (props) => { 
    props.output.map((element) => {
      return (
        <div>
          <h1>{element.name}</h1>
          <button onClick={props.delete}>delete</button>
        </div>
      );
    });
};

export default Activities;
