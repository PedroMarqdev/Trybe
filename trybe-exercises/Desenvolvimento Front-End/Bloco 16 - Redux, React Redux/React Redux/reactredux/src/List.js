import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          {this.props.list.map(element => {
              return <p key={element}>{element}</p>
          })}
          <p>Quantidades de Tarefas (Estado Redux): {`${this.props.count}`}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({list: state.listReducer, count: state.countReducer});
export default connect(mapStateToProps)(List);