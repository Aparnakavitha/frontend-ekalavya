// src/stories/BdAdd.stories.js

import React from 'react';
import BdAdd from './bdAdd';

// Default export to define metadata about the component
export default {
  title: 'Layouts/Edit Basic Details ', // Title of your component in Storybook
  component: BdAdd, // The component you want to showcase
};

// Define a default story for your component
const Template = (args) => <BdAdd {...args} />;

export const EditBasicDetails = Template.bind({});
EditBasicDetails.args = {}; // You can define default props here if needed
