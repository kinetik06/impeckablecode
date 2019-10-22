import React, { Component } from 'react';
import contactinfo from './SourceData';
import './Contact.css';



export default function Portfolio(props) {


        
        
        return (
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact-body">
                    {contactinfo.data.contactinfo.map((contact) => 
                        <a href={contact.url}><div className="contact-info">
                            <div className="contact-info-title">
                            {contact.name}
                            </div>
                            <div className="contact-info-body">
                                {contact.text}
                            </div>
                        </div></a>
                        
                        )}
                </div>

            </div>
        )
    }



