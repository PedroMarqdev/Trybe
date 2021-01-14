import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import  List  from './List'
import InputsList from './InputsList'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <Provider store={store}>
          <div className='flexbox'>
          <InputsList />
          <List />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;