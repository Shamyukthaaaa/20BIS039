import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

const App = () => {
  return (
<Router>
<div>
<nav>
<ul>
<li>
<Link to="/">All Trains</Link>
</li>
<li>
<Link to="/train/1">Train 1</Link>
</li>
</ul>
</nav>

<Switch>
<Route exact path="/">
<AllTrainsPage />
</Route>
<Route path="/train/:id">
<SingleTrainPage />
</Route>
</Switch>
</div>
</Router>
  );
};

export default App;