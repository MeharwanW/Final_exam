import React from 'react'
import "./services.css"
import imgs4 from "./../assets/images/4.svg"
import imgs5 from "./../assets/images/5.svg"
import imgs6 from "./../assets/images/6.svg"
import imgs7 from "./../assets/images/7.svg"

export const Services = () => {
  return (
    <div class="parent-div">
    <div class="child-div">
    <div class="icon"><img src={imgs4} alt="" /></div>
      <div class="name">Free Shipping</div>
      <div class="description">Track your data with powerful analytics tools.</div>
  
    </div>
    <div class="child-div">
    <div class="icon"><img src={imgs5} alt="" /></div>
      <div class="name">SUPPORT 24/7</div>
      <div class="description">Track your data with powerful analytics tools.</div>
  
    
    </div>
    <div class="child-div">
    <div class="icon"><img src={imgs6} alt="" /></div>
      <div class="name">30 DAYS RETURN</div>
      <div class="description">Track your data with powerful analytics tools.</div>
  
    </div>
    <div class="child-div">
    <div class="icon"><img src={imgs7} alt="" /></div>
      <div class="name">100% PAYMENT SECURE</div>
      <div class="description">Track your data with powerful analytics tools.</div>
  
    
    </div>
  </div>
  )
}
