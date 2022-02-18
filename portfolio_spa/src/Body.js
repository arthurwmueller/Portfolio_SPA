import React, {useState, Component} from 'react';
import Countdown from './Countdown';
import FAQ from './FAQ';
import Font from './Font';
import IcedCoffee from './IcedCoffee';
import Movies from './Movies';
import Sports from './Sports';


function Body(props){

    

    if(props.view==="Font"){
    return (
        <Font font={props.font}/>
    )} else if(props.view==="Sports"){
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
    } else if(props.view==="IcedCoffee"){
        return(
            <IcedCoffee/>
        )
    } else if(props.view==="FAQ"){
        return(
            <FAQ/>
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