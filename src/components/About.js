import React from 'react'
import john from './images/john-doe2.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>I love helping my clients level up in their careers. More about you what and how goes here</p>
                    <p>I am Dominique Corporal, CEO of Corporate Poetry LLC.</p>
                    <button className='button'>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default About
