import { getById } from "./getById";
import { renderModal } from "./modal";

getById("1A9Zk3dGkdpT2sm").then(d=>renderModal(d))
import { getEvents } from "./fetch-main";
import { renderEvents } from "./render-events";

const eventsContainer = document.querySelector(".events");


getEvents().then(data=>eventsContainer.innerHTML = renderEvents(data._embedded.events));
