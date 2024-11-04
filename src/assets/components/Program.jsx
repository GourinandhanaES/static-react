import React from 'react';
import './Program.css';

const Program = () => {
  return (
    <div className="membership-table" id='programs'>
      <h1 className="membership-title">MEMBERSHIP</h1>
      <div className="membership-columns">
        <div className="column">
          <img className="col" src="https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64b53e20d9b2e5aedfdd6265_price-black.svg" alt="" />
          <div className="text-content">
            <h2 className='text'>[1]</h2>
            <h2 className='text'>MIDDLE</h2>
            
            <ul className='ul1'>
              <li className='li1'>+ Gym without trainer</li>
              <li className='li1'>+ Unlimited access</li>
              <li className='li1'>+ Access to all clubs</li>
            </ul>
            
            <div className="price-button-row">
              <p className="price"><span className='spann'>$50/</span>month</p>  
              <button className="buy-button">BUY[+]</button>
            </div>
          </div>
        </div>
        <div className="column">
          <img className="col" src="https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64b53e20d9b2e5aedfdd6265_price-black.svg" alt="" />
          <div className="text-content">
            <h2 className='text'>[2]</h2>
            <h2 className='text'>SUPER</h2>
            
            <ul className='ul2'>
              <li className='li1'>+Gym without trainer</li>  
              <li className='li1'>+Unlimited access</li>  
              <li className='li1'>+Access to all clubs</li>  
              <li className='li1'>+Training for some classes</li>
            </ul>
            
            <div className="price-button-row">
              <p className="price"><span className='spann'>$90/</span>month</p>  
              <button className="buy-button">BUY[+]</button>
            </div>
          </div>
        </div>
        <div className="column">
          <img className="col" src="https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64b54ab450159407ea5c5aae_price-white.svg" alt="" />
          <div className="text-content1">
            <h2 className='text1'>[3]</h2>
            <h2 className='text1'>ALL INCLUSIVE</h2>
            
            <ul className='ul3'>
              <li className='li2'>+ Gym without trainer</li>
              <li className='li2'>+ Unlimited access</li>
              <li className='li2'>+ Access to all clubs</li>
              <li className='li2'>+ Training for some classes</li>
            </ul>
            
            <div className="price-button-row">
              <p className="price1"><span className='spann1'>$120/</span>month</p>  
              <button className="buy-button1">BUY[+]</button>
            </div>
          </div>
        </div>
        <div className="column">
          <img className="col" src="https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64b53e20d9b2e5aedfdd6265_price-black.svg" alt="" />
          <div className="text-content">
            <h2 className='text'>[4]</h2>
            <h2 className='text'>EXCLUSIVE</h2>
            
            <ul className='ul2'>
              <li className='li1'>+ Gym without trainer</li>
              <li className='li1'>+ Unlimited access</li>
              <li className='li1'>+ Access to all clubs</li>
              <li className='li1'>+ Exclusive studios</li>
            </ul>
            
            <div className="price-button-row">
              <p className="price"><span className='spann'>$150/</span>month</p>  
              <button className="buy-button2">BUY[+]</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
  

