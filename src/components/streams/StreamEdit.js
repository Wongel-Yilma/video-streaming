import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, updateRecord } from "../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  const onSubmit = (formValues) => {};

  console.log(props);
  return props.stream ? (
    <div>
      <h3>Edit A Stream</h3>
      <StreamForm initialValues={props.stream} onSubmit={onSubmit} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

const mapStateToProps = (state, { match }) => {
  return { stream: state.streams[match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, updateRecord })(
  StreamEdit
);
