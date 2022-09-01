import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";

import Modal from "../Modal";
import { fetchStream, deleteStream } from "../actions";

const StreamDelete = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    console.log(id);
    props.fetchStream(id);
  }, []);
  const actions = (
    <React.Fragment>
      <button
        onClick={() => props.deleteStream(id)}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button ">
        Cancel
      </Link>
    </React.Fragment>
  );
  const renderContent = () => {
    if (!props.stream) return "Are you sure you want to delete this stream?";
    else
      return `Are you sure you want to delete the stream titled "${props.stream.title}"?`;
  };
  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
