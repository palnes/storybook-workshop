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
      Bacon ipsum dolor amet chislic venison filet mignon tenderloin beef ribs andouille chicken buffalo sausage ham hock alcatra hamburger kielbasa. Meatloaf rump frankfurter, swine jowl andouille hamburger turducken meatball. Leberkas turducken salami shank, pork loin venison tongue strip steak pork belly cow biltong shankle. Tenderloin pork loin chuck, kevin jowl turducken doner shankle rump t-bone spare ribs porchetta short loin buffalo. Salami kevin shoulder andouille burgdoggen pork. Shoulder drumstick doner, rump spare ribs pork belly kevin porchetta tenderloin. Kielbasa capicola corned beef picanha bresaola pork chislic.
    </>
  ),
};
