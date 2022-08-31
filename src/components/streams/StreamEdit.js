import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  console.log(props);
  return props.stream ? <div>{props.stream.title}</div> : <div>Loading...</div>;
};

const mapStateToProps = (state, { match }) => {
  return { stream: state.streams[match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
