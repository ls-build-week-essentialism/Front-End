import React from 'react';
import { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";


const defaultValues = ["Athletic Ability", "Art & Literature", "Creativity, discovering, or inventing things", "Independence", "Kindness and generosity", "Living in the moment", "Membership in a social group (e.g., your community, racial group, or school club)", "Music", "My community", "My moral principles", "Nature and the environment", "Relationships with friends and family", "Sense of humor", "Success in my career"];

function ValueSelectorForm() {
  // const [myValues, setMyValues] = useState[[]];


  return (
    
    <section className="value-selector-container">
      <h3>What is most important to you?</h3>
      {/* defaultValues.map() */}
    </section>
  );
}

export default ValueSelectorForm;