import React, { Component } from 'react';
import skills from './SourceData';
import './Skills.css';



export default function Skills(props) {


        
        
        return (
            <div className="skills">
                <div className="skills-header">
                    <h1>Languages and Skills</h1>
                </div>
                
                <div className="skills-body"> 
                    {skills.data.skills.map((skill) => 
                        <div className='skills-title'>
                        
                            <h2>{skill.name}</h2>
                            <p>{skill.description}</p>

                        </div>)}            
                
                </div>
            </div>
        )
    }



