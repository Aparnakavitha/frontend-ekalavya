import React from 'react';
import Card from './SkillCard';

export default {
  title: 'Components/SkillCard',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showCloseIcon: { control: 'boolean' },
    onClose: { action: 'Close button clicked' }, // Define action for onClose prop
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Java",
  subtitle: "Level 1",
  showCloseIcon: true,
  onClose: () => {
    // Define functionality for close icon click
    console.log("Close button clicked");
    // You can add additional functionality here
  },
};
