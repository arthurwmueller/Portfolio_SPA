import React from "react";

function About() {
    return(
        <div>
            <card className="card">
                <h3>About Me</h3>
            </card>
            <card className="card">
                <p className="card-body">
                    Arthur graduated from the University of Pittsburgh in 2018 with a degree in political science. At the University of Pittsburgh, he was heavily involved in the college radio station, where he produced content about sports and pop culture. To view a sample of Arthur's work in this field, please see "Sports" or "Movie Reviews" in the navbar.
                </p>
                <p className="card-body">
                    While at the college radio station, Arthur discovered that he liked the technical aspects of radio more than the creative ones. The turning point came when he had written a satirical sports column about Pitt's heated football rivalry with Syracuse.* Arthur decided that it would be appropriate to display the column in the font Comic Sans MS, so he researched how to do that and voila, he had written his first line of code.
                </p>
                <p className="card-body">
                    Building upon that, and having taken most of the classes he needed for his major, Arthur decided to enroll in a computer science class. He picked CS 0004 Visual Basic because it was the class with the lowest number, and that seemed like the right approach to just get a sample of programming to see if he liked it. Arthur got the highest grade he had ever gotten in his entire college career in CS 0004, mainly due to every project having optional extensions of the project for bonus points. Arthur completed every extension.
                </p>
                <p className="card-body">
                    At this point, Arthur was at a crossroads. He was just about ready to graduate with his political science major. If he were to attempt to add a computer science major or minor, he would be in college for several more years. Ultimately, Arthur decided to graduate from the University of Pittsburgh and enroll in the Tech Elevator 14 week Java development bootcamp. It was here that Arthur learned most of what he knows today about Java development.
                </p>
                <p className="card-body">
                    Now, Arthur is part of the JUMP program at Cognixia. <a href="https://github.com/Natecat4444/Moonfall" className="white-link">Click here to see a group project that he did with his team.</a>
                </p>
                <p className="card-footer">
                    *Editors Note: Pitt's football rivalry with Syracuse is not at all heated. That is the joke.
                </p>
            </card>
        </div>
    )
}

export default About;