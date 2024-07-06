import axios from 'axios'
let handler = async (m, { args }) => {
  if (!args[0]) throw '*Pon un lugar*'
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + '°C'
    const Minimum_Temperature = res.data.main.temp_min + '°C'
    const Maximum_Temperature = res.data.main.temp_max + '°C'
    const Humidity = res.data.main.humidity + '%'
    const Wind = res.data.wind.speed + 'km/h'
    const wea = `*Lugar:* ${name}\n*Pais:* ${Country}\n*Vista:* ${Weather}\n*Temperatura:* ${Temperature}\n*Minima Temperatura:* ${Minimum_Temperature}\n*Maxima Temperatura:* ${Maximum_Temperature}\n*Humedad:* ${Humidity}\n*Viento:* ${Wind}`
    m.reply(wea)
  } catch {
    return '*ERROR*'
  }
}
handler.help = ['clima *<Lugar>*']
handler.tags = ['tools']
handler.command = /^(clima)$/i
export default handler
