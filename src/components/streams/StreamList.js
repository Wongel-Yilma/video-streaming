import React from "react";
import { Link } from "react-router-dom";
import { fetchStreams } from "../actions";
import { connect } from "react-redux";

class StreamList extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchStreams();
  }
  renderAdminButtons = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    } else {
      return null;
    }
  };
  renderList() {
    return this.props.streams.map((stream) => {
      if (this.props.currentUserId === stream.userId) {
        return (
          <div className="item" key={stream.id}>
            {this.renderAdminButtons(stream)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              <Link className="header" to={`/streams/${stream.id}`}>
                {stream.title}
              </Link>
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      } else return null;
    });
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link className="ui button primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
