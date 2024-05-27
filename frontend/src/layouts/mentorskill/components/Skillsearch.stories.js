import React from 'react';
import Skillsearch from './Skillsearch';

export default {
  title: 'layouts/Skillsearch',
  component: Skillsearch,
};

const Template = (args) => <Skillsearch {...args} />;

export const Default = Template.bind({});
Default.args = {};
