import React, { Component } from 'react';
import portfolios from './SourceData';
import './Portfolio.css';



export default function Portfolio(props) {


        
        
        return (
            <div className="portfolios">
                <div className="portfolios-header">
                    <h1>Portfolio</h1>
                </div>
                
                <div className="portfolios-body"> 
                    {portfolios.data.links.map((portfolio) => 
                        
                        <div className='portfolios-title'>
                        <h2>{portfolio.name}</h2>
                        <a href={portfolio.url}><img src={portfolio.img}></img></a>
                        </div>
                        
                        
                        
                        
                        )}            
                
                </div>
            </div>
        )
    }



