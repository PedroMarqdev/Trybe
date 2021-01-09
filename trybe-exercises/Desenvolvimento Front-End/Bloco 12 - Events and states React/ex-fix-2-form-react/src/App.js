import React from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Input from './input';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
      error: false
    };
    this.changeFunc = this.changeFunc.bind(this);
  }

  changeFunc({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <form>
          <div className='form-control'>
            <Input
              value={this.state['teste 1']}
              changeFunc={this.changeFunc}
              name='teste 1'
              type='text'
            />
          </div>
          <div className='form-control'>
            <select
              onChange={this.changeFunc}
              name='teste 2'
              value={this.state['teste 2']}
            >
              <option value='1'>Teste 1</option>
              <option value='2'>Teste 2</option>
            </select>
          </div>
          <div className='form-control'>
            <Input
              value={this.state['teste 2']}
              changeFunc={this.changeFunc}
              name='teste 2'
              type='checkbox'
            />
          </div>
          <textarea
            onChange={this.changeFunc}
            name='teste 3'
            value={this.state['teste 3']}
          />
        </form>
      </div>
    );
  }
}

export default App;
