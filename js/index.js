const loadCategories = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data.data.news_category);
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");

  categoriesContainer.style.display = "flex";
  categoriesContainer.style.flexWrap = "wrap";

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
  // no author and no views api 
  // const url = `https://openapi.programming-hero.com/api/news/2e78e5e0310c2e9adbb6efb1a263e745`;
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
    console.log(item);
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("col");
    itemDiv.innerHTML = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${
            item.image_url
          }" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.details.slice(0, 150)}...</p>
            <div class="d-flex flex-wrap justify-content-between align-items-center">
                    <div class="d-flex">
                      <img class="border-0 rounded-circle" width="50px" src="${item.author.img}" alt="">
                      <div class="ms-2">
                        <span class="d-block text-secondary fw-bold">${item.author.name === null || item.author.name == "system" ? 'No data available' : item.author.name}</span>
                        <span class="text-secondary">${item.author.published_date === null ? 'No data available' : item.author.published_date}</span>
                      </div>
                    </div>
                    <div>
                      <span class="text-secondary">
                        <svg style="width: 35px; height: 30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>                        
                      </span>
                      <span class="fw-bold text-secondary">${item.total_view === null ? 'No data available' : item.total_view}</span>
                    </div>
                    <div>
                      <span class="text-secondary">
                        <svg style="width: 35px; height: 30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>                        
                      </span>
                      <span class="text-secondary">
                        <svg style="width: 35px; height: 30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>                        
                      </span>
                      <span class="text-secondary">
                        <svg style="width: 35px; height: 30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>                        
                      </span>
                      <span class="text-secondary">
                        <svg style="width: 35px; height: 30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>                        
                      </span>
                      <span class="text-secondary">
                        <svg style="width: 35px; height: 30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>                        
                      </span>
                    </div>
                    <div>
                      <button onclick="loadItemDetails('${item._id}')" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#itemDetailModal">Show Details</button>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
    `;
    itemsContainer.appendChild(itemDiv);
  });
};
const loadItemDetails= (id) => {

}
loadCategories();
