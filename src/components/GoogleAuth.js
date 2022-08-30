import React from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";
// import { GoolgeLogin } from "react-google-login";
const client_id =
  "637032358404-ijjvts1e0d874p174o98rkkp3k92f7oe.apps.googleusercontent.com";
class GoogleAuth extends React.Component {
  //   state = { isSignedIn: null, user: {} };
  handleCallbackResponse = (response) => {
    console.log("Encoded JWR ID token:", response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject.sub);
    this.setState({ user: userObject, isSignedIn: true });
    document.getElementById("signInDiv").hidden = true;
    this.onAuthChange(userObject.sub);
  };
  handleSignout = () => {
    this.setState({ user: {} });
    document.getElementById("signInDiv").hidden = false;
    this.onAuthChange();
  };
  onAuthChange = (userId) => {
    if (!this.props.isSignedIn) this.props.signIn(userId);
    else this.props.signOut();
  };
  componentDidMount() {
    window.google.accounts.id.initialize({
      client_id: client_id,
      callback: this.handleCallbackResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }
  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={(e) => this.handleSignout(e)}
        >
          Sign out
        </button>
      );
    } else {
      return;
    }
  }
  render() {
    return (
      <div>
        {this.renderAuthButton()}

        <div id="signInDiv">Sign In</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
//Object.keys(this.state.user).length != 0
