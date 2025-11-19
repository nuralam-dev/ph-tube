// load Categories fetch
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

// load video fetch
function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

// category video function
function displayCategories(categories) {
  // get element
  const categoryContainer = document.getElementById("category-container");
  // loop
  for (let cat of categories) {
    // console.log(cat);
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
<button class="btn btn-sm btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`;
    // append
    categoryContainer.append(categoryDiv);
  }
}

// load video function
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    console.log(video);

    const videoCard = document.createElement("div")
    videoCard.innerHTML=`
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideo();
