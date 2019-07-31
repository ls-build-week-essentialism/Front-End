import React, { useState } from "react";
import ActivityForm from "./ActivityForm";
import ActivityCard from "./ActivityCard";
import { Route, Link } from "react-router-dom";

function ActivityDisplay() {
  const [activities, setActivities] = useState([]);

  const addActivity = activity => {
    setActivities([...activities, { ...activity, id: Date.now() }]);
  };

  const editActivity = editedActivity => {
    const activitiesCopy = [...activities];

    const oldActivity = activitiesCopy.find(
      activity => activity.id === editedActivity.id
    );

    //console.log("editedActivity", editedActivity, "OldActivity", oldActivity);
    oldActivity.activity = editedActivity.activity;
    //Object.assign(oldActivity, editActivity);
    setActivities(activitiesCopy);
  };

  const deleteActivity = deleteActivity => {
    const activitiesCopy = [...activities];
    const oldIndex = activitiesCopy.findIndex(
      activity => activity.id === deleteActivity.id
    );
    console.log("deleteActivity", deleteActivity, "OldActivity", oldIndex);

    const removed = activitiesCopy.splice(oldIndex);
    setActivities(removed);
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
          activities.map(activity => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              delete={deleteActivity}
            />
          ))
        }
      />
      <Route
        path="/activity/add"
        render={props => (
          <ActivityForm
            {...props}
            submitActivity={addActivity}
            buttonText="Add Activity"
          />
        )}
      />
      <Route
        path="/activity/edit/:id"
        render={props => {
          const activity = activities.find(
            activity => activity.id.toString() === props.match.params.id
          );
          return (
            <ActivityForm
              {...props}
              initialActivity={activity}
              submitActivity={editActivity}
              buttonText="Edit Activity"
            />
          );
        }}
      />
    </div>
  );
}

export default ActivityDisplay;
