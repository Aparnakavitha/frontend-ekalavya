
import React from 'react';
import EventMenus from './EventMenus';

export default {
  title: 'Layouts/StudentEvents',
  component: EventMenus,
};

const explore = {
  content: "Explore Event",
  variant: "secondary",
  onClick: () => {
    console.log("clicked");
  },
  width: "half",
};

const Template = (args) => <EventMenus {...args} />;

export const Default = Template.bind({});
Default.args = {
  explore: explore,
};
