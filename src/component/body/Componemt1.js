import React from 'react';
import './Componemt1.css';
import Img1 from '../img/image-transform.jpg';
import Img2 from '../img/image-stand-out.jpg';
import Button from './button';
// import Image from 'react'

const FirstPart = {
  title: 'Tranform Your Brands',
  text: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most  of the marketing for you',
  img: Img1,
};

const SecondPart = {
  title: 'Stand out to the right audience',
  text: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
  img: Img2,
};

const Componemt1 = () => {
  return (
    <>
      <div className="first">
        <FirstCom
          title={FirstPart.title}
          text={FirstPart.text}
          img={FirstPart.img}
        />
      </div>

      <div className=" first viva">
        <FirstCom
          title={SecondPart.title}
          text={SecondPart.text}
          img={SecondPart.img}
        />
      </div>
    </>
  );
};

const FirstCom = props => {
  const { title, text, img } = props;
  return (
    <>
      <div className="branding">
        <h1>{title}</h1>
        <p>{text}</p>
        <Button />
      </div>
      <span className="img-branding">
        <img src={img} alt="Premiere image" />
      </span>
    </>
  );
};

export default Componemt1;
