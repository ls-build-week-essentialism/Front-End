import React, { useState } from "react";
import { Button, List} from "semantic-ui-react";
import "../../src/ValueSelectorForm.scss";

//generates cards for My Values vis props from ValueSelectorForm.js
function MyValueCard(props) {
    return(
        <div id={props.id} className="my-value-card">
            <h4>{props.value}</h4>
            <button class="ui compact red button" onClick={event => {
                props.removeValue(props.id)
            }}
             >
                Remove Value
            </button>
        </div>
    )
}

export default MyValueCard;