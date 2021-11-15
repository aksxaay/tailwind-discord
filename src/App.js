// import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ChannelBar from './components/ChannelBar';
import TopNavigation from './components/TopNavigation';



function App() {
  return (
    <div className="flex">
      <SideBar/>
      <ChannelBar/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <TopNavigation/>
    </div>
  );
}

export default App;
