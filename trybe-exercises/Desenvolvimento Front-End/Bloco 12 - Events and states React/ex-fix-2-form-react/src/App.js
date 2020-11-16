import React from 'react'
import './App.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }
    this.changeFunc = this.changeFunc.bind(this)
  }

  changeFunc(event) {
    this.setState({
      test: event.target.value,
    }) 
  }
  render() {
    return (<div>
      <form>
      <input type='text'></input>
        <select>
          <option value='1'>Teste 1</option>
          <option value='2'>Teste 2</option>
        </select>
        <textarea onChange={this.changeFunc}/>
      </form>
    </div>
    )
  }
}

export default App;
