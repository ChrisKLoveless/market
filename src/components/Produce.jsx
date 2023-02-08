import React from "react";
import PropTypes from "prop-types";


function Produce(props) {
  return (
    <React.Fragment>
        <h3>{props.month}</h3>
        {props.selection.map((produce) => 
          <p>{produce}</p>
        )}
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default Produce;