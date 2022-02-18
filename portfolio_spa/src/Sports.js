import React from "react";

function Sports() {
    return (
        <div>
            <card className="card mx-auto">
                <h3>Daytona 500: Who to Watch For</h3>
            </card>
            <card className="card mx-auto">
                <img className="card-img-top" src="https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/6_Keselowski_Daytona_2022_1200x520-copy-922x400.jpg"/>
                <div className="card-body">
                    <h4 className="card-title">Brad Keselowski</h4>
                    <p className="card-text">Brad Keselowski left Team Penske this offseason to join the newly renamed RFK Racing as an owner/driver. However, he is still driving a Ford, which looks to be the strongest manufacturer at the Daytona 500 this year. Keselowski won the first Duel race on Thursday night and he's a threat to win any time NASCAR visits a superspeedway.</p>
                </div>
            </card>
            <card className="card mx-auto">
                <img className="card-img-top" src="https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/34_McDowell_Daytona_2022_1200x520-copy-922x400.jpg"/>
                <div className="card-body">
                    <h4 className="card-title">Michael McDowell</h4>
                    <p className="card-text">The defending Daytona 500 winner for Front Row Motorsports will be back to defend his crown. McDowell finished second in his duel race after being the fastest car in the first practice session. McDowell is a very good superspeedway racer with top five finishes in four of his last twelve superspeedway races. It would not be a huge surprise to see him defend his Daytona 500 crown and go back to victory lane.</p>
                </div>
            </card>
            <card className="card mx-auto">
                <img className="card-img-top" src="https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/12_Blaney_Clash_2022_1200x520-copy-1-922x400.jpg"/>
                <div className="card-body">
                    <h4 className="card-title">Ryan Blaney</h4>
                    <p className="card-text">Even as Ford has looked dominant at Daytona this year, two teams stand out. RFK Racing swept the duel races but they were followed closely by Team Penske. Penske won two of the four superspeedway races last year, including a win by Blaney here at Daytona in August.</p>
                </div>
            </card>
        </div>
    )
}

export default Sports;