import React from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EventsDescription } from '../../common';

const HomeEventDescription = () => {
  const handleButtonClick = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const homeEvents = {
    heading: "Exploring Future Technologies",
    text: "Techtalks",
    texts: "Offline",
    desc: "TechTalks 2024 is a full-day event dedicated to exploring emerging technologies and their impact on various industries. Join us for insightful talks, engaging discussions, and networking opportunities with experts in the field.",
    date: "April 10th, 2024",
    time: "10:00 AM - 4:00 PM",
    venue: "Auditorium 101, Engineering Building",
    address: "123 University Ave, Cityville, State, Zip",
    speaker: "Sam Alex, Associate Software Engineer",
    button: "Events",
    buttons: "Exploring Future Technologies",
    small: "edit",
    medium: "delete",
    large: "view participants",
    type: "public",
    smaller: "Register",
    onclick1: () => handleButtonClick("Event registered successfully!"),
  };

  return (
    <div>
      <EventsDescription {...homeEvents} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default HomeEventDescription;
