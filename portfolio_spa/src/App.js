import React from 'react';
import './App.css';
import Nav from './Navbar';
import Body from './Body';


const showView="Sports";
const font="Comic Sans MS";
const styledFont={"font-family":font}


class App extends React.Component {
  constructor(props){
    super(props);
  }


  
  
  render(){
  return (
    <div className="App" style={styledFont}>
      <header className="App-header">
        <h1>
          Arthur W Mueller
        </h1>
        <Nav showView={showView}/>
      </header>
      <body className="App-Body" style={styledFont}>
        <h2>
          <Body view={showView} font={font}/>
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
