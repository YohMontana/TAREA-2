const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
const carta = document.querySelector(".card");


btn.addEventListener("click", async function(){
 let user = input.value;
 const res = await fetch(`https://api.github.com/users/${user}`);
 const data = await res.json();
 console.log(data) ;
 carta.innerHTML = `<img src=${data.avatar_url} class="card-img-top"
 alt="...">
<div class="card-body">
 <h5 class="card-title">${data.login}</h5>
 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
   content.</p>
 <a href="${data.html_url}" class="btn btn-primary">Visita mi pagina</a>
</div>`
 
})