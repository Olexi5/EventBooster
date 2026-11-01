const API_KEY = "SF9iTUj6nhCVPu2H1SEAypln081nKnA5";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
export async function getById(id){
    try{
        const params = await new URLSearchParams({
          apikey: API_KEY,
        });
        const data = await fetch(`${BASE_URL}/events/${id}?${params}`)
        const resp = data.json()
        return resp
    }catch(e){
        alert(e)
    }
}
