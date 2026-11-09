let e=document.querySelector(".modal-cont"),t=document.querySelector(".events"),a=document.querySelector(".modal-cont"),l=document.querySelector(".form"),s=document.querySelector(".name"),o=document.querySelector(".country"),c=document.querySelector(".btn-prev"),n=document.querySelector(".btn-next"),i=document.querySelector(".pagination-scale-text"),r=0,d=0;async function m(e,a){let l=await async function(e=0,t,a){try{let l=new URLSearchParams({size:20,page:e,apikey:"SF9iTUj6nhCVPu2H1SEAypln081nKnA5",countryCode:t,keyword:a}),s=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${l}`);if(!s.ok)throw Error("Помилка завантаження інформації");return await s.json()}catch(e){console.error(e)}}(r,e,a);console.log(e,a),l&&(d=l.page.totalPages,t.innerHTML=l._embedded.events.map(e=>`<li data-id=${e.id} class="list-item">
        <img src="${e.images[0].url}" alt="${e.id}" class="list-item-img">
        <h3 class="list-item-title">${e.name}</h3>
        <p class="list-item-description-date">${e.dates.start.localDate}</p>
        <p class="list-item-description-place">${e._embedded.venues[0].city.name}</p>
    </li>`).join(""),i.textContent=`${r+1} / ${d}`,c.classList.toggle("btn-locked",0===r),n.classList.toggle("btn-locked",r>=d-1))}c.addEventListener("click",e=>{e.preventDefault(),r>0&&(r-=1,m(o.value,s.value))}),n.addEventListener("click",e=>{e.preventDefault(),r<d-1&&(r+=1,m(o.value,s.value))}),m(o.value,s.value),t.addEventListener("click",t=>{let a=t.target.closest("li");a&&(async function(e){try{let t=await new URLSearchParams({apikey:"SF9iTUj6nhCVPu2H1SEAypln081nKnA5"});return(await fetch(`https://app.ticketmaster.com/discovery/v2//events/${e}?${t}`)).json()}catch(e){alert(e)}})(a.dataset.id).then(t=>{document.body.classList.toggle("no-scroll"),e.innerHTML=`<div class="backdrop">
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
      </div>`})}),a.addEventListener("click",e=>{e.target.closest(".close-btn")&&(a.innerHTML="",document.body.classList.toggle("no-scroll"))}),l.addEventListener("input",e=>{e.preventDefault(),m(o.value,s.value)});
//# sourceMappingURL=EventBooster.74c75010.js.map
