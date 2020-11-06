import React from 'react'
import logo from './logo.svg';
import './App.css';
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
const commitments = ['Devorar react', 'Fazer exercícios', 'Meditar', 'Ser 1% melhor a cada dia']
function App() {
  return (
    commitments.map((element) => <li>{element}</li>)
  );
}

export default App;
