import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);

    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();

    setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>Cek Cuaca</h1>
      <input
        type="text"
        placeholder="Masukkan nama kota"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Memuat..." : "Cari Cuaca"}
      </button>

      {weather && weather.main ? (
        <div>
          <h2>Cuaca di {weather.name}</h2>
          <p>🌡 Suhu: {weather.main.temp}°C</p>
          <p>🌬 Kecepatan Angin: {weather.wind.speed} m/s</p>
          <p>🌦 Kondisi: {weather.weather[0].description}</p>
        </div>
      ) : (
        weather?.error && <p style={{ color: "red" }}>Error: {weather.error}</p>
      )}
    </div>
  );
}