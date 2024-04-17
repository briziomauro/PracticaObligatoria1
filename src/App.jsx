import './App.css'
import Tables from './components/table/Table';

const netIncomes = [{brand: 'McDonalds', income: 1291283}, {brand: 'Burger King', income: 1927361}, {brand: 'KFC', income: 1098463}];

function App() {

  return (
    <div>
      <Tables netIncomes = {netIncomes}/>
    </div >
  )
}

export default App
