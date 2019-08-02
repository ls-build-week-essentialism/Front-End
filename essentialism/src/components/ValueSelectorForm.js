import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import ValueCard from "./ValueCard";
import MyValueCard from "./MyValueCard";
import { Route, Redirect, Link } from "react-router-dom";
import "../../src/ValueSelectorForm.scss";

const defaultValues = [
  "Athletic Ability",
  "Art & Literature",
  "Being creative/inventing new things",
  "Independence",
  "Kindness and generosity",
  "Living in the moment",
  "Membership in a social group",
  "Music",
  "Improving my community",
  "My moral principles",
  "Nature and the environment",
  "Relationships with friends and family",
  "Sense of humor",
  "Success in my career"
];

function ValueSelectorForm() {
  const [userValue, setUserValue] = useState("");
  const [myValues, setMyValues] = useState([]);

  function handleValSubmit(value) {
    setMyValues([...myValues, userValue]);
    setUserValue("");
  }

  const removeValue = id => {
    const valIndex = myValues.indexOf(id);
    myValues.splice(valIndex, 1);
    setMyValues([...myValues]);
  };

  const confirmValues = myValues.length > 0 && myValues.length <= 3;
  const canAddValue = userValue.length > 0;

  return (
    <div>
      <div className="value-selector-header">
        <h2>What is most important to you?</h2>
        <p>
          The first step in essentialism is to identify those things that are
          most important to you. While you may find several of these resonate
          with you, essentialism requires that we begin with an intentionally
          narrow focus.
        </p>
        <h3>SELECT NO MORE THAN THREE(3) VALUES</h3>
        <p>Select values that are important to you, or create your own below</p>
      </div>
      <section className="value-selector-container">
        <div className="value-selector-list">
          <div className="user-input-value">
            <Form onSubmit={handleValSubmit} className="create-values">
              <Form.Field>
                <h3>Add Your Own Values</h3>
                <input
                  placeholder={"Add you own values here"}
                  onChange={event => setUserValue(event.target.value)}
                  value={userValue}
                />
                <button
                  disabled={!canAddValue}
                  class="medium blue ui button"
                  type="submit"
                >
                  Add to My Values
                </button>
              </Form.Field>
            </Form>
          </div>

          {/* //handles user created values and passes them via handleValSubmit */}
          <div className="default-values">
            <div className="default-values">
              <h3>Choose a value</h3>
              {defaultValues.map(defValue => (
                <div className="value-card">
                  <div>{ValueCard(defValue)}</div>
                  <div className="button-container">
                    <button
                      class="small gray ui button"
                      onClick={() => setMyValues([...myValues, defValue])}
                    >
                      {" "}
                      Add to My Values{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Builds 'My Values' list with user inputs and selected default values. If myValues is empty, returns "Add values from the list..." */}
        <div className="my-values-container">
          {/* <div className="my-values-header">
          </div> */}
          <div className="my-values-list">
            <h2>My Values</h2>
            {myValues.length > 0 ? (
              <div className="my-values">
                {myValues.map(userValue => (
                  <div className="value-card">
                    <MyValueCard
                      id={userValue}
                      key={userValue}
                      value={userValue}
                      removeValue={removeValue}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h4>Add values from the list or create your own</h4>
              </div>
            )}
          </div>
        </div>
        <div className="confirm-values">
          <button
            disabled={!confirmValues}
            class="massive fluid yellow ui button"
          >
            {" "}
            <Link to="/activity">Confirm My Values</Link>
          </button>
        </div>
        )
      </section>
    </div>
  );
}

export default ValueSelectorForm;
