import React, { Component } from 'react';

import jsonResponse from './SourceData'

class GetResume extends Component {
    constructor(props){
        super(props);
        this.state = {
            jsonResponse: jsonResponse
        };
    }

   
    render() {
        const {jsonResponse} = this.state;
        
        return(
            <div>
                <h1>{jsonResponse.data.person.f_name + ' ' + jsonResponse.data.person.l_name}</h1>
                
            </div>
        );
    }
}
export default GetResume;