import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div name='contact' className='contact' id='contact'>
        <div className='container'>
        <div className='top'>
        <h1>GET IN TOUCH</h1>
        </div>
        
        <form>
        <div>
        <label>Name</label>
        <input type="text" placeholder='Enter your name' />
        </div>
        <div>
        <label>Email</label>
        <input type="text" placeholder='Enter your email' />
        </div>
        <div>
        <label>Phone</label>
        <input type="text" placeholder='Enter your phone number' />
        </div>
        <div>
        <label>Message</label>
        <textarea cols="30" rows="10"></textarea>
        </div>
        <div className='bottom'>
        <button className="btn btn-dark">Submit</button>
        </div>
    
         
        </form>
    
    
        </div>
        </div>
      )
    }
export default Contact
