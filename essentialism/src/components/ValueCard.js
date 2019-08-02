import React from "react";
import { List } from "semantic-ui-react";

const ValueCard = (value) => (
    <List celled>
        <List.Item>
            <List.Content >
              <h5>{value}</h5>      
            </List.Content>
        </List.Item>
    </List>
)

export default ValueCard;