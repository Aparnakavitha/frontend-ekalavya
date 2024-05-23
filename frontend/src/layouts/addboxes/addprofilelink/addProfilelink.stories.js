// src/stories/BdAdd.stories.js

import React from 'react';
import AddProfilelink from './addProfilelink';

// Default export to define metadata about the component
export default {
  title: 'Layouts/Add Profile Link ', // Title of your component in Storybook
  component: AddProfilelink, // The component you want to showcase
};

// Define a default story for your component
const Template = (args) => <AddProfilelink {...args} />;

export const AddProfileLink = Template.bind({});
AddProfileLink.args = {}; // You can define default props here if needed
