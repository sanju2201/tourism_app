import React from 'react'
import './gridCard.scss'
const GridCard = () => {
  return (
    <div className="image-grid">
    <div className="image">
      <img src="https://images.unsplash.com/photo-1519922639192-e73293ca430e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image 1" />
    </div>
    <div className="image">
      <img src="https://images.unsplash.com/photo-1565523925028-812f891b0e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJpc218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 2" />
    </div>
    <div className="image">
      <img src="https://images.unsplash.com/photo-1524467128837-00f6644866d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvdXJpc218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Image 3" />
    </div>
    <div className="image">
      <img src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image 4" />
    </div>
  </div>
  )
}

export default GridCard