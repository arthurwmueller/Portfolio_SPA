import React from "react";

function Font(props) {

    return(
        <div>
            <card className="card mx-auto">
                <h3>The current font is {props.font}</h3>
            </card>
            <card className="card mx-auto">
                <p>For many software developers, the first line of code they write is "Hello World." The first line of code I wrote was "font-family:'Comic Sans MS'"</p>
                <p>I was writing satire for my college radio station's website and I felt that it would be appropriate for the font to be Comic Sans. This started me on my journey to becoming a software developer.</p>
            </card>
            <card className="card mx-auto">
                <h4>
                    Change the Font
                </h4>
                <p>Comic Sans isn't for everyone. Use the dropdown menu to change the font to a different sans-serif font. There are no serif fonts allowed in this react appliction.</p>
                <p>Sorry, this feature isn't ready yet. Please check back later.</p>
            </card>
        </div>
    )
}

export default Font;