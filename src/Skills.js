import React, { Component } from 'react'
import skills from './SourceData'
import './Skills.css'



export default class Skills extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             skills: skills,
        }
    }
    
    getSkills = () => {
        console.log(this.state.skills.data.skills.length);
        for (let index = 0; index < this.state.skills.data.skills.length; index++) {
            const element = this.state.skills.data.skills[index];
            console.log(element);
            
        }
        console.log("get skills fired");
        
        
    }
    render() {
        const skills = this.getSkills();
        console.log(skills);
        return (
            <div className='skills-header'>
                <h1>Languages and Skills</h1>
            </div>
            
        )
    }
}


