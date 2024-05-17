import React from 'react';
import NavButton from './navbutton';

// Meta information for the story
export default {
    title: 'NavButton', // Title of the component/category
    component: NavButton, // Component to be displayed
    argTypes: {
        onClick: { action: 'clicked' }, // Action for the onClick event
    },
};

// Template for the story
const Template = (args) => < NavButton {...args }
/>;

// Default story
export const Default = Template.bind({});
Default.args = {
    pageName: 'Home',
};