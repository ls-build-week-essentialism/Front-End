import React, { useState } from "react";
import { Button, List, Form } from "semantic-ui-react";
import "../../src/ValueSelectorForm.scss";

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