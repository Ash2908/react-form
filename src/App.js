import './App.css';
import {Switch, Route} from 'react-router-dom';
// import { render } from '@testing-library/react';
import ShiftForm from './shift-form.component';
import ShiftsPage from './shiftspage.component';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/react-form' component={ShiftForm} />
      <Route exact path='/shifts' component={ShiftsPage} />
      </Switch>
    </div>
  );
}

export default App;

  /* <button onClick={()=>props.history.push('/shifts')}>Submit</button> */