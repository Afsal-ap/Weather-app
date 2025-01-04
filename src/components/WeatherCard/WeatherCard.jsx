import './WeatherCard.css';

const WeatherCard = ({ cityData, onRemove }) => {
  return (
    <div className="city-card">
      <button 
        className="remove-button"
        onClick={() => onRemove(cityData.id)}
        aria-label="Remove city"
      >
        ×
      </button>
      <div className="city-header">
        <h2>{cityData.name}</h2>
        <span className="country-code">{cityData.sys.country}</span>
      </div>
      <div className="weather-info">
        <div className="main-weather">
          <p className="temperature">{Math.round(cityData.main.temp)}°C</p>
          <img 
            src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
            alt={cityData.weather[0].description}
            className="weather-icon"
          />
        </div>
        <p className="weather-description">
          {cityData.weather[0].description}
        </p>
        <div className="details">
          <p>Humidity: {cityData.main.humidity}%</p>
          <p>Wind: {cityData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
