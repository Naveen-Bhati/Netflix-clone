import React, { Component } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Accounts from "./Accounts";
import Preloader from "./Preloader";

class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  };
  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <Preloader />
        ) : (
          <Router>
            <Switch>
              <Route path="/accounts">
                {" "}
                <Accounts user_name="naveen" />{" "}
              </Route>
              <Route path="/">
                <Nav />
                <Banner />
                <Row
                  title="NETFLIX ORIGINALS"
                  fetchUrl={requests.fetchNetflixOriginals}
                  isLargeRow={true}
                />

                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <Row
                  title="Comedy Movies"
                  fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                  title="Horror Movies"
                  fetchUrl={requests.fetchHorrorMovies}
                />
                <Row
                  title="Romance Movies"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                  title="Documentaries"
                  fetchUrl={requests.fetchDocumentaries}
                />
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

export default App;
