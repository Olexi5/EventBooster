const modal = document.querySelector(".modal-cont");
export function renderModal(event) {
  modal.innerHTML = `<div class="backdrop">
        <div class="modal">
          <button type="button" class="close-btn">
          </button>
          <img src="${event.images[0].url}" alt="" class="modal-circle-img">
          <div class="modal-wrap">
        <img src="${event.images[0].url}" alt="" class="modal-full-img">
        <div class="modal-descr">
            <h3 class="modal-info">Info</h3>
            <p class="modal-text">${event.info}</p>
            <h3 class="modal-info">When</h3>
             <p class="modal-text">${event.dates.start.localDate}</p>
            <h3 class="modal-info">Where</h3>
            <p class="modal-text">${event.dates.timezone}</p>
            <h3 class="modal-info">Who</h3>
            <p class="modal-text">${event.name}</p>
            <a target="_blank" href="${event.url}" class="modal-buy">Buy tickets</a>
        </div>
    </div>
    <a target="_blank" href="${event.url}" class="modal-more">More from this author</a>
        </div>
      </div>`;

}
