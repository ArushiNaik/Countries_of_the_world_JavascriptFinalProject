import {Routes, Route} from 'react-router-dom';
import Countries from './pages/Countries';
import CountryDetails from './pages/CountryDetails';

function App() {
    return (
        <Routes>
            <Route path= '/' element= {<Countries />} />
            <Route path= '/country/:code' element= {<CountryDetails />} />
        </Routes>

    );
}
export default App;