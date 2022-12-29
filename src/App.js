// import './App.css';
import About from './components/About';
import Builds from './components/Builds';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Myinfo from './components/Myinfo'
import Footer from './components/Footer';
// import MyTeams from './components/MyTeams';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Router basename='/'>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
              <About />
              <Builds />
              <Myinfo />
              {/* <MyTeams />  */}
            </Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/myinfo"><Myinfo /></Route>
            <Route exact path="/mybuilds"><Builds /></Route>
            {/* <Route exact path="/myteam">< Myteams/></Route> */}
          </Switch>
          <Footer />
        </Router>
        {/* <Navbar />
        
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
