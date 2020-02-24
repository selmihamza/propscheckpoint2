import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {
  Profile.defaultProps = {
    fullname: "ahmed ben ahmed",
    bio: "bla bla blabla bla bla",
    profession: "footballeur"
  };
  Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
  };

  return (
    <div>
      {console.log(props.children)}
      {props.children}
    </div>
  );
}
