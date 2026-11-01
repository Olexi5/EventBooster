import { getById } from "./getById";
import { renderModal } from "./modal";
import { getEvents } from "./fetch-main";
import { renderEvents } from "./render-events";

const eventsContainer = document.querySelector(".events");

const modal = document.querySelector(".modal-cont");

getEvents().then(
  (data) => (eventsContainer.innerHTML = renderEvents(data._embedded.events)),
);

eventsContainer.addEventListener("click", (e) => {
  const id = e.target.closest("li").dataset.id;
  getById(id).then((d) => renderModal(d));
});
// Listen for clicks anywhere on the document (or a persistent parent container)
modal.addEventListener("click", (e) => {
  const closeBtn = e.target.closest(".close-btn");
if (closeBtn) {
    modal.innerHTML = "";
    document.body.classList.remove("no-scroll")
  }
});
