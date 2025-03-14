
export default async function handler(req, res) {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Ambil dari .env.local
    const city = req.query.city || "Malang";
  
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json({ error: data.message });
      }
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan dalam mengambil data" });
    }
  }
  