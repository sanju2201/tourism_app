import React from 'react';
import './card.scss'; // Import the CSS for styling

const Card = ({ title, image }) => {
  return (
    <div className="imgaeCardContainer">
        <div className="card">
        <img className="card-image" src={image} alt={title} />
        </div>
      
      <h4 className="cardTitle">{title}</h4>
      <p className="cardContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore unde nihil ipsam nesciunt voluptatum exercitationem impedit a laborum libero ad.</p>
    </div>
  );
};

export default Card;
