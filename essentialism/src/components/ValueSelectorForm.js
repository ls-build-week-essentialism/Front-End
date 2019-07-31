import React from 'react';
import { useState, useEffect } from "react";
import { Button, Checkbox, Form, List } from "semantic-ui-react";
import ValueCard from "./ValueCard"
import "../../src/ValueSelectorForm.scss"

const defaultValues = ["Athletic Ability", "Art & Literature", "Being creative/inventing new things", "Independence", "Kindness and generosity", "Living in the moment", "Membership in a social group", "Music", "Improving my community", "My moral principles", "Nature and the environment", "Relationships with friends and family", "Sense of humor", "Success in my career"];

function ValueSelectorForm() {
  const [myValues, setMyValues] = useState([]);
  const [userValue, setUserValue] = useState("Enter new value here")

  function handleValSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    setMyValues([...myValues, userValue])
    setUserValue("Enter new value here")
  }

  function handleDefaultSubmit(event) {
    event.preventDefault();
    setMyValues([...myValues, event.target.value])
  }

  return (
    <div>
      <div className="value-selector-header">
          <h2>What is most important to you?</h2>
          <p>Select values that are important to you, or create your own below</p> 
      </div>
      <section className="value-selector-container">
        <div className="value-selector-list">
          <Form onSubmit={handleValSubmit} className="create-values">
            <Form.Field>  
              <h3>Add Your Own Values</h3>
              <input  
                name="myValue"
                onChange={event => setUserValue(event.target.value)}
                value={userValue}
              />
              <Button type="submit">Add to My Values</Button>
            </Form.Field>
          </Form>
          
          <div className="default-values">
            <Form onSubmit={handleDefaultSubmit} className="default-values">
              <h3>Choose a value</h3>                
              {defaultValues.map(value => (
                <div className="value-card">
                  <div>{ValueCard(value)}</div>
                  <div className="button-container">
                    <Button  onClick={ () => 
                      setMyValues([...myValues, value])
                    }
                    >Add to My Values</Button>
                  </div>
                </div>
              ))}
            </Form>
          </div>   
        </div> 
        <div className="my-values">
          <h3>My Values</h3>
          <div>
            {myValues.map(userValue => (
              <div>
                {ValueCard(userValue)}
              </div>
            ))}
            <Button>Confirm My Values</Button>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ValueSelectorForm;