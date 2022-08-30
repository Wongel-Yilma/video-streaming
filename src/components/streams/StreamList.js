import React from "react";
import { Link } from "react-router-dom";

const StreamList = () => {
  return (
    <div>
      StreamList
      <Link to="/streams/details"> Go to the streaming Details</Link>
    </div>
  );
};

export default StreamList;
