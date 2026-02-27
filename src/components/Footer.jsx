import React from 'react'
import footer1 from '../components/Images/footer-1.png'
import footer2 from '../components/Images/footer-2.png'
import footer3 from '../components/Images/footer-3.png'

export default function Footer() {
  return (
    <>
      <div className="footer">
          <div className="footer-items">
               <img src={footer1} alt="" />
               <h3>American Express Platinum</h3>
                <div className="icon">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
               </div>
               <p>(12) review</p>
               <div className="btn">
                    <div className="btn-1">
                         <input type="checkbox" /><span>Compare</span>
                    </div>
                    <div className="btn-2">
                         <span>Learn More</span>
                    </div>
               </div>

          </div>
          <div className="footer-items">
               <img src={footer2} alt="" />
               <h3>Amex EveryDay</h3>
                <div className="icon">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
               </div>
               <p>(233) review</p>
                <div className="btn">
                    <div className="btn-1">
                         <input type="checkbox" /><span>Compare</span>
                    </div>
                    <div className="btn-2">
                         <span>Learn More</span>
                    </div>
               </div>

          </div>
          <div className="footer-items">
               <img src={footer3} alt="" />
               <h3>Chase Hayat</h3>
               <div className="icon">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
               </div>
               <p>(142) review</p>
                <div className="btn">
                    <div className="btn-1">
                         <input type="checkbox" /><span>Compare</span>
                    </div>
                    <div className="btn-2">
                         <span>Learn More</span>
                    </div>
               </div>

          </div>


      </div>
    </>
  )
}
