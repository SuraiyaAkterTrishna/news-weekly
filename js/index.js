const loadCategories = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data.data.news_category);
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");

  categoriesContainer.style.display = "flex";

  categories.forEach((category) => {
    // console.log(category);
    const categoriesDiv = document.createElement("div");
    categoriesDiv.style.flexGrow = "auto"; // Adjust the flex properties as desired
    categoriesDiv.style.flexShrink = "0";
    categoriesDiv.style.marginBottom = "20px"; // Add spacing between categories
    categoriesDiv.style.flexWrap = "wrap";
    categoriesDiv.innerHTML = `<button onclick="loadCategoryItems(${category.category_id})" class="border-0">${category.category_name}</button>`;
    categoriesContainer.appendChild(categoriesDiv);
  });
};
const loadCategoryItems = async (category_id) => {
  const id = category_id.toString().padStart(2, "0");
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategoryItems(data.data);
};
const displayCategoryItems = (items) => {
  // console.log(items);
  const totalItems = document.getElementById("total-items");

  if (items.length) {
    totalItems.classList.remove("d-none");
    totalItems.innerHTML = `
    <p class="py-2 px-2">${items.length} items found</p>
    `;
  } else {
    totalItems.classList.remove("d-none");
    totalItems.innerHTML = `
    <p class="py-2 px-2">No available items found</p>
    `;
  }
  const itemsContainer = document.getElementById("itemsContainer");
  itemsContainer.innerHTML = ``;
  items.forEach((item) => {
    // console.log(item);
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("col");
    itemDiv.innerHTML = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    `;
    itemsContainer.appendChild(itemDiv);
  });
};
loadCategories();
