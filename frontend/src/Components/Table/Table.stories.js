import React from 'react';
import Tablecomponent from './Table';

export default {
  title: 'Table',
  component: Tablecomponent,
};

const Template = (args) => <Tablecomponent {...args} />;

const data = [
  ['John', 'Samual', 30],
  ['Jane', 'Smith', 25],
  ['Alice', 'Mary', 28],
  ['Meera', 'Davis', 23],
  ['boby', 'Smith', 25],
  ['Kevin', 'Joy', 27],
  ['Amal', 'Wilson', 24],
];

const headings = ['First Name', 'Last Name', 'Age',];

export const WithDataAndHeadings = Template.bind({});
WithDataAndHeadings.args = {
  data,
  headings,
};
