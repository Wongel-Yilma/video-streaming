import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import StreamDetails from "./streams/StreamDetails";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import reducers from "./reducers";


const store = createStore(reducers);

const App = () => {
  return (
    <Provider store ={store}>
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/details" exaact component={StreamDetails} />
        </div>
      </BrowserRouter>
    </div>
    </Provider>
  );
};

export default App;

//409349205445-isu7beu8dv5lqvb7ctr2n0pseh4846tk.apps.googleusercontent.com