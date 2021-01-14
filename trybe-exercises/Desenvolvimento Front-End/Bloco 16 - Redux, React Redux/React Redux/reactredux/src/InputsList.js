import React from 'react';
import { connect } from 'react-redux';
import { addAssignment, addTaskCount } from './actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '', taskCount: 0 };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button onClick={ async () => {
          this.props.add(this.state.textValue)
          if(this.state.textValue.length === 0) return this.state
         await this.setState({taskCount: this.state.taskCount + 1})
          this.props.addTask(this.state.taskCount)
          }}>
          Adicionar tarefa
        </button>
        <p>Quantidade de tarefas: {this.state.taskCount}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({add: e => dispatch(addAssignment(e)), addTask: e => dispatch(addTaskCount(e))});

export default connect(null, mapDispatchToProps)(InputsList);