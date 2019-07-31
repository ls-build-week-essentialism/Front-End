import React, { useState } from "react";
import { Button, List, Form } from "semantic-ui-react";
import "../../src/ValueSelectorForm.scss";

//constructor function for a list of items with an "Add" button
//onClick
const UserValueCard = (value) => (
    <List celled>
        <List.Item>
            <List.Content >
              <h5>{value}</h5>      
            </List.Content>
        </List.Item>
    </List>
)

export default UserValueCard;