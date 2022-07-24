import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home/Home';
import Delete from './components/Delete/Delete';
import { Userprovider } from './components/Usercontext/Usercontext';
import Read from './components/Read/Read';
// import NotFound from './components/NotFound/NotFound';
import Create from './Create/Create';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <Userprovider>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/Create/">
              <Create />
            </Route>
            <Route path="/Read/:id">
              <Read />
            </Route>
            <Route path="/Edit/:id">
              <Edit />
            </Route>
            <Route path="/Delete/:id">
              <Delete />
            </Route>
            <Route exact path="/Home/">
              <Home />
            </Route>
            {/* <Route path="*">
              <NotFound />
            </Route> */}
          </Routes>
        </Router>
      </div>
    </Userprovider>
  );
}

export default App;
