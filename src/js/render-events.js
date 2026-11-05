// приймає масив
export function renderEvents(array) {
    const markUp = array.map(event=> `<li data-id=${event.id} >
        <img src="${event.images[0].url}" alt="${event.id}">
        <h3>${event.name}</h3>
        <p>${event.dates.start.localDate}</p>
        <p>${event.dates.timezone}</p>
    </li>`).join("")
    return markUp; 
}