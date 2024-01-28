import axios from "axios";
import AddBook from "./AddBook";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Display from "./Display";

function App() {
  axios.defaults.baseURL = "http://localhost:4040/";
  axios.defaults.withCredentials = true;

  return (
    <Router>
      <Routes>
      <Route 
      exact path="/"
      element = {<Display />}
      />
      <Route 
      exact path="/addBook"
      element = {<AddBook />}
      />
      </Routes>
    </Router>
  );
}

export default App;
