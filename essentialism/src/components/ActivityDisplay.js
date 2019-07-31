import React, { useState } from "react";
import ActivityForm from "./ActivityForm";
import ActivityCard from "./ActivityCard";

function ActivityDisplay() {
  const [activities, setActivities] = useState(["play video games", "jogging"]);

  const addActivity = activity => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="activities">
      <ActivityForm submitActivity={addActivity} />
      {activities.map(activity => (
        <ActivityCard activity={activity} />
      ))}
    </div>
  );
}

export default ActivityDisplay;
