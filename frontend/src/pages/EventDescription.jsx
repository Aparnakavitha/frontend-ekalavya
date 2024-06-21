import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeEventDescription from "../layouts/home-event-description/components/HomeEventDescription";
import Header from "../layouts/home/components/Header";
import Button from "../components/buttons/PrimaryButton";
import edunexa from "../assets/edunexa.png";
import Footer from "../layouts/common/components/Footer";
import { fetchEventsService } from "../services/Event";
import { getUserDetails } from "../services/User"; // Import the getUserDetails function

const EventDescription = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [organizer, setOrganizer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await fetchEventsService({ eventId });
        const event = response[0]; // Assuming the response is an array, and we need the first item
        setEventData(event);

        if (event && event.hostId) {
          const organizerResponse = await getUserDetails({ userId: event.hostId });
          const organizerData = organizerResponse.responseData[0];
          setOrganizer(organizerData);
        }

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
            <HomeEventDescription event={eventData} organizer={organizer} />
          )}
        </div>
        <Footer {...footerdata} />
      </div>
    </div>
  );
};

export default EventDescription;
