import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';


function App() {
  return (
    <div className="flex">
      <SideBar/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
