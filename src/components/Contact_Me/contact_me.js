import React from 'react';
import './contact_me.scss';
import Section_Heading from '../Section_Heading/section_heading';

const ContactMe = () => {
    return (
        <div className="contact-me">
            <Section_Heading title="Contact Me" />
            <div className='contact-form-container'>
                <form className='contact-form' >{/* action="https://formspree.io/f/xnqoqzqz" method="POST"> */}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder='This will help me reply to you message' required />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder='What would you like to discuss?' required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>    
    );
};

export default ContactMe;