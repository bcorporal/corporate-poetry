
import React from 'react'
import './Services.css'




const Services = () => {
   
    return (
      <div className='services' id='services'>
      <div className='container'>
      <h2>Packages</h2>
      <span className='line'></span>
      <div class="wrapper">


      <div class="card">
        <div class="card-banner">
          <p class="plan-tag">starter</p>
          <div class="plan-price">
            <h2 class="price">FREE</h2>
            <p class="price-month"></p>
          </div>
        </div>
        <div class="card-body">
          <h3 class="plan-name">Consultation</h3>
          <ul class="plan-feature-list">
            <li class="plan-feature">30 minutes</li>
            <li class="plan-feature">Talk about goals</li>
            <li class="plan-feature"></li>
          </ul>
          <button class="btn">Schedule Consultation</button>
        </div>

      </div>

      <div class="card">
        <div class="card-banner">
          <p class="plan-tag highlight">STANDARD</p>
          <div class="plan-price">
            <h2 class="price">250</h2>
            <p class="price-month"></p>
          </div>
        </div>
        <div class="card-body">
          <h3 class="plan-name">professional</h3>
          <ul class="plan-feature-list">
            <li class="plan-feature">Professional Resume</li>
            <li class="plan-feature">Cover Letter</li>
            <li class="plan-feature"></li>
          </ul>
          <button class="btn">Schedule Consultation</button>
        </div>

      </div>

      <div class="card">
        <div class="card-banner">
          <p class="plan-tag">premium</p>
          <div class="plan-price">
            <h2 class="price">500</h2>
            <p class="price-month"></p>
          </div>
        </div>
        <div class="card-body">
          <h3 class="plan-name">business</h3>
          <ul class="plan-feature-list">
            <li class="plan-feature">Resume</li>
            <li class="plan-feature">Cover Letter</li>
            <li class="plan-feature">Mock Interview</li>
            <li class="plan-feature">LinkedIn</li>
            <li class="plan-feature">Indeed</li>
            <li class="plan-feature">Editable</li>
            <li class="plan-feature">7 Day Delivery</li>
          </ul>
          <button class="btn">Schedule Consultation</button>
        </div>

      </div>
    
  </div>
    </div>
    </div>
      )
    }
    

export default Services