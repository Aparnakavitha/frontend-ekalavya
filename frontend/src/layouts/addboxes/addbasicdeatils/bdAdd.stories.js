import React from 'react';
import BdAdd from './bdAdd';

export default {
  title: 'Layouts/Edit Basic Details ', 
  component: BdAdd, 
};

const Template = (args) => <BdAdd {...args} />;

export const EditBasicDetails = Template.bind({});
EditBasicDetails.args = {}; 
