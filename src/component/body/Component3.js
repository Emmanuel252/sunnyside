import React from 'react';
import './Component3.css';
import Person1 from '../img/image-emily.jpg';
import Person2 from '../img/image-jennie.jpg';
import Person3 from '../img/image-thomas.jpg';

const post1 = {
  picture: Person1,
  nom: ' Emily R.',
  fonction: 'Marketing Director',
  comment:
    'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
};
const post2 = {
  picture: Person3,
  nom: ' Thomas S..',
  fonction: ' Chief Operating Officer',
  comment:
    'Sunnyside’s enthusiasm coupled with their keen interest in our  brand’s success made it a satisfying and enjoyable experience.',
};
const post3 = {
  picture: Person2,
  nom: ' Jennie F.',
  fonction: 'Business Owner',
  comment:
    'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
};

const Component3 = () => {
  return (
    <section>
      <div className="difficulte">
        <h1 className="point">Clients Testemonials</h1>
        <div className="discours">
          <Fonction
            picture={post1.picture}
            comment={post1.comment}
            nom={post1.nom}
            fonction={post1.fonction}
          />
          <Fonction
            picture={post2.picture}
            comment={post2.comment}
            nom={post2.nom}
            fonction={post2.fonction}
          />
          <Fonction
            picture={post3.picture}
            comment={post3.comment}
            nom={post3.nom}
            fonction={post3.fonction}
          />
        </div>
      </div>
    </section>
  );
};

const Fonction = props => {
  const { picture, comment, nom, fonction } = props;
  return (
    <div className="discours3 comment">
      <div className="picture">
        <img src={picture} classnName="I_function" alt="Director" />
      </div>
      <div className="P_text">{comment}</div>
      <div className="P_name">
        <span className="nom"> {nom}</span>
        <br />
        <span className="post">{fonction}</span>
      </div>
    </div>
  );
};

export default Component3;
