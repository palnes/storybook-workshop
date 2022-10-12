import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const Simple = Template.bind({});
Simple.args = {
  children: (
    <>
      Magna occaecat consectetur consectetur eiusmod dolor quis non est laborum.
      Exercitation magna commodo id magna est nostrud occaecat minim sit culpa
      ex nulla.
    </>
  ),
};
