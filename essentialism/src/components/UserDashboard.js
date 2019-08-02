import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../src/App.scss";

function DisplayList(props) {
  const { display, icon } = props;

  return (
    <List.Item>
      <List.Icon name={icon} />
      <List.Content>{display}</List.Content>
    </List.Item>
  );
}

function UserDashboard(props) {
  const [myActivities, setMyActivities] = useState([]);
  const [myValues, setmyValues] = useState([]);
  // let sampleValues = "a";

  // axios
  //   .post(
  //     `https://only-essential.herokuapp.com/api/createdvalues/${
  //       props.location.state.id
  //     }`,
  //     sampleValues
  //   )
  //   .then(res => {
  //     console.log(res);
  //   });

  useEffect(() => {
    axios
      .get(
        `https://only-essential.herokuapp.com/api/projects/${
          props.location.state.id
        }`
      )
      .then(res => {
        console.log("activites api: ", res);
        setMyActivities(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.location.state.id]);

  useEffect(() => {
    axios
      .get(
        `https://only-essential.herokuapp.com/api/createdvalues/${
          props.location.state.id
        }`
      )
      .then(res => {
        console.log("values api: ", res.data);
        setmyValues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.location.state.id]);

  return (
    <section className="dashboard-container">
      <div className="activityDashboard">
        <h1>Values</h1>
        {myValues.map((value, index) => {
          console.log("value", value.created_value_name);
          return (
            <div key={index}>
              <DisplayList display={value.created_value_name} icon={"star"} />
            </div>
          );
        })}
        <Button compact>
          <Link to="/value">view Value</Link>
        </Button>
      </div>
      <div className="valueDashboard">
        <h1>Activity</h1>
        {myActivities.map((activity, index) => (
          <DisplayList
            key={index}
            display={activity.project_name}
            icon={"check"}
          />
        ))}

        <Button compact>
          <Link to="/activity">view activity</Link>
        </Button>
      </div>
    </section>
  );
}

export default UserDashboard;
