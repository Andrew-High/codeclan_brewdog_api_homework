import './App.css';
import BeerContainer from './containers/BeerContainer';

function App() {
  return (
    <div className="App">
      <div id="header">
        <img src= "https://cdn.shortpixel.ai/spai/w_300+q_lossy+ret_img+to_webp/https://mk0hive9wr7agvd1g6.kinstacdn.com/wp-content/uploads/2019/08/Brewdog-Black-Horizontal.png" width = "200" alt=""/>
        <h1 id="header-text">by Numbers</h1>
      </div>
      <BeerContainer/>
    </div>
  );
};

export default App;
