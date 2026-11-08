import { getById } from "./getById";
import { renderModal } from "./modal";
import { getEvents } from "./fetch-main";
import { renderEvents } from "./render-events";

const eventsContainer = document.querySelector(".events");
const modal = document.querySelector(".modal-cont");
const form = document.querySelector(".form");
const name = document.querySelector(".name");
const country = document.querySelector(".country");

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const paginationScale = document.querySelector(".pagination-scale-text");

let page = 0;
let totalPages = 0;

async function loadEvents(country, name) {
    const data = await getEvents(page, country, name);
console.log(country, name)
    if (!data) return;

    totalPages = data.page.totalPages;

    eventsContainer.innerHTML = renderEvents(data._embedded.events);

    paginationScale.textContent = `${page + 1} / ${totalPages}`;

    prevBtn.classList.toggle("btn-locked", page === 0);
    nextBtn.classList.toggle("btn-locked", page >= totalPages - 1);
}

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (page > 0) {
        page -= 1;
        loadEvents(country.value, name.value);
    }
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (page < totalPages - 1) {
        page += 1;
        loadEvents(country.value, name.value);
    }
});

loadEvents(country.value, name.value);


eventsContainer.addEventListener("click", (e) => {
    const item = e.target.closest("li");

    if (!item) return;

    const id = item.dataset.id;

    getById(id).then((d) => renderModal(d));
});

modal.addEventListener("click", (e) => {
    const closeBtn = e.target.closest(".close-btn");

    if (closeBtn) {
        modal.innerHTML = "";
        document.body.classList.toggle("no-scroll");
    }
});

form.addEventListener("input", (e) => {
    e.preventDefault();

    loadEvents(country.value, name.value);
});