import React from 'react';
import About from './About';
import Countdown from './Countdown';
import Font from './Font';
import Movies from './Movies';
import Sports from './Sports';


function Body(props){

    

    if(props.view==="About"){
        return(
            <About/>
        )
    } else if(props.view==="Font"){
        return (
            <Font font={props.font} changeFont={props.changeFont}/>
        )
} else if(props.view==="Sports"){
        return (
            <Sports/>
        )
    } else if(props.view==="Movies"){
        return(
            <Movies/>
        )
    } else if(props.view==="Countdown"){
        return(
            <Countdown/>
        )
    } else {
        return(
            <card className="card mx-auto">
                <h3>Please look in the navbar to find content</h3>
            </card>
        )
    };
}

export default Body;