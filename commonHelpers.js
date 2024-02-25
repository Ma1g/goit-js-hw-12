import{a as S,i as d,S as v}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function f(o,e){const s="?key=42545728-1df7bed7017c3aa925a22d68f",i="https://pixabay.com/api/",t=`&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,r=`${i}${s}${t}`,n={page:e,per_page:15};try{const c=(await S.get(r,{params:n})).data;if(c.hits&&c.hits.length>0)return c;I()}catch(m){console.error(m.message)}}const I=()=>d.error({message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",titleSize:"16px",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",maxWidth:"432px"}),E={imageElem:document.querySelector(".gallery")},w=new v(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});function T(o){const e=o.map(({webformatURL:s,largeImageURL:i,tags:t,likes:r,views:n,comments:m,downloads:c})=>`<li class="gallery-item">
            <a href="${i}">
                <img src="${s}" alt="${t}"/>
                <div class="img-info">
                    <p class="info-item"><b>Likes:</b>${r}</p>
                    <p class="info-item"><b>Views:</b>${n}</p>
                    <p class="info-item"><b>Comments:</b>${m}</p>
                    <p class="info-item"><b>Downloads:</b>${c}</p>
                </div>
            </a>
        </li>`).join("");E.imageElem.insertAdjacentHTML("beforeend",e),w.refresh()}const u="image-tag",a={imgTagInput:document.querySelector("#search-img"),searchBtn:document.querySelector(".form"),imageElem:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".load-btn"),loader:document.querySelector(".backdrop")};let g,l,p;a.imgTagInput.addEventListener("input",O);a.searchBtn.addEventListener("submit",$);a.btnLoadMore.addEventListener("click",x);async function $(o){if(o.preventDefault(),g=a.imgTagInput.value.trim(),l=1,g==="")return N(),!1;y();try{const e=await f(g,l);p=Math.ceil(e.totalHits/15),a.imageElem.innerHTML="",h(e.hits)}catch(e){console.log(e.message)}localStorage.removeItem(u),b(),L(),a.searchBtn.reset()}async function x(){l+=1,y();const o=await f(g,l);h(o.hits),b(),L();const e=a.imageElem.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}function C(o,e){const s=JSON.stringify(e);localStorage.setItem(o,s)}function O(){const e={tag:a.imgTagInput.value.trim()};C(u,e)}function q(o){const e=localStorage.getItem(o);try{return JSON.parse(e)}catch(s){return console.error("Error parsing JSON from localStorage:",s),{}}}function B(){const o=q(u)||{};a.imgTagInput.value=o.tag||""}B();function h(o){T(o),M()}function M(){a.btnLoadMore.classList.remove("hidden")}function P(){a.btnLoadMore.classList.add("hidden")}function y(){a.loader.classList.add("is-open")}function b(){a.loader.classList.remove("is-open")}function L(){l>=p&&(P(),z())}const N=()=>d.error({message:"Please enter a search tag",titleColor:"white",titleSize:"16px",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight"}),z=()=>d.info({message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",position:"bottomCenter"});
//# sourceMappingURL=commonHelpers.js.map
