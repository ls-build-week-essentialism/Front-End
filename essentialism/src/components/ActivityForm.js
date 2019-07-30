import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function ActivityForm() {
  const [activity, setActivity] = useState({ Activity: "jogging" });
  return (
    <Form>
      <Form.Field>
        <label>Tell us about your activity: </label>
        <input />
      </Form.Field>
    </Form>
  );
}

export default ActivityForm;
