import React from "react";
import { Button, Card, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ActivityCard(props) {
  const { activity, deleteActivity } = props;
  console.log(props);
  return (
    <List.Item divided verticalAlign="middle">
      <List.Content floated="right">
        <Button.Group widths="5">
          <Button compact size="mini" basic color="blue" attached="left">
            <Link to={`/activity/edit/${activity.id}`}>Edit</Link>
          </Button>

          <Button
            compact
            attached="right"
            size="mini"
            basic
            color="red"
            onClick={event => {
              console.log("event activity", activity);
              deleteActivity(activity);
            }}
          >
            Delete
          </Button>
        </Button.Group>
      </List.Content>
      <List.Content size="large" className="listContent-activity">
        {activity.activity}
      </List.Content>
    </List.Item>

    // <Card>
    //   <Card.Content>
    //     <Card.Header>{activity.activity}</Card.Header>
    //   </Card.Content>
    //   <Card.Content extra>
    //     <Link to={`/activity/edit/${activity.id}`}>
    //       <Button basic color="blue">
    //         Edit
    //       </Button>
    //     </Link>
    //     <Button
    //       basic
    //       color="red"
    //       onClick={event => {
    //         console.log("event activity", activity);
    //         deleteActivity(activity);
    //       }}
    //     >
    //       Delete
    //     </Button>
    //   </Card.Content>
    // </Card>
  );
}

export default ActivityCard;
