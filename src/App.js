import "./App.css";
import AllCountries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
