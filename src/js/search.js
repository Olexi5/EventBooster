const API_KEY = "SF9iTUj6nhCVPu2H1SEAypln081nKnA5";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
export async function searchEvents(country, key) {
    const params = new URLSearchParams({
        countryCode:country,
        apikey:API_KEY,
        keyword:key
    })
  const resp = await fetch(`${BASE_URL}events.json?${params}`)
  const data = resp.json()
  return data
}
