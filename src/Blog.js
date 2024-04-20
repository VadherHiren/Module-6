import React from 'react'
import Navbar1 from './Navbar1.js'
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Blog() {

  const handleOnDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  const items = [
    <div className="item" data-value="1" onDragStart={handleOnDragStart}>
      <img src="cat-1.png" alt="" />
            <p>Fruits 01</p>
            <p>1 items</p>
    </div>,
    <div className="item" data-value="2">
      <img src="cat-1.png" alt="" />
    </div>,
    <div className="item" data-value="3">
      <img src="cat-1.png" alt="" />
    </div>,
    <div className="item" data-value="4">
      <img src="cat-1.png" alt="" />
    </div>,
    <div className="item" data-value="5">
      <img src="cat-1.png" alt="" />
    </div>,
  ];

  
  return (
    <div>
      <Navbar1></Navbar1>
      Blog
    <AliceCarousel
      mouseTracking
      disableDotsControls
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
    </div>
  )
}

export default Blog
