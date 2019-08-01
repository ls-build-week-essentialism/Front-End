import React from 'react';
import { useState, useEffect } from "react";
import { Button, Form} from "semantic-ui-react";
import ValueCard from "./ValueCard";
import MyValueCard from "./MyValueCard";
import "../../src/ValueSelectorForm.scss";

const defaultValues = ["Athletic Ability", "Art & Literature", "Being creative/inventing new things", "Independence", "Kindness and generosity", "Living in the moment", "Membership in a social group", "Music", "Improving my community", "My moral principles", "Nature and the environment", "Relationships with friends and family", "Sense of humor", "Success in my career"];

function ValueSelectorForm() {
  const [userValue, setUserValue] = useState("Enter new value here")
  const [myValues, setMyValues] = useState([]);

  function handleValSubmit(value) {
    // event.preventDefault();
    // console.log(event.target.value);
    setMyValues([...myValues, userValue])
    setUserValue("")
  }

  const removeValue = (id) => {
    const valIndex = myValues.indexOf(id)
    myValues.splice(valIndex,1)
    console.log(myValues)
    setMyValues([...myValues]);
  }

  const confirmValues = () => {
    if (myValues.length > 3) {
      alert("Too many values!")
      console.log(myValues.length)
    } 
  }

  return (
    <div>
      <div className="value-selector-header">
          <h2>What is most important to you?</h2>
          <p>Select values that are important to you, or create your own below</p> 
      </div>
      <section className="value-selector-container">
        <div className="value-selector-list">
          <div className="user-input-value">
            <Form onSubmit={handleValSubmit} className="create-values">
              <Form.Field>  
                <h3>Add Your Own Values</h3>
                <input  
                  // name="myValue"
                  onChange={event => setUserValue(event.target.value)}
                  value={userValue}
                />
                <Button type="submit">Add to My Values</Button>
              </Form.Field>
            </Form>
          </div>

          {/* //handles user created values and passes them via handleValSubmit */}
          <div className="default-values">
            <div  className="default-values">
              <h3>Choose a value</h3>        
              {defaultValues.map(defValue => (
                <div className="value-card">
                  <div>{ValueCard(defValue)}</div>
                  <div className="button-container">
                    <button onClick={ () => setMyValues([...myValues, defValue])} > Add to My Values </button>
                  </div>
                </div>
              ))}
            </div>
          </div>   
        </div> 

      {/* Builds 'My Values' list with user inputs and selected default values. If myValues is empty, returns "Add values from the list..." */}
        <div className="my-values-container">
          <div className="my-values-header">
              <h3>My Values</h3>
          </div>
          <div className="my-values-list">
            { myValues.length > 0 ? (
              <div className="my-values">
                <div>
                  {myValues.map(userValue => (
                    <div className="value-card">
                      <MyValueCard
                        id={userValue}
                        key={userValue}
                        value={userValue}
                        removeValue={removeValue}
                       />
                      {/* <button onClick={removeValue}>Remove from My Values</button> */}
                    </div>
                  ))}
                </div>
              </div>  
            ) : (
              <div>
                <p>Add values from the list or create your own</p>
              </div>
              )
            }
          </div>  
        </div>

        <div>
          <Button onClick={confirmValues}>Confirm My Values</Button>
        </div>

      </section>
    </div>
  );
}

export default ValueSelectorForm;