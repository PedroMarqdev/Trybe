import React from 'react';
import PropTypes from 'prop-types'

class Input extends React.Component {
  render() {
    const { changeFunc, value, type, name } = this.props;
    if (value.length > 100) alert('Texto muito grande!')
    return (
        <div>
            <input onChange={changeFunc}type={type} name={name} value={value}></input>
        </div>
    
        )
  }
}
Input.defaultProps = {
    value: ''
  }
Input.PropTypes = {
    changeFunc: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
}
export default Input;
