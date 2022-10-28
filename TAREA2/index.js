const inputSearch = document.querySelector(".input-search");
const btn = document.querySelector(".btn-search");
const card = document.querySelector(".information-container");

btn.addEventListener("click", async function () {
  let user = inputSearch.value;
  const res = await fetch(`https://api.github.com/users/${user}`);
  const data = await res.json();
  console.log(data);
  card.innerHTML = `
  <div class="information-container">  

  <div class="image-container">
  <img width="100" height="100" src=${data.avatar_url}? alt="" />
  </div>

  <div class="description-container">
    <div class="user-date-container">
    <h2>${data.name}</h2>
    <p>Joined ${data.created_at}</p>
  </div>
  
  <div class="user-bio-container">
    <p>@${data.login}</p>
    <p>${data.bio}</p>
  </div>
  
  <div class="card-information">
    <div>
      <h5>Repos</h5>
      <h2>${data.public_repos}</h2>
    </div>
    <div>
      <h5>Followers</h5>
      <h2>${data.followers}</h2>
    </div>
    <div>
      <h5>Following</h5>
      <h2>${data.following}</h2>
    </div>
  </div>
  
  <div class="info-container">
    <div>
      <p>
        <img width="15" src="./images/pin.png" alt="" />&nbsp;${data.location}
      </p>
      <p>
        <img
          width="15"
          src="./images/link.png"
          alt=""
        />&nbsp;${data.blog}
      </p>
    </div>
    <div>
      <p>
        <img width="15" src="./images/twitter.png" alt="" />&nbsp;${data.twitter_username}
      </p>

      <p>
        <img
          width="15"
          src="./images/hotel.png"
          alt=""
        />&nbsp;@${data.login}
      </p>
    </div>
  </div>
</div>
</div>
`;
});
