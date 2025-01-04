import { useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import { fetchWeatherData } from './utils/api';
import './styles/global.css';

function App() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWeatherData(city);
      if (data.cod === 200) {
        setCities(prevCities => [...prevCities, data]);
        setCity('');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert('Failed to fetch weather data.');
    }
  };

  const removeCity = (cityId) => {
    setCities(prevCities => prevCities.filter(city => city.id !== cityId));
  };

  return (
    <div className="App">
      <Header />
      <SearchBar city={city} setCity={setCity} onSubmit={handleSubmit} />
      <div className="cities-grid">
        {cities.map(cityData => (
          <WeatherCard 
            key={cityData.id} 
            cityData={cityData} 
            onRemove={removeCity}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
