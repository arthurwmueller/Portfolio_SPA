import React from "react";

class Countdown extends React.Component{

    
    
    constructor(){
        super();
        this.state={currentDate: new Date()};
    }

    keepTime(){
        this.setState({
            currentDate:new Date()
        })
    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.keepTime(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render() {

        const events=[
            {id:1,title:"The Daytona 500",date: new Date(2022,2,20,19,30)},
            {id:2,title:"The Indianapolis 500",date:new Date(2022,5,29,15,0)}];

        const content=events.map((singleEvent)=>
        <div className="body" key={singleEvent.id}>
            <card className="card">
                <div className="card-body">
                    <p>{singleEvent.title} will happen on {singleEvent.date.toLocaleDateString()} at {singleEvent.date.toLocaleTimeString()}</p>
                    <p>Countdown Clock Goes Here</p>
                </div>
            </card>
        </div>);

        return(
            <div>
                <card className="card">
                    <h3 className="card-title">It is currently {this.state.currentDate.toLocaleTimeString()} on {this.state.currentDate.toLocaleDateString()}</h3>
                </card>
                <div>{content}</div>
            </div>
        )
    }
}

export default Countdown;