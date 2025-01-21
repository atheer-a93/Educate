import React from 'react';
import { PiBuildingFill } from 'react-icons/pi';
import "./Logo.css"
const Logo = () => {
  return (
    <div className='logo'>
      <div className="icon__container">
        <PiBuildingFill />
      </div>
      <h1 className="name">Edu<span>cate</span></h1>
    </div>
  );
};

export default Logo;