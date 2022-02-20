import React from 'react';
import './App.css';
import Nav from './Navbar';
import Body from './Body';




 
class App extends React.Component {
  constructor(props){
    super(props);
    this.changeView=this.changeView.bind(this);
    this.changeFont=this.changeFont.bind(this);
    this.state ={view:"About",font:"Comic Sans MS"};
  }

  changeView(newView){
    this.setState({view:newView})
  }

  changeFont(newFont){
    this.setState({font:newFont})
  }
  
  render(){
    const view=this.state.view;
    const font=this.state.font;
    const styledFont={"font-family":font};

    return (
    <div className="App" style={styledFont}>
      <header className="App-header">
        <h1>
          Arthur W Mueller
        </h1>
        <Nav changeView={this.changeView}/>
      </header>
      <body className="App-Body" style={styledFont}>
        <h2>
          <Body view={view} changeFont={this.changeFont} font={font}/>
        </h2>
      </body>
      <footer className="App-footer fixed-bottom">
        <p className="Footer-Text">
          <a href="https://github.com/arthurwmueller" className="App-footer">© Arthur W Mueller</a>
        </p>
      </footer>
    </div>
  );
}}

export default App;
