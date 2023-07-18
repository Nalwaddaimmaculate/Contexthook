import logo from './logo.svg';
import './App.css';
import Check1 from './components/Check1';
import Users from './components/Users';
import Parent from './components/parent';
import OrderWithoutContext from './components/Contex/OrderWithoutContext';
import OrderWithContext from './components/Contex/OrderWithContext';



function App() {
  return (
    <div className="App">
      <OrderWithoutContext/>
      <OrderWithContext/>

      
     
      {/* <Check1/> */}
      {/* <Users/> */}
      {/*<Parent name="John Doe" location="Connecticut"/>*/}
    </div>
  );
}


export default App;