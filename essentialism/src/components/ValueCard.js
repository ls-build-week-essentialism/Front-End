import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";


const ValueCard = () => (
    <div className="valueCard-container">
        <div>props</div>
        <div>
            <button>Add to My Values</button>
            <button>Edit this Value</button>
        </div>
    </div>
)

export default ValueCard;