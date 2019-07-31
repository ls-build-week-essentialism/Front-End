import React from "react";
import { Button, Card } from "semantic-ui-react";

function ActivityCard({ activity }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{activity}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="blue">
            Edit
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ActivityCard;
