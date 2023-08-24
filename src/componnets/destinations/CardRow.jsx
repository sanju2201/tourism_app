import React from 'react';
import Card from './Card';
import './cardRow.scss'; // Import the CSS for styling

const CardRow = () => {
  return (
    <div className="card-row">
      <div className="card-connector" />
      <Card
        title="UNIQUE TOURS"
        image="https://images.unsplash.com/photo-1543458104-7d567484d770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZWwlNUN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className="card-connector" />
      <Card
        title="GLOBAL PRESENCE"
        image="https://images.unsplash.com/photo-1580715911453-d6d9cffd5771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className="card-connector" />
      <Card
        title="25 YEARS OF EXPERIENCE"
        image="https://images.unsplash.com/photo-1661608579516-b162a1eec95e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
         <div className="card-connector" />
    </div>
  );
};

export default CardRow;
