import React from 'react';
import PokeList from './PokeList';
import data from './data';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.changeFunc = this.changeFunc.bind(this);
    this.typeGenerator = this.typeGenerator.bind(this);
    this.filterType = this.filterType.bind(this);
    this.returnAll = this.returnAll.bind(this)
    this.state = {
      value: data,
    };
  }
  changeFunc(event) {
    this.setState({
      value: data.filter((element) => element.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  }
  typeGenerator() {
    let arrayType = [];
    data.forEach((element) => {
      const { type } = element;
      if (!arrayType.includes(type)) arrayType.push(type);
    });
    return arrayType;
  }

  filterType(type) {
    const filter = data.filter(
      (element) => element.type === type.target.innerText
    );
    this.setState({
      value: filter,
    });
  }

  returnAll() {
      this.setState({
          value: data,
      })
  }

  render() {
    return (
      <section className='poke-app'>
        <section className='inputDiv'>
          <input onChange={this.changeFunc} id='pokeName' type='text' placeholder='Digite o nome do Pokemon' />
          <div className='type-buttons'>
              <button onClick={this.returnAll}>All</button>
            {this.typeGenerator().map((type) => (<button className={`${type.toLowerCase()} button`}onClick={this.filterType} key={type}>{type}</button>))}
          </div>
        </section>
        <section className='poke-dex'>
          <PokeList filterData={this.state.value} />
        </section>
      </section>
    );
  }
}

export default Search;
