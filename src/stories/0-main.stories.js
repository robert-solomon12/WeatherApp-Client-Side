import React from 'react';
import App from '../App';

export default {
    title: 'Weather Storybook',
  };
  
  export const toStorybook = () => <App />
  
  toStorybook.story = {
    name: 'to Storybook',
  };