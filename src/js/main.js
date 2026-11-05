import { getById } from "./getById";
import { renderModal } from "./modal";
import { getEvents } from "./fetch-main";
import { renderEvents } from "./render-events";
import { searchEvents } from "./search";

const eventsContainer = document.querySelector(".events");
const modal = document.querySelector(".modal-cont");
const form= document.querySelector(".form")
const name=document.querySelector(".name")
const country = document.querySelector(".country");

getEvents().then(
  (data) => (eventsContainer.innerHTML = renderEvents(data._embedded.events)),
);

eventsContainer.addEventListener("click", (e) => {
  const id = e.target.closest("li").dataset.id;
  getById(id).then((d) => renderModal(d));
});

modal.addEventListener("click", (e) => {
  const closeBtn = e.target.closest(".close-btn");
if (closeBtn) {
    modal.innerHTML = "";
    document.body.classList.toggle("no-scroll")
  }
});

form.addEventListener("input", (e)=>{
  e.preventDefault()
  searchEvents(country.value, name.value).then(d=>eventsContainer.innerHTML = renderEvents(d._embedded.events))
})