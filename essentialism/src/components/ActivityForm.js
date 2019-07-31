import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function ActivityForm() {
  const [activities, setActivities] = useState([]);
  const [actions, setActions] = useState("hiking");
  //setActivities([...activities, activity]);

  //   function addActivities(activity) {
  //     setActivities([...activities, activity]);
  //   }

  function handleSubmit(event) {
    event.preventDefault();
    setActivities([...activities, actions]);
    setActions("");
  }

  console.log(activities);

  return (
    <div className="activityContainer">
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Tell us about your activities: </label>
            <input
              name="activity"
              onChange={event => setActions(event.target.value)}
              style={{ width: "80%" }}
              value={actions}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      <div className="activity_display">
        {activities.map(activity => {
          return <div>{activity}</div>;
        })}
      </div>
    </div>
  );
}

export default ActivityForm;
