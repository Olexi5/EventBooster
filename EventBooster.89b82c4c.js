let e=document.querySelector(".modal-cont");function t(e){return e.map(e=>`<li data-id=${e.id} >
        <img src="${e.images[0].url}" alt="${e.id}">
        <h3>${e.name}</h3>
        <p>${e.dates.start.localDate}</p>
        <p>${e.dates.timezone}</p>
    </li>`).join("")}let a=document.querySelector(".events"),s=document.querySelector(".modal-cont"),n=document.querySelector(".form"),l=document.querySelector(".name"),o=document.querySelector(".country");(async function(){try{return(await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=SF9iTUj6nhCVPu2H1SEAypln081nKnA5")).json()}catch(e){console.error(e)}})().then(e=>a.innerHTML=t(e._embedded.events)),a.addEventListener("click",t=>{(async function(e){try{let t=await new URLSearchParams({apikey:"SF9iTUj6nhCVPu2H1SEAypln081nKnA5"});return(await fetch(`https://app.ticketmaster.com/discovery/v2//events/${e}?${t}`)).json()}catch(e){alert(e)}})(t.target.closest("li").dataset.id).then(t=>{document.body.classList.toggle("no-scroll"),e.innerHTML=`<div class="backdrop">
        <div class="modal">
          <button class="close-btn"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.28557 25C0.95625 25 0.626931 24.8747 0.376724 24.6227C-0.125574 24.1204 -0.125574 23.306 0.376724 22.8038L22.8043 0.376714C23.3066 -0.125571 24.121 -0.125571 24.6233 0.376714C25.1256 0.878999 25.1256 1.69333 24.6233 2.19593L2.19598 24.6227C1.94389 24.8732 1.61457 25 1.28557 25V25Z" fill="#4C00FE"/>
<path d="M23.7147 25C23.3854 25 23.0564 24.8747 22.8059 24.6227L0.376724 2.19593C-0.125574 1.69333 -0.125574 0.878999 0.376724 0.376714C0.879022 -0.125571 1.69337 -0.125571 2.19598 0.376714L24.6233 22.8038C25.1256 23.306 25.1256 24.1204 24.6233 24.6227C24.3712 24.8732 24.0422 25 23.7147 25Z" fill="#4C00FE"/>
</svg></button>
          <img src="${t.images[0].url}" alt="" class="modal-circle-img">
          <div class="modal-wrap">
        <img src="${t.images[0].url}" alt="" class="modal-full-img">
        <div class="modal-descr">
            <h3 class="modal-info">Info</h3>
            <p class="modal-text">${t.pleaseNote}</p>
            <h3 class="modal-info">When</h3>
             <p class="modal-text">${t.dates.start.localDate}</p>
            <h3 class="modal-info">Where</h3>
            <p class="modal-text">${t._embedded.venues[0].address.line1}, ${t._embedded.venues[0].city.name}</p>
            <h3 class="modal-info">Who</h3>
            <p class="modal-text">${t.name}</p>
            <a target="_blank" href="${t.url}" class="modal-buy">Buy tickets</a>
        </div>
    </div>
    <a target="_blank" href="${t.url}" class="modal-more">More from this author</a>
        </div>
      </div>`})}),s.addEventListener("click",e=>{e.target.closest(".close-btn")&&(s.innerHTML="",document.body.classList.toggle("no-scroll"))}),n.addEventListener("input",e=>{e.preventDefault(),(async function(e,t){let a=new URLSearchParams({countryCode:e,apikey:"SF9iTUj6nhCVPu2H1SEAypln081nKnA5",keyword:t});return(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${a}`)).json()})(o.value,l.value).then(e=>a.innerHTML=t(e._embedded.events))});
//# sourceMappingURL=EventBooster.89b82c4c.js.map
