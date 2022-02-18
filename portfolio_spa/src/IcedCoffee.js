import React from "react";

function IcedCoffee(){
     

    return(
        <div>
            <card className="card mx-auto">
                <h3>Is it iced coffee weather?</h3>
            </card>
            <card className="card mx-auto">
                <p>Sorry, this feature is not available yet. Once it is available it will use your location and call a weather api and tell you based on your location whether or not it is iced coffee weather. For now, I reccomend ordering one iced coffee and one hot coffee and seeing which one suits you better.</p>
            </card>
        </div>
    )
}

export default IcedCoffee;