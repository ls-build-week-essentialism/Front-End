import React from "react";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ActivityCard({ activity }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{activity.activity}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/activity/edit/${activity.id}`}>
          <Button basic color="blue">
            Edit
          </Button>
        </Link>
        <Button basic color="red">
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
}

export default ActivityCard;
