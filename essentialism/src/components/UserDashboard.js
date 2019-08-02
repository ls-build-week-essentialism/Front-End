import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UserDashboard(props) {
  const [myActivities, setMyActivities] = useState([]);
  const [myValues, setmyValues] = useState([]);
  
  useEffect(() => {
    axios.get(`https://only-essential.herokuapp.com/api/projects/${props.location.state.id}`)
    .then(res => {
      setMyActivities(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  
  useEffect(() => {
    axios.get(`https://only-essential.herokuapp.com/api/createdvalues/${props.location.state.id}`)
    .then(res => {
      console.log(res);
      setmyValues(res.data)
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
    </section>
  );
}

export default UserDashboard;