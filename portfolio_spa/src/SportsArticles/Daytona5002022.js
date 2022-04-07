import React from "react";

const drivers = [
    {id:1, title:"Brad Keselowski",image:"https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/6_Keselowski_Daytona_2022_1200x520-copy-922x400.jpg",body:"Brad Keselowski left Team Penske this offseason to join the newly renamed RFK Racing as an owner/driver. However, he is still driving a Ford, which looks to be the strongest manufacturer at the Daytona 500 this year. Keselowski won the first Duel race on Thursday night and he's a threat to win any time NASCAR visits a superspeedway."},
    {id:2, title:"Michael McDowell",image:"https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/34_McDowell_Daytona_2022_1200x520-copy-922x400.jpg",body:"The defending Daytona 500 winner for Front Row Motorsports will be back to defend his crown. McDowell finished second in his duel race after being the fastest car in the first practice session. McDowell is a very good superspeedway racer with top five finishes in four of his last twelve superspeedway races. It would not be a huge surprise to see him defend his Daytona 500 crown and go back to victory lane."},
    {id:3, title:"Ryan Blaney",image:"https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/12_Blaney_Clash_2022_1200x520-copy-1-922x400.jpg",body:"Even as Ford has looked dominant at Daytona this year, two teams stand out. RFK Racing swept the duel races but they were followed closely by Team Penske. Penske won two of the four superspeedway races last year, including a win by Blaney here at Daytona in August."},
    {id:4, title:"Alex Bowman",image:"https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/48_Bowman_Daytona_2022_1200x520-copy-922x400.jpg",body:"For the fifth year in a row, Alex Bowman will start on the front row for the Daytona 500. The Hendrick cars were great in single car qualifying but struggled in the duel races. If they can figure out how to make their car handle better in the pack, Bowman could be someone to watch."},
    {id:4, title:"Bubba Wallace",image:"https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/23_Wallace_Daytona_2022_1200x520-copy-922x400.jpg",body:"The last time the series was at a superspeedway at Talladega, Bubba Wallace ended up in victory lane celebrating his first career win. The 23XI Racing driver has proved to be an excellent superspeedway racer with multiple runner up finishes at Daytona. If things go right, he could be in position to do one better."},
    {id:5, title:"Chris Buescher",image:"https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/17_Buescher_Daytona_2022_1200x520-copy-922x400.jpg",body:"At last year's August Daytona race, Chris Buescher crossed the finish line in second place. Unfortunately, his car failed post race inspection and was disqualified. Buescher has already gotten 2022 off to a good start, winning his duel race. With how strong RFK Racing has looked so far, it would not be a surprise to see him back up his duel win with a win in the Daytona 500."},
    {id:6, title:"Harrison Burton",image:"https://www.nascar.com/wp-content/uploads/sites/7/2022/02/16/21_Burton_Clash_2022_1200x520-922x400.jpg",body:"At just 21 years of age, Harrison Burton will be making his Daytona 500 debut. However he will do it driving for the legendary Wood Brothers team, which has an alliance with the Penske team that has looked so fast this year. The car got a bit of damage in a last lap crash in Burton's duel race when he was running at the front, but it has been repaired. The son of NASCAR driver and broadcaster Jeff Burton, Harrison Burton will have the car on raceday to prove he belongs in the Cup Series."}
]

function Daytona5002022() {
    const content = drivers.map((driver) =>
            <div className="body" key={driver.id}>
                <card className="card image-card">
                    <img className="card-img-top" src={driver.image} alt={driver.title}/>
                    <div className="card-body">
                        <h4 className="card-title">{driver.title}</h4>
                        <p className="card-text">{driver.body}</p>
                    </div>
                </card>
            </div>
            );
    return (
        <div>
            <card className="card">
                <h3>Daytona 500: Who to Watch For</h3>
            </card>
            <div>{content}</div>
        </div>
    )
}

export default Daytona5002022;