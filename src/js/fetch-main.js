const API_KEY = "SF9iTUj6nhCVPu2H1SEAypln081nKnA5";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";

export async function getEvents() {
    try{
        const response = await fetch(`${BASE_URL}events.json?apikey=${API_KEY}`);
        const data = response.json();
        return data;
    }catch(error){console.error(error)}
}


// _ebmedded