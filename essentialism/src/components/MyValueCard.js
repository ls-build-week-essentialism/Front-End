import React, { useState } from "react";
import { Button, List} from "semantic-ui-react";
import "../../src/ValueSelectorForm.scss";


function MyValueCard(props) {
    return(
        <div id={props.id}>
            <h4>{props.value}</h4>
            <Button onClick={event => {
                props.removeValue(props.id)
            }}
             >
                Remove Value
            </Button>
        </div>
    )
}

export default MyValueCard;