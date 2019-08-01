import React from 'react';
import axios from 'axios';


function UserDashboard() {

  axios.get("https://only-essential.herokuapp.com/api/createdvalues/1")
  .then(res => {
    console.log(res);
  })
  
  return(
    <section className="dashboard-container">
      
    </section>
  );
}

export default UserDashboard;