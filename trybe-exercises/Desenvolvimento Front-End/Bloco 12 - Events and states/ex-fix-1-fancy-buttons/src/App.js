import React from 'react';
import './App.css';


class App extends React.Component {
 render() {
  const clickEvent = () => {
    console.log(this.props.message);
  }
   return <button onClick={clickEvent}>Botãozinho</button>
 }
}

export default App;
