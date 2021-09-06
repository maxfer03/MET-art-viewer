import React, { useEffect } from "react";
import store from "./redux/store/store";
import { Provider, useDispatch } from "react-redux";
import { Main } from "./views/Main";
import { Detail } from "./views/Detail";
import { getArt, getDepts } from "./redux/actions/actions";
import { Route } from "react-router";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepts());
    dispatch(getArt());
  }, []);

  return (
    // <Provider store={store}>
    <div className="App">
      <Route path = "/" component = {NavBar} />
      <Route exact path="/" render = {() => <Detail/>} />
      <Route exact path="/" render = {() => <Main/>} />
      {/* <Route
        exact
        path="/id/:id"
        render={({ match }) => <Detail artId={match.params.id} />}
      /> */}
    </div>
    // </Provider>
  );
}

export default App;
