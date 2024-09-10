var L=Object.defineProperty;var T=(e,t,i)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var p=(e,t,i)=>T(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function i(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(c){if(c.ep)return;c.ep=!0;const r=i(c);fetch(c.href,r)}})();class w{constructor(t){p(this,"id");p(this,"img");p(this,"name");p(this,"price");this.id=t.id,this.img=t.img,this.name=t.name,this.price=t.price}productImg(){return`./src/assets/img/${this.img}`}}const l=[{id:"4112512522461616224",img:"1.jpg",name:"Coffee",price:39},{id:"41125125532266152424",img:"2.png",name:"Crossoni",price:29},{id:"41125125532266152424",img:"3.png",name:"Pancake",price:29},{id:"411251215125522424",img:"4.png",name:"Taco",price:59},{id:"41125125221523219752424",img:"5.png",name:"Sushi",price:99},{id:"41125152154217959742522424",img:"6.png",name:"Ramen",price:129},{id:"411251256346246432643643522424",img:"7.png",name:"Cheesilog",price:99},{id:"41125125613945675461314222424",img:"8.png",name:"Jumbo Burger",price:119},{id:"41125126342145435231522424",img:"9.png",name:"Shrimp",price:59},{id:"135152155284647471521512521525",img:"10.png",name:"Strawberry Meal",price:179},{id:"131314442416484864512432342",img:"11.png",name:"Strawberry Halo-Halo",price:69},{id:"13131444248467541512432342",img:"12.png",name:"Strawberry Macarons",price:119},{id:"13131444241754734512432342",img:"13.png",name:"Strawberry Pie",price:89},{id:"131314442417868567512432342",img:"14.png",name:"Strawberry Donut",price:89},{id:"131314442414863453512432342",img:"15.png",name:"Strawberry Mallow",price:89},{id:"131314442415176375675672432342",img:"16.png",name:"Strawberry Matcha Ice Cream ",price:99},{id:"13131444246364363451512432342",img:"17.png",name:"Strawberry Gelatin",price:129},{id:"1313144424156261612432342",img:"18.png",name:"Strawberry Milkshake",price:69},{id:"131314442415124341552342",img:"19.png",name:"Strawberry Boba",price:69}].map(e=>new w(e));console.log(l);let o=C();function q(){localStorage.setItem("cart",JSON.stringify(o))}function C(){const e=localStorage.getItem("cart");return e==null?[]:JSON.parse(e)}function B(e){let t;o.forEach(i=>{e==i.id&&(t=i)}),t?t.quantity+=1:o.push({id:e,quantity:1}),q()}function M(e){const t=document.querySelector(`.checkout-content-${e}`);t==null||t.remove();const i=[];o.forEach(n=>{n.id!==e&&i.push(n)}),o=i,q()}let y=[];const k=document.querySelector(".bottom-total-price");function f(){const e=document.querySelector(".cart-count"),t=o.reduce((n,c)=>n+c.quantity,0);y=[],o.forEach(n=>{const c=n.id,r=l.find(g=>g.id===c);r&&y.push({price:r.price*n.quantity})});const i=y.reduce((n,c)=>n+=c.price,0);k&&(k.innerHTML=`Total: (item: ${t}) = <span>₱${i}</span>`),e&&(e.innerText=`${t}`),q()}let $="";l.forEach(e=>{$+=`
      <div class="product-content">
        <div class="product-img-container">
          <img class="product-img" src="${e.productImg()}">
          </div>
           <div class="product-details">
             <p class="product-name">${e.name}</p>
             <p class="product-price">₱ ${e.price}</p>
           </div>
        <div class="product-add-to-cart-button">
          <button class="add-to-cart-button" data-product-id=${e.id}>Add to cart</button>
        </div>
      </div>
  `;const t=document.querySelector(".product-container");t&&(t.innerHTML=$)});const P=document.querySelectorAll(".add-to-cart-button");P.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.productId;t&&(B(t),f())})});let u;function A(e){l.forEach(t=>{t.id===e&&(u=t)}),o.forEach(t=>{t.id===u.id&&(t.quantity+=1),f()})}function Q(e){l.forEach(t=>{t.id===e&&(u=t)}),o.forEach(t=>{if(t.id===u.id){if(t.quantity<=1)return;t.quantity-=1}}),f()}function h(e){l.forEach(n=>{n.id===e&&(u=n)});const t=document.querySelector(`.data-checkout-${e}`),i=document.querySelector(`.data-quantity-${e}`);o.forEach(n=>{if(n.id===u.id){const c=u.price*n.quantity;t&&(t.textContent=`${c}`),i&&(i.textContent=`${n.quantity}`)}})}let E="";o.forEach(e=>{const t=e.id;let i;l.forEach(d=>{d.id===t&&(i=d)}),i&&(E+=`
    <div class="checkout-content checkout-content-${i.id}">
      <div class="checkout-img-container">
        <img class="checkout-img" src="${i.productImg()}">
      </div>
      <div class="checkout-details-container">
        <p class="checkout-name">${i.name}</p>
        <p class="checkout-price">₱ ${i.price} (<span class="total-price-span data-checkout-${i.id}">${i.price*e.quantity}</span>)</p>
      </div>

      <div class="checkout-quantity-container">
        <div class="checkout-quantity-content">
          <p>Quantity</p>
          <div class="total-quantity-container">
            <button class="adding-quantity" data-checkout=${i.id}>+</button>
            <p class="total-quantity data-quantity-${i.id}">${e.quantity}</p>
            <button class="deducting-quantity" data-checkout=${i.id}>-</button>
          </div>
        </div>
      </div>

      <div class="edit-delete-button-container">
        <div class="edit-delete-button-content">
          <button class="delete-button" data-checkout=${i.id}><img class="delete-icon" src="./src/assets/img/delete.png"></button>
        </div>
      </div>
    </div>
`);const n=document.querySelector(".checkout-container");n&&(n.innerHTML=E),document.querySelectorAll(".adding-quantity").forEach(d=>{d.addEventListener("click",m=>{const a=m.currentTarget.getAttribute("data-checkout");a&&(A(a),h(a))})}),document.querySelectorAll(".deducting-quantity").forEach(d=>{d.addEventListener("click",m=>{const a=m.currentTarget.getAttribute("data-checkout");a&&(Q(a),h(a))})}),document.querySelectorAll(".delete-button").forEach(d=>{d.addEventListener("click",m=>{const a=m.currentTarget.getAttribute("data-checkout"),S=document.querySelector(`.checkout-content-${a}`);S&&S.remove(),a&&(M(a),h(a),f())})})});f();const s=document.querySelector(".hamburger-list"),b=document.querySelector(".top-section-link-phone");s&&b&&s.addEventListener("click",()=>{s.classList.contains("close")?(s.classList.remove("close"),s.src="./src/assets/img/hamburger.png",b.style.display="none"):(s.classList.add("close"),s.src="./src/assets/img/close.png",b.style.display="flex")});
