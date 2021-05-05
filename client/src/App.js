import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Exercise from './components/Exercise';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';

function App() {
  return (
      <div className="container">
        <Router>
          <Navbar /><br/>
              <Route  path="/" exact component={Exercise} />
              <Route  path="/edit" component={EditExercise}/>
              <Route  path="/exercise" component={CreateExercise}/>
        </Router>
        
      </div>
    
  );
}

export default App;
