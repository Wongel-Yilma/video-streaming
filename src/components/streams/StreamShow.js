import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";
import streamReducer from "../reducers/streamReducer";

const StreamShow = (props) => {
  const id = props.match.params.id;
  console.log(props);
  useEffect(() => {
    props.fetchStream(id);
  }, []);
  if (!props.stream) {
    return <div>Loading...</div>;
  } else {
    const { title, description } = props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
