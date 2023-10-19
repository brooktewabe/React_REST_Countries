import { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import axios from "axios";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/all`);
      if (res.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = res.data;
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await axios.get(`${BASE_URL}/name/${countryName}`);
      const data = res.data;
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("No country found");
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all_country_wrapper">
      <h2>REST Countries</h2>
      <div className="country_top">
        <div className="search">
          <Search onSearch={getCountryByName} />
        </div>
      </div>

      <div className="country_bottom">
        {isLoading && !error && (
          <h4>
            Loading...
            <FontAwesomeIcon icon={faCircleNotch} className="text-4xl animate-spin" />
          </h4>
        )}
        {error && !isLoading && <p>{error}</p>}

        {countries.length === 0 ? (
          <p>No results found</p>
        ) : (
          countries.map((country) => (
            <Link to={`/country/${country.name.common}`}>
              <div className="country_card">
                <div className="country_img">
                  <img src={country.flags.png} alt={country.name.common} />
                </div>

                <div className="country_data">
                  <h3>{country.name.common}</h3>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllCountries;
