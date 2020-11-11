import React from 'react';
import PropTypes from 'prop-types';

class PokeCard extends React.Component {
  render() {
    const data = this.props.data;
    const { name, type, averageWeight, image, moreInfo } = data;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className='poke-card'>
        <div className='poke-card-info'>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso: {value} {measurementUnit}</p>
        </div>
        <div className='poke-card-image'>
          <img src={image} alt={`${name} img`} />
          <p><a href={moreInfo}>Mais informações</a></p>
        </div>
      </div>
    );
  }
}

PokeCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        averageWeight: PropTypes.object,
        image: PropTypes.string,
        moreInfo: PropTypes.string,
    })
}

export default PokeCard;
