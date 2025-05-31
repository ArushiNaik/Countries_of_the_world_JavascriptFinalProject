import { useParams, Link } from 'react-router-dom';
import countries from '../data/countries.json';

function CountryDetails() {
  const { code } = useParams();

  const country = countries.find(
    (c) => c.Abbreviation.toLowerCase() === code.toLowerCase()
  );

  if (!country) return <p>Country not found.</p>;

  const flagUrl = `https://flagcdn.com/w320/${country.Abbreviation.toLowerCase()}.png`;

  return (
    <div className="container mt-5">
      <h1 className="title is-3">{country.Country}</h1>
      <img
        src={flagUrl}
        alt={`Flag of ${country.Country}`}
        width="150"
        className="mb-4"
      />
      <p><strong>Capital:</strong> {country["Capital/Major City"]}</p>
      <p><strong>Population:</strong> {country.Population.toLocaleString()}</p>
      <p><strong>GDP:</strong> {country.GDP}</p>
      <p><strong>Currency:</strong> {country["Currency-Code"]}</p>
      <p><strong>Life Expectancy:</strong> {country["Life expectancy"]}</p>
      <Link to="/" className="button is-primary mt-4">← Back to Countries</Link>
    </div>
  );
}

export default CountryDetails;



