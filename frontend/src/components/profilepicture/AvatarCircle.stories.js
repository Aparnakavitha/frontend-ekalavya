import React from 'react';
import { AvatarCircleGroup } from './AvatarCircle';
 
export default {
  title: 'Components/AvatarCircleGroup',
  component: AvatarCircleGroup,
};
 
const avatars = [
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/16860528',
    
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/20110627',
   
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/106103625',
    
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/59228569',
   
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/59442788',
 
  },
  {
    imageUrl: 'https://avatars.githubusercontent.com/u/89768406',
    
  },
];
 
const Template = (args) => <AvatarCircleGroup {...args} />;
 
export const Default = Template.bind({});
Default.args = {
  avatarUrls: avatars,
  size: 50,
  maxVisible: 4,
};