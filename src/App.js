import './App.css';
import Header from './HeaderComponent/Header';
import Row from './Row';
import requests from './request';
function App() {

  
  return (
    <div className="App">
     <Header title="" />
     <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
