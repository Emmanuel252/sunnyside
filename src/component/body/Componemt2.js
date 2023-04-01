import React from 'react';
import './Componemt2.css';

const Componemt2 = () => {
  return (
    <>
      <section className="seconde">
        <div className="Graphic">
          <FirstComponent
            title="Graphic Design"
            text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          />
        </div>

        <div className="Photogrphy">
          <FirstComponent
            title="Photography"
            text=" Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          />
        </div>
      </section>
    </>
  );
};

const FirstComponent = props => {
  const { title, text } = props;
  return (
    <div className="read">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Componemt2;
