import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

function ActivityForm(props) {
  //console.log("props form", props);
  const { submitActivity, initialActivity, buttonText, history } = props;
  const [actions, setActions] = useState(
    initialActivity || { id: "", activity: "" }
  );

  function handleSubmit(event) {
    event.preventDefault();
    submitActivity(actions);
    setActions({ activity: "", id: "" });
    history.push("/activity");
  }

  function handleChange(event) {
    setActions({ ...actions, [event.target.name]: event.target.value });
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
          value={actions.activity}
        />
      </Form.Field>
      <Button type="submit">{buttonText}</Button>
    </Form>
  );
}

export default ActivityForm;
