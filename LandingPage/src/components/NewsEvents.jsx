import React from "react";
import { Container, Card, Image } from "semantic-ui-react";
import Event1 from "./images/Event1.png";
import Event2 from "./images/Event2.png";
import Event3 from "./images/Event3.png";
import "./NewsEvents.css"; // Ensure this file exists

const NewsEvents = () => {
  const events = [
    {
      id: 1,
      title: "The Need For Transitional Coverage For Emerging Technologies (TCET)",
      img: Event1,
    },
    {
      id: 2,
      title: "Annual Alumni Day Fest 2024",
      img: Event2,
    },
    {
      id: 3,
      title: "Photography and Invention Of Nationhood 1851-1900 [Virtual]",
      img: Event3,
    },
  ];

  return (
    <Container className="news-events">
      <h2 className="section-title">News And Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <Card key={event.id} className="event-card">
            <Image src={event.img} alt={event.title} className="event-img" />
            <Card.Content>
              <Card.Description>{event.title}</Card.Description>
              <a href="#" className="view-link">View all</a>
            </Card.Content>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default NewsEvents;