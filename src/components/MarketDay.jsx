import React from "react";
import PropTypes from "prop-types";

function MarketDay(props) {
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr />
    </React.Fragment>
  );
}

MarketDay.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default MarketDay;