import{a as l,S as u,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="50364226-d4960ed7ef7ef1013eeb128c9",f="https://pixabay.com/api/";async function m(n){return(await l.get(f,{params:{key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=new u(".gallery a");function y(n){const o=document.querySelector(".gallery"),s=n.map(r=>`
        <li>
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="info">
                <p>Likes: ${r.likes}</p>
                <p>Views: ${r.views}</p>
                <p>Comments: ${r.comments}</p>
                <p>Downloads: ${r.downloads}</p>
            </div>
        </li>
    `).join("");o.insertAdjacentHTML("beforeend",s),p.refresh()}function h(){document.querySelector(".gallery").innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async n=>{n.preventDefault();const o=c.elements["search-text"].value.trim();if(!o){i.warning({title:"Oops",message:"Please enter a search term."});return}h(),g();try{const s=await m(o);s.hits.length===0?i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(s.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{L()}});
//# sourceMappingURL=index.js.map
