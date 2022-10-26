
import './App.css';
import React from "react"; //importing react library.

function App() {      // functional component
  return (
    <div> Hello Star Health !!!!</div>   //jsx -> combo of js + html.
  );
}
class App2 extends React.Component{
  render(){
    return <h2> In Star Health.</h2>;
  }
  
}

export default App2; // exporting the function.
