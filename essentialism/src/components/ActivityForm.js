import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

function ActivityForm(props) {
  const { submitActivity } = props;
  const [actions, setActions] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    submitActivity(actions);
    setActions("");
  }

  function handleChange(event) {
    setActions(event.target.value);
  }

  //console.log(activities);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Tell us about your activities: </label>
        <input
          name="activity"
          onChange={handleChange}
          style={{ width: "80%" }}
          value={actions}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ActivityForm;
