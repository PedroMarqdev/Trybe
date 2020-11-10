import React from 'react';
import './App.css';


class App extends React.Component {
  constructor () {
    super()
    this.clickEvent = this.clickEvent.bind(this)
  }

  clickEvent() {
    console.log(this)
    console.log(this.props.message);
  }
 
 render() {
  
   return <button onClick={this.clickEvent}>Botãozinho</button>
 }
}

export default App;
