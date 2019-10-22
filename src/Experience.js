import React, { Component } from 'react';
import experiences from './SourceData';
import './Experience.css';



export default function Experience(props) {


        
        console.log(experiences.data.experience.length);
        return (
            <div className="experience">
                <div className="experience-header">
                    <h1>Work History</h1>
                </div>
                
                <div className="experience-body"> 
                    {experiences.data.experience.map((experience) => 
                        <div className='experience-title'>
                        
                            <h2>{experience.name}</h2>
                            <p>{experience.location}</p>
                            <ul>
                            {experience.duties.map((duty) =>
                                <div className="duties"><li>{duty}</li></div>
                                )}
                            </ul>
                        </div>)}            
                
                </div>
            </div>
        )
    }



