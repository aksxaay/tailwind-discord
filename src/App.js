// import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ChannelBar from './components/ChannelBar';


function App() {
  return (
    <div className="flex">
      <SideBar/>
      <ChannelBar/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
