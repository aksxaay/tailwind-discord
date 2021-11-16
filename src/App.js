// import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import ChannelBar from './components/ChannelBar';
import TopNavigation from './components/TopNavigation';
import ContentContainer from './components/ContentContainer';



function App() {
  return (
    <div className="flex">
      <SideBar/>
      <ChannelBar/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* so somehow they decided that they're going to include TopNavigation in ContentContainers */}
      {/* <TopNavigation/> */}
      <ContentContainer/>
    </div>
  );
}

export default App;
