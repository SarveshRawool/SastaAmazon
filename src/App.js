
import './App.css';
import Catnav from './Component/Catnav';
import MainComponent from './Component/MainComponent/Index';
import TopNav from './Component/Topnav/Topnav';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Catnav></Catnav>
      <MainComponent></MainComponent>
    </div>
  );
}

export default App;
