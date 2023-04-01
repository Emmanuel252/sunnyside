import React from 'react';
import Img6 from '../img/image-gallery-cone.jpg';
import Img7 from '../img/image-gallery-milkbottles.jpg';
import Img8 from '../img/image-gallery-orange.jpg';
import Img9 from '../img/image-gallery-sugarcubes.jpg';
import './Component4.css';
const Component4 = () => {
  return (
    <section className="photos">
      <img src={Img6} />
      <img src={Img7} />
      <img src={Img8} />
      <img src={Img9} />
    </section>
  );
};

export default Component4;
