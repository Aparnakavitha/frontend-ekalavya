import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeEventDescription from "../layouts/home-event-description/components/HomeEventDescription";
import Header from "../layouts/home/components/Header";
import Button from "../components/buttons/PrimaryButton";
import edunexa from "../assets/edunexa.png";
import Footer from "../layouts/common/components/Footer";
import { fetchEventsService } from "../services/Event";

const EventDescription = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await fetchEventsService({ eventId });
        setEventData(response[0]); // Assuming the response is an array, and we need the first item
        setLoading(false);
      } catch (error) {
        console.log("Error fetching event:", error);
        setLoading(false);
      }
    };

    getEvent();
  }, [eventId]);

  const sample = {
    content: "Login",
    variant: "primary",
    onClick: () => {
      console.log("Button clicked");
    },
    width: "full",
  };

  const headdata = {
    menuItems: [],
    imageSrc: edunexa,
    button: <Button {...sample} />,
  };

  const footerdata = {
    Logo: edunexa,
    quoteContent: "Embark on Your Learning Journey Today!",
    copyrightContent: "All rights reserved © 2024 Tarento Group.",
    copyrightContent2: " | Privacy Policy",
    isLeftALigned: false,
  };

  return (
    <div>
      <Header {...headdata} />
      <div className="spacebtw">
        <div className="padding public common">
          {loading ? (
            <p>Loading event details...</p>
          ) : (
            <HomeEventDescription event={eventData} />
          )}
        </div>
        <Footer {...footerdata} />
      </div>
    </div>
  );
};

export default EventDescription;
