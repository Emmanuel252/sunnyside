import React from 'react';
import ReactDOM from 'react-dom/client';
import Componemt1 from './component/body/Componemt1';
import Componemt2 from './component/body/Componemt2';
import Component3 from './component/body/Component3';
import Component4 from './component/body/Component4';
import Footer from './component/footer/Footer';
import Header from './component/Head/Header';
import './index.css';

const Site = () => {
  return (
    <>
      <Header />
      <Componemt1 />
      <Componemt2 />
      <Component3 />
      <Component4 />
      <Footer />
    </>
  );
};

// function Greeting() {
//   return React.createElement('h2', {}, 'hello word')
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Site />);
