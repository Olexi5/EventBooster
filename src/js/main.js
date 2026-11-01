import { getEvents } from "./fetch-main";
import { renderEvents } from "./render-events";

const eventsContainer = document.querySelector(".events");


getEvents().then(data=>eventsContainer.innerHTML = renderEvents(data._embedded.events));
