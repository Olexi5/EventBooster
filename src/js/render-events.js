// приймає масив
export function renderEvents(array) {
    const markUp = array.map(event=> `<li data-id=${event.id} class="list-item">
        <img src="${event.images[0].url}" alt="${event.id}" class="list-item-img">
        <h3 class="list-item-title">${event.name}</h3>
        <p class="list-item-description-date">${event.dates.start.localDate}</p>
        <p class="list-item-description-place">${event._embedded.venues[0].city.name}</p>
    </li>`).join("")
    return markUp; 
}