import React, {useState} from 'react';
import countries from '../data/countries.json';
import CountryCard from '../components/CountryCard';
import SearchBar from  '../components/SearchBar';

function Countries(){
    const [search, setSearch] = useState('');

    const filteredCountries = countries.filter((c) => c.Country.toLowerCase().includes(search.toLowerCase())

);

return (
    <div className = 'container'> 
    <h1 className= 'title'>Country Explorer</h1>
    <SearchBar value = {search} onChange = {setSearch} />
    <div className='columns is-multiline mt-5'> 
        {filteredCountries.map((country) => (
            <div className= 'column is-one-third' key={country.Abbreviation}>
        <CountryCard country={country} />
    </div>
        ))}
        </div>
    </div>
    );
}

export default Countries;



