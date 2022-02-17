import './App.css';
import Nav from './Navbar';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Arthur W Mueller
        </h1>
        <Nav/>
      </header>
      <body className="App-Body">
        <h2>
          Content Goes Here!
        </h2>
      </body>
      <footer className="App-footer fixed-bottom">
        <p className="Footer-Text">
          © Arthur W Mueller
        </p>
      </footer>
    </div>
  );
}

export default App;
