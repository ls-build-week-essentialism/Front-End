<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivityCard from "./ActivityCard";
import UserValueCard from "./UserValueCard";
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';

>>>>>>> d328f1c4c5e367c9e61b00b968065797771daf0f

function UserDashboard(props) {
  const [myActivities, setMyActivities] = useState([]);
  const [myValues, setmyValues] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    axios
      .get(
        `https://only-essential.herokuapp.com/api/projects/${
          props.location.state.id
        }`
      )
      .then(res => {
        setMyActivities(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://only-essential.herokuapp.com/api/createdvalues/${
          props.location.state.id
        }`
      )
      .then(res => {
        console.log(res);
        setmyValues(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="dashboard-container">
      {myActivities.map((activity, key) => (
        <ActivityCard key={key} activity={activity.project_name} />
      ))}
      {/* {myValues.map((value, key) => <UserValueCard key={key} value={value.created_value_name}/>)} */}
=======
  let sampleValues = "a";
  
  axios.post(`https://only-essential.herokuapp.com/api/createdvalues/${props.location.state.id}`, sampleValues)
  .then(res => {
    console.log(res);
  })
  
  useEffect(() => {
    axios.get(`https://only-essential.herokuapp.com/api/projects/${props.location.state.id}`)
    .then(res => {
      console.log("activites api: ", res)
      setMyActivities(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  
  useEffect(() => {
    axios.get(`https://only-essential.herokuapp.com/api/createdvalues/${props.location.state.id}`)
    .then(res => {
      console.log("values api: ", res);
      setmyValues(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  
  return(
    <section className="dashboard-container">
      {/* {myActivities.map((activity, key) => <ActivityCard key={key} activity={activity.project_name}/>)} */}
      {myValues.map(value => 
        <div>
          <h5>{value}</h5>
        </div>
      )};
>>>>>>> d328f1c4c5e367c9e61b00b968065797771daf0f
    </section>
  );
}

export default UserDashboard;
