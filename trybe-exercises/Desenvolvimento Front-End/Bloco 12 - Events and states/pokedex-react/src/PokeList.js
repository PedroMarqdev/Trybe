import React from 'react';
import PokeCard from './PokeCard.js';

class PokeList extends React.Component {
  render() {
    return this.props.filterData.map(element => <PokeCard key={element.id} data={element} />);
  }
}

export default PokeList;
