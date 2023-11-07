import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return(
            <div class="contact-container">
               <h1>Contact Us</h1>
                <div class="text">
                    <p>Thank you for your interest in Know Your Neighbourhood! 
                    New growth and connections between people are two of the core principles that make up our identity at KYN.
                    </p>
                </div>  

                <div class="form">
                    <p>Email: kyn@gmail.com</p>
                    <p>Phone: +959 7678689799</p>
                    <p>Address: 123 Main Street, Mandalay, Myanmar</p>
                </div>              
           </div>
        )
    }
}
export default Contact