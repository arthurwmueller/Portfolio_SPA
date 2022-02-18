import React from "react";

class Countdown extends React.Component{

    render() {
        return(
            <div>
                <card className="card mx-auto">
                    <h3>Countdown</h3>
                </card>
                <card className="card mx-auto">
                    <p>
                        Sorry, the countdown feature is not yet available. However I did hardcode this text in here to tell you that the Daytona 500 is this Sunday at 2:30pm ET, so I guess do the math yourself?
                    </p>
                </card>
            </div>
        )
    }
}

export default Countdown;