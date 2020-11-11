import React from 'react'
import data from './data.js'
import PokeCard from './PokeCard.js'


class PokeList extends React.Component {
    render() {
        return data.map((element) => <PokeCard key={element.id} data={element}/>)
}
}

export default PokeList