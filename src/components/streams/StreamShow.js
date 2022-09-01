import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../actions";
import flv from "flv.js";
import streamReducer from "../reducers/streamReducer";

const StreamShow = (props) => {
  const videoRef = React.createRef();
  const id = props.match.params.id;
  console.log(props);
  let player;
  const buildPlayer = () => {
    if (player || !props.stream) return;
    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
  };
  useEffect(() => {
    props.fetchStream(id);
  }, []);
  useEffect(() => {
    buildPlayer();
    console.log(videoRef);
    return () => {
      player.destroy();
    };
  }, [props.stream]);

  if (!props.stream) {
    return <div>Loading...</div>;
  } else {
    const { title, description } = props.stream;
    return (
      <div>
        <video ref={videoRef} style={{ width: "100%" }} controls />
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
