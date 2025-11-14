function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  // get element
  const categoryContainer = document.getElementById("category-container");
  // loop
  for (let cat of categories) {
    console.log(cat);
    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
<button class="btn btn-sm btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`;
// append
categoryContainer.append(categoryDiv)
  }
}

loadCategories();
