import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  const flagUrl = `https://flagcdn.com/w320/${country.Abbreviation.toLowerCase()}.png`;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={flagUrl} alt={`Flag of ${country.Country}`} />
        </figure>
      </div>
      <div className="card-content">
        <p>{country.Country}</p>
        <p>Capital: {country["Capital/Major City"]}</p>
        <p>Language: {country["Official language"]}</p>
        <p>Population: {country.Population}</p>
        <Link to={`/country/${country.Abbreviation}`} className="button is-link mt-2">More Info</Link>
      </div>
    </div>
  );
}

export default CountryCard;
