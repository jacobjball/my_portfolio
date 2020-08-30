import React from 'react';
import JacobOutline from '../../images/JacobOutline.png';
import '../../index.css'

const Home = () => (
  <>
    <div class='home-text'>
      <div class='testing12'> 
          Hi, I'm Jake Ball. 
        <br/>
          I am software engineer that believes hard-work, grit, and consistency bring results. 
      </div>
      <div class="homecontent">
      <a href='/'>
            <img class='jacoboutline' src={JacobOutline}/>
          </a>
          <div class='endorsements'>
        <div class='quote1'>
          "He is continually persistent in solving and debugging coding problems and all tasks that are put before him." -Henry Doan (DevPoint Labs Instructor & Mentor)<br/><br/>
        </div>
        <div class='quote2'>
          "...wants to know how he can be better and when given feedback he's always shown progression..." -Russell Lonczyna (Manager)<br/><br/>
        </div>
        <div class='quote3'>
          "He is adaptive and flexible, but has a core focus and drive that makes Jake one of our most consistent top performers." -Kelsey Waddell (Sr Manager) <br/>
        </div>
          
      </div>
        <br/>
        <br/>
  
      </div>
    </div>
  </>
)

export default Home;