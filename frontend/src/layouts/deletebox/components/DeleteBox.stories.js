
import React from 'react';
import DeleteBox from './DeleteBox';

export default {
  title: 'Layouts/DeleteBox',
  component: DeleteBox,
};

const Template = (args) => <DeleteBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Confirmation Required',
  message: 'Are you sure you want to remove this task?',
  buttonText: 'Confirm',
};
