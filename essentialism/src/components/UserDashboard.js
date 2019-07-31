import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MainDashboard from './MainDashboard';
import ValueDashboard from './ValueDashboard';
import ActivitiesDashboard from './ActivitiesDashboard';


function UserDashboard() {
  
  return(
    <section className="dashboard-container">
      <div className="dashboard-nav-bar">
        <Link to="/userDashboard">Main Dashboard</Link>
        <Link to="/valueDashboard">My Values</Link>
        <Link to="/activitiesDashboard">My Activites</Link>
      </div>
      <Switch>
        <Route path="/dashboard" exact component={MainDashboard}/>
        <Route path="/valueDashboard" component={ValueDashboard}/>
        <Route path="/activitiesDashboard" component={ActivitiesDashboard}/>
      </Switch>
    </section>
  );
}

export default UserDashboard;