import React, { useState } from "react";
import ActivityForm from "./ActivityForm";
import ActivityCard from "./ActivityCard";
import { Route, Link } from "react-router-dom";
import { List, Button } from "semantic-ui-react";
import "../../src/activity.scss";

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
    console.log(activitiesCopy);
    const oldIndex = activitiesCopy.findIndex(
      activity => activity.id === deleteActivity.id
    );
    console.log("deleteActivity", deleteActivity, "OldIndex", oldIndex);

    const removed = activitiesCopy.splice(oldIndex, 1);
    console.log("activitiesCopy", activitiesCopy, "removed", removed);
    setActivities(activitiesCopy);
  };

  return (
    <div>
      <div className="value-selector-header">
        <h2>Let's take a look at the activities you do</h2>
        <p>please add as many as your routine activities as you'd like</p>
      </div>
      <section className="activity-screen-container">
        <div className="activityLink">
          <Link to="/activity/add">
            <Button color="teal">Add Activity</Button>
          </Link>
        </div>
        <Route
          exact
          path="/activity"
          render={props =>
            activities.map(activity => (
              <section className="activity-list">
                <List>
                  <ActivityCard
                    key={activity.id}
                    activity={activity}
                    deleteActivity={deleteActivity}
                  />
                </List>
              </section>
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
      </section>
    </div>
  );
}

export default ActivityDisplay;
