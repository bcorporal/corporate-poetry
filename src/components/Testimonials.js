import React from 'react'
import user1 from './images/user4.jpg'
import user2 from './images/user4.jpg'
import user3 from './images/user4.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Dominique created a resume that was much more than anything I could have ever thought to do on my own. This was money well spent!</p>
                        <p><span>Brandon C</span></p>
                        <p>Director of "USA Today"</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Dominique created a resume that was much more than anything I could have ever thought to do on my own. This was money well spent!</p>
                        <p><span>Brandon C</span></p>
                        <p>Director of "USA Today"</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Dominique created a resume that was much more than anything I could have ever thought to do on my own. This was money well spent!</p>
                        <p><span>Brandon C</span></p>
                        <p>Director of "USA Today"</p>
                    </div>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Dominique created a resume that was much more than anything I could have ever thought to do on my own. This was money well spent!</p>
                        <p><span>Brandon C</span></p>
                        <p>Director of "USA Today"</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Amazing work on my resume. Very responsive and great to work with. Delivery sooner than expected, answered my questions along the way and even gave some tips to help me build a great resume. Will use again in the future! Amazing work</p>
                        <p><span>Stephen Conway</span></p>
                        <p>Senior Engineer at Google</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Dominique was very quick and efficient at the process, asked good questions and got all of the information she needed despite me being all over the place (as my skill set is.)</p>
                        <p><span>Ebonie G.</span></p>
                        <p>Managing Director of Finance at Chase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
