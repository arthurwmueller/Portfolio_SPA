import React from "react";

function Font(props) {

    const comicSans ="Comic Sans MS";
    const styledComicSans={"font-family":comicSans};
    const arial ="Arial";
    const styledArial={"font-family":arial};
    const verdana="Verdana";
    const styledVerdana={"font-family":verdana};
    const helvetica="Helvetica";
    const styledHelvetica={"font-family":helvetica};
    const tahoma="Tahoma";
    const styledTahoma={"font-family":tahoma};
    const impact="Impact";
    const styledImpact={"font-family":impact};

    return(
        <div>
            <card className="card">
                <h3>The current font is {props.font}</h3>
            </card>
            <card className="card">
                <p>For many software developers, the first line of code they write is "Hello World." For me, the first line of code I wrote was "font-family:'Comic Sans MS'"</p>
                <p>I was writing satire for my college radio station's website and I felt that it would be appropriate for the font to be Comic Sans. This started me on my journey to becoming a software developer.</p>
            </card>
            <card className="card">
                <h4>
                    Change the Font
                </h4>
                <p>Comic Sans isn't for everyone. Click a button to change the font to a different sans-serif font. There are no serif fonts allowed in this react appliction because I don't like serif fonts and it's my appliction.</p>
                <div className="button-bank">
                    <button className="font-button" onClick={()=>props.changeFont("Comic Sans MS")} style={styledComicSans}>Comic Sans</button>
                    <button className="font-button" onClick={()=>props.changeFont("Arial")} style={styledArial}>Arial</button>
                    <button className="font-button" onClick={()=>props.changeFont("Verdana")} style={styledVerdana}>Verdana</button>
                    <button className="font-button" onClick={()=>props.changeFont("Helvetica")} style={styledHelvetica}>Helvetica</button>
                    <button className="font-button" onClick={()=>props.changeFont("Tahoma")} style={styledTahoma}>Tahoma</button>
                    <button className="font-button" onClick={()=>props.changeFont("Impact")} style={styledImpact}>Impact</button>
                </div>
            </card>
        </div>
    )
}

export default Font;