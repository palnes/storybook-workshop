import React from 'react';
import { Card, CardMedia, CardHeader, CardMain, CardFooter } from './Card';
import styles from './Card.module.css';

export default {
  title: 'Components/Card',
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const Full = Template.bind({});
Full.args = {
  children: [
    <>
      <CardMedia imageURL="http://placekitten.com/650/249" />
      <CardHeader title="Dark And Stormy" subTitle="Darkier and stormier!" />
      <CardMain>
        <p>
          There once was 8 people in a room. It was a gloomy and wet day
          outside. Wet enough to fill the water reserves in Oslo. After a long
          day <a href="#">Egill</a> decided to open a window to let some fresh
          air in. Little did he know that the wind was picking up and as Olivia
          went to close it, the wind picked her up and through her out of the
          window! Thank goodness Yesi was quick to her feet and ran down to
          catch her just in time to prevent Olivias face to hit the pavement.
        </p>
        <p>
          Sounds come from above. Sudden streams of baked good were now flying
          out of the window. Was it the wind? Minutes later Isabella showed up
          in the window, laughing and pointing as the croissant hit the ground.
          Luckily Pål knew what to do and picked Vando up by his feet and used
          him as a fishing nett to catch the baked good while still in the air.
          Saving the workshop from hunger and anger.
        </p>
      </CardMain>
      <CardFooter>
        <button className={styles.button}>CLICK ME!</button>
        <button className={styles.button}>CLICK ME TWICE!</button>
      </CardFooter>
    </>,
  ],
};

export const Simple = Template.bind({});
Simple.args = {
  children: [
    <>
      <CardHeader title="Dark And Stormy" subTitle="Darkier and stormier!" />
      <CardMain>
        <p>
          There once was 8 people in a room. It was a gloomy and wet day
          outside. Wet enough to fill the water reserves in Oslo. After a long
          day <a href="#">Egill</a> decided to open a window to let some fresh
          air in. Little did he know that the wind was picking up and as Olivia
          went to close it, the wind picked her up and through her out of the
          window! Thank goodness Yesi was quick to her feet and ran down to
          catch her just in time to prevent Olivias face to hit the pavement.
        </p>
        <p>
          Sounds come from above. Sudden streams of baked good were now flying
          out of the window. Was it the wind? Minutes later Isabella showed up
          in the window, laughing and pointing as the croissant hit the ground.
          Luckily Pål knew what to do and picked Vando up by his feet and used
          him as a fishing nett to catch the baked good while still in the air.
          Saving the workshop from hunger and anger.
        </p>
      </CardMain>
    </>,
  ],
};

export const ImageCaption = Template.bind({});
ImageCaption.args = {
  children: [
    <>
      <CardMedia imageURL="http://placekitten.com/650/249" />
      <CardMain>
        <p>
          There once was 8 people in a room. It was a gloomy and wet day
          outside. Wet enough to fill the water reserves in Oslo. After a long
          day <a href="#">Egill</a> decided to open a window to let some fresh
          air in. Little did he know that the wind was picking up and as Olivia
          went to close it, the wind picked her up and through her out of the
          window! Thank goodness Yesi was quick to her feet and ran down to
          catch her just in time to prevent Olivias face to hit the pavement.
        </p>
        <p>
          Sounds come from above. Sudden streams of baked good were now flying
          out of the window. Was it the wind? Minutes later Isabella showed up
          in the window, laughing and pointing as the croissant hit the ground.
          Luckily Pål knew what to do and picked Vando up by his feet and used
          him as a fishing nett to catch the baked good while still in the air.
          Saving the workshop from hunger and anger.
        </p>
      </CardMain>
    </>,
  ],
};
