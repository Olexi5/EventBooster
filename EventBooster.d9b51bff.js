let e=document.querySelector(".modal-cont");function t(e){return e.map(e=>`<li data-id=${e.id} class="list-item">
        <img src="${e.images[0].url}" alt="${e.id}" class="list-item-img">
        <h3 class="list-item-title">${e.name}</h3>
        <p class="list-item-description-date">${e.dates.start.localDate}</p>
        <p class="list-item-description-place">${e._embedded.venues[0].city.name}</p>
    </li>`).join("")}let a=document.querySelector(".events"),s=document.querySelector(".modal-cont"),l=document.querySelector(".form"),n=document.querySelector(".name"),c=document.querySelector(".country"),o=document.querySelector(".btn-prev"),i=document.querySelector(".btn-next"),r=document.querySelector(".pagination-scale-text"),d=0,m=0;async function u(){let e=await async function(e=0){try{let t=new URLSearchParams({size:20,page:e,apikey:"SF9iTUj6nhCVPu2H1SEAypln081nKnA5"}),a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${t}`);if(!a.ok)throw Error("Помилка завантаження інформації");return await a.json()}catch(e){console.error(e)}}(d);e&&(m=e.page.totalPages,a.innerHTML=t(e._embedded.events),r.textContent=`${d+1} / ${m}`,o.classList.toggle("btn-locked",0===d),i.classList.toggle("btn-locked",d>=m-1))}o.addEventListener("click",e=>{e.preventDefault(),d>0&&(d-=1,u())}),i.addEventListener("click",e=>{e.preventDefault(),d<m-1&&(d+=1,u())}),u(),a.addEventListener("click",t=>{let a=t.target.closest("li");a&&(async function(e){try{let t=await new URLSearchParams({apikey:"SF9iTUj6nhCVPu2H1SEAypln081nKnA5"});return(await fetch(`https://app.ticketmaster.com/discovery/v2//events/${e}?${t}`)).json()}catch(e){alert(e)}})(a.dataset.id).then(t=>{document.body.classList.toggle("no-scroll"),e.innerHTML=`<div class="backdrop">
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
      </div>`})}),s.addEventListener("click",e=>{e.target.closest(".close-btn")&&(s.innerHTML="",document.body.classList.toggle("no-scroll"))}),l.addEventListener("input",e=>{e.preventDefault(),(async function(e,t){let a=new URLSearchParams({countryCode:e,apikey:"SF9iTUj6nhCVPu2H1SEAypln081nKnA5",keyword:t});return(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${a}`)).json()})(c.value,n.value).then(e=>{a.innerHTML=t(e._embedded.events)})});
//# sourceMappingURL=EventBooster.d9b51bff.js.map
