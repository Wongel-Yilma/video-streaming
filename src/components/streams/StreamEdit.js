import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, updateRecord } from "../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

const StreamEdit = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.fetchStream(id);
  }, []);
  const onSubmit = (formValues) => {
    props.updateRecord(id, formValues);
  };

  console.log(props);
  return props.stream ? (
    <div>
      <h3>Edit A Stream</h3>
      <StreamForm
        initialValues={_.pick(props.stream, "title", "description")}
        onSubmit={onSubmit}
      />
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
