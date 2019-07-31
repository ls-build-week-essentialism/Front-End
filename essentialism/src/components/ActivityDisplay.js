import React, { useState } from "react";
import ActivityForm from "./ActivityForm";
import ActivityCard from "./ActivityCard";
import { Route, Link } from "react-router-dom";

function ActivityDisplay() {
  const [activities, setActivities] = useState([]);

  const addActivity = activity => {
    setActivities([...activities, { ...activity, id: Date.now() }]);
  };

  return (
    <div className="activities">
      <div className="activityLink">
        <Link to="/activity">Activity List</Link>
        <Link to="/activity/add">Add Activity</Link>
      </div>
      <Route
        exact
        path="/activity"
        render={props =>
          activities.map(activity => <ActivityCard activity={activity} />)
        }
      />
      <Route
        path="/activity/add"
        render={props => (
          <ActivityForm {...props} submitActivity={addActivity} />
        )}
      />
      <Route
        path="/activity/edit/:id"
        render={props => {
          const activity = activities.find(
            activity => activity.id.toString() === props.match.params.id
          );
          return <ActivityForm {...props} initialActivity={activity} />;
        }}
      />
    </div>
  );
}

export default ActivityDisplay;
