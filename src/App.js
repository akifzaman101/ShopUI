import { AllRoutes } from './routes/AllRoutes';
import { Header } from './components';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] =useState([]);
  const handleAdd = (product) => {
    setData ([...data, product]);
  }
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    console.log(newData);
    setData(newData);
  }
  return (
    <div className="App">
      <Header data={data}/>
      <AllRoutes handleAdd={handleAdd} data={data} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
