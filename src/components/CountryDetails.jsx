import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { BASE_URL } from '../api'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/name/${countryName}?fullText=true`); 
            const data = res.data;
            setCountry(data);
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
            setError('No country found');
          }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className="country_info_wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>

      <div className="flex justify-center text-gray-200">
      {isLoading && !error &&
       <h4>Loading...    
            <FontAwesomeIcon
             icon={faCircleNotch}
             className="text-4xl animate-spin "/>
        </h4>}
      {error && !isLoading && { error }}
      </div>

      {country?.map((country, index) => (
        <div className="country_info_container" key={index}>
          <div className="country_info-img">
            <img src={country.flags.png} alt="country.name.common" />
          </div>

          <div className="country_info">
            <h3>{country.name.common}</h3>

            <div className="country_info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Languages:&nbsp; 
                    {Object.keys(country.languages).map((languageCode, langIndex)=>(
                         <span key={langIndex}>{country.languages[languageCode]} &nbsp; </span>
                    )) }
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
