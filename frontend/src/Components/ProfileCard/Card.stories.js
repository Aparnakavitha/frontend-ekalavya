// Card.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions'; 
import Card from './Card';
//import profileImage from '.../images/profile.jpeg';

export default {
  title: 'Components/ProfileCard',
  component: Card,
};

export const Default = (args) => <Card {...args} onClick={action('clicked')} />;

Default.args = {
  //profileImage: profileImage,
  title1: "John Doe",
  title2: "Senior Software Engineer",
  title3: "San Francisco, USA",
  email: "johndoe@email.com",
  phone: "(555) 555-5555"
};
